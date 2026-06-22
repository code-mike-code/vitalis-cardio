import { PDFDocument, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

import robotoRegularUrl from '../../assets/fonts/Roboto-Regular.ttf?url';
import robotoBoldUrl from '../../assets/fonts/Roboto-Bold.ttf?url';
import { JOB_CATEGORIES } from './types';
import type { FormData } from './types';
import type { Translations } from '../../i18n/translations';

// A4 in points
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;

const COLOR_PRIMARY = rgb(0.004, 0.353, 0.384); // #015a62
const COLOR_TEXT = rgb(0.1, 0.18, 0.19);
const COLOR_MUTED = rgb(0.29, 0.38, 0.4);
const COLOR_LINE = rgb(0.78, 0.83, 0.84);

interface Ctx {
  doc: PDFDocument;
  page: PDFPage;
  y: number;
  regular: PDFFont;
  bold: PDFFont;
}

function addPage(ctx: Ctx) {
  ctx.page = ctx.doc.addPage([PAGE_W, PAGE_H]);
  ctx.y = PAGE_H - MARGIN;
}

function ensureSpace(ctx: Ctx, needed: number) {
  if (ctx.y - needed < MARGIN) addPage(ctx);
}

// Word-wrap a string to fit maxWidth at given font/size
function wrap(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines.length ? lines : [''];
}

function drawParagraph(
  ctx: Ctx,
  text: string,
  opts: { font?: PDFFont; size?: number; color?: ReturnType<typeof rgb>; indent?: number; gap?: number } = {}
) {
  const font = opts.font ?? ctx.regular;
  const size = opts.size ?? 10;
  const color = opts.color ?? COLOR_TEXT;
  const indent = opts.indent ?? 0;
  const lineHeight = size * 1.4;
  const lines = wrap(text, font, size, CONTENT_W - indent);
  for (const line of lines) {
    ensureSpace(ctx, lineHeight);
    ctx.y -= lineHeight;
    ctx.page.drawText(line, { x: MARGIN + indent, y: ctx.y, size, font, color });
  }
  if (opts.gap) ctx.y -= opts.gap;
}

// "Label: value" — label bold inline, value wrapped
function drawField(ctx: Ctx, label: string, value: string) {
  const size = 10;
  const lineHeight = size * 1.5;
  const labelText = `${label}: `;
  const labelW = ctx.bold.widthOfTextAtSize(labelText, size);
  const valueLines = wrap(value || '—', ctx.regular, size, CONTENT_W - labelW);

  ensureSpace(ctx, lineHeight);
  ctx.y -= lineHeight;
  ctx.page.drawText(labelText, { x: MARGIN, y: ctx.y, size, font: ctx.bold, color: COLOR_TEXT });
  ctx.page.drawText(valueLines[0], { x: MARGIN + labelW, y: ctx.y, size, font: ctx.regular, color: COLOR_TEXT });

  for (let i = 1; i < valueLines.length; i++) {
    ensureSpace(ctx, lineHeight);
    ctx.y -= lineHeight;
    ctx.page.drawText(valueLines[i], { x: MARGIN + labelW, y: ctx.y, size, font: ctx.regular, color: COLOR_TEXT });
  }
}

function drawSectionTitle(ctx: Ctx, title: string) {
  ctx.y -= 14; // top gap
  ensureSpace(ctx, 28);
  ctx.y -= 13;
  ctx.page.drawText(title, { x: MARGIN, y: ctx.y, size: 12, font: ctx.bold, color: COLOR_PRIMARY });
  ctx.y -= 6;
  ctx.page.drawLine({
    start: { x: MARGIN, y: ctx.y },
    end: { x: PAGE_W - MARGIN, y: ctx.y },
    thickness: 1,
    color: COLOR_LINE,
  });
  ctx.y -= 4;
}

const yesNo = (t: Translations, v: string) =>
  v === 'yes' ? t.yesOption : v === 'no' ? t.noOption : v === 'noInfo' ? t.noInfoOption : '—';

export async function generateRegistrationPdf(data: FormData, t: Translations): Promise<void> {
  const doc = await PDFDocument.create();
  doc.registerFontkit(fontkit);

  const [regBytes, boldBytes] = await Promise.all([
    fetch(robotoRegularUrl).then((r) => r.arrayBuffer()),
    fetch(robotoBoldUrl).then((r) => r.arrayBuffer()),
  ]);
  const regular = await doc.embedFont(regBytes, { subset: true });
  const bold = await doc.embedFont(boldBytes, { subset: true });

  const ctx: Ctx = { doc, page: doc.addPage([PAGE_W, PAGE_H]), y: PAGE_H - MARGIN, regular, bold };

  // Header
  drawParagraph(ctx, t.formTitle, { font: bold, size: 16, color: COLOR_PRIMARY });
  drawParagraph(ctx, t.formSubtitle, { font: regular, size: 9.5, color: COLOR_MUTED, gap: 2 });
  drawParagraph(ctx, t.projectNumber, { font: regular, size: 9, color: COLOR_MUTED });

  // 1 – Personal
  drawSectionTitle(ctx, t.sectionPersonal);
  drawField(ctx, t.fullName, data.fullName);
  drawField(ctx, t.pesel, data.pesel);
  drawField(ctx, t.age, data.age);
  drawField(ctx, t.postalCode, data.postalCode);
  drawField(ctx, t.city, data.city);
  drawField(ctx, t.street, data.street);
  drawField(ctx, t.county, data.county);
  drawField(ctx, t.municipality, data.municipality);
  drawField(ctx, t.phone, data.phone);
  drawField(ctx, t.email, data.email);

  // 2 – Demographic
  drawSectionTitle(ctx, t.sectionDemographic);
  drawField(
    ctx,
    t.gender,
    data.gender === 'female' ? t.genderFemale : data.gender === 'male' ? t.genderMale : '—'
  );
  drawField(
    ctx,
    t.citizenship,
    data.citizenship === 'polish' ? t.citizenshipPolish
      : data.citizenship === 'eu' ? t.citizenshipEU
      : data.citizenship === 'nonEU' ? t.citizenshipNonEU
      : data.citizenship === 'stateless' ? t.citizenshipStateless : '—'
  );

  // 3 – Education
  drawSectionTitle(ctx, t.sectionEducation);
  drawField(
    ctx,
    t.educationLabel,
    data.education === 'secondary' ? t.educationSecondary
      : data.education === 'postSecondary' ? t.educationPostSecondary
      : data.education === 'higher' ? t.educationHigher : '—'
  );

  // 4 – Employment
  drawSectionTitle(ctx, t.sectionEmployment);
  drawField(
    ctx,
    t.employmentStatusLabel,
    data.employmentStatus === 'employed' ? t.employmentEmployed
      : data.employmentStatus === 'unemployed' ? t.employmentUnemployed : '—'
  );
  drawField(ctx, t.workplaceName, data.workplaceName);
  const jobKey = JOB_CATEGORIES.find((k) => k === data.jobCategory);
  const jobLabel = jobKey
    ? (t[`job${jobKey.charAt(0).toUpperCase()}${jobKey.slice(1)}` as keyof Translations] as string)
    : '—';
  drawField(ctx, t.jobCategoryLabel, jobLabel);

  // 5 – Participant status
  drawSectionTitle(ctx, t.sectionParticipantStatus);
  drawField(ctx, t.foreignOrigin, yesNo(t, data.foreignOrigin));
  drawField(ctx, t.thirdCountryNational, yesNo(t, data.thirdCountryNational));
  drawField(ctx, t.ethnicMinority, yesNo(t, data.ethnicMinority));
  drawField(ctx, t.homeless, yesNo(t, data.homeless));
  drawField(ctx, t.disabled, yesNo(t, data.disabled));

  // 6 – Pain
  drawSectionTitle(ctx, t.sectionPainStatus);
  drawField(ctx, t.painAffectsWork, yesNo(t, data.painAffectsWork));

  // 7 – Declarations
  drawSectionTitle(ctx, t.sectionDeclarations);
  const decls: Array<[string, boolean]> = [
    [t.declarationCriteria, data.declarationCriteria],
    [t.declarationWillingness, data.declarationWillingness],
    [t.declarationHealthData, data.declarationHealthData],
    [t.declarationContraindications, data.declarationContraindications],
    [t.declarationTruth, data.declarationTruth],
  ];
  for (const [text, checked] of decls) {
    drawParagraph(ctx, `[${checked ? 'X' : ' '}]  ${text}`, { size: 9.5, gap: 2 });
  }
  ctx.y -= 6;
  drawField(ctx, t.dateLabel, data.signatureDate);
  drawField(ctx, t.signatureLabel, data.signature);

  // Save & download
  const bytes = await doc.save();
  const blob = new Blob([bytes as BlobPart], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeName = (data.fullName || 'formularz').trim().replace(/\s+/g, '_').replace(/[^\p{L}\d_-]/gu, '');
  a.href = url;
  a.download = `Formularz_zgloszeniowy_${safeName || 'uczestnik'}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
