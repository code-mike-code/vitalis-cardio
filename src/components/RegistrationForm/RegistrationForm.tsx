import {
  useState,
  useId,
  useRef,
  useCallback,
  type FC,
  type FormEvent,
  type ReactNode,
} from 'react';

import styles from './RegistrationForm.module.scss';
import { translations, type Locale } from '../../i18n/translations';
import type { FormData, FormErrors, FormStep } from './types';
import { JOB_CATEGORIES } from './types';
import { validateStep, TOTAL_STEPS } from './validation';

export interface RegistrationFormProps {
  locale?: Locale;
  onSubmit?: (data: FormData) => Promise<void> | void;
  className?: string;
}

const INITIAL_DATA: FormData = {
  fullName: '', pesel: '', age: '', postalCode: '', city: '',
  street: '', county: '', municipality: '', phone: '', email: '',
  gender: '', citizenship: '', education: '', employmentStatus: '',
  workplaceName: '', jobCategory: '', foreignOrigin: '',
  thirdCountryNational: '', ethnicMinority: '', homeless: '',
  disabled: '', painAffectsWork: '', declarationCriteria: false,
  declarationWillingness: false, declarationHealthData: false,
  declarationContraindications: false, declarationTruth: false,
  signatureDate: '', signature: '',
};

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

const Field: FC<FieldProps> = ({ id, label, error, required, hint, children }) => (
  <div className={styles.fieldGroup}>
    <label className={styles.label} htmlFor={id}>
      {label}
      {required && <span className={styles.requiredMark} aria-hidden="true"> *</span>}
    </label>
    {children}
    {hint && <p className={styles.hintText} id={`${id}-hint`}>{hint}</p>}
    {error && (
      <p className={styles.errorMessage} id={`${id}-error`} role="alert" aria-live="polite">
        {error}
      </p>
    )}
  </div>
);

interface RadioGroupProps {
  name: string;
  legend: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  inline?: boolean;
}

const RadioGroup: FC<RadioGroupProps> = ({
  name, legend, options, value, onChange, error, required, inline,
}) => {
  const errorId = `${name}-error`;
  return (
    <fieldset
      className={styles.radioGroup}
      aria-required={required}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className={styles.label}>
        {legend}
        {required && <span className={styles.requiredMark} aria-hidden="true"> *</span>}
      </legend>
      <div className={inline ? styles.radioInline : undefined}>
        {options.map((opt) => (
          <label key={opt.value} className={styles.radioOption}>
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              aria-required={required}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>
      {error && (
        <p className={styles.errorMessage} id={errorId} role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </fieldset>
  );
};

export const RegistrationForm: FC<RegistrationFormProps> = ({
  locale: localeProp = 'pl',
  onSubmit,
  className,
}) => {
  const [locale, setLocale] = useState<Locale>(localeProp);
  const t = translations[locale];
  const [step, setStep] = useState<FormStep>(1);
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formId = useId();
  const mainId = `${formId}-main`;
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);

  const update = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }, []);

  const focusStepHeading = () => {
    setTimeout(() => stepHeadingRef.current?.focus(), 50);
  };

  const handleNext = () => {
    const stepErrors = validateStep(step, data, t);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      const firstErrorKey = Object.keys(stepErrors)[0];
      const el = document.getElementById(`${formId}-${firstErrorKey}`);
      el?.focus();
      return;
    }
    setErrors({});
    setStep((s) => (s < TOTAL_STEPS ? ((s + 1) as FormStep) : s));
    focusStepHeading();
  };

  const handleBack = () => {
    setStep((s) => (s > 1 ? ((s - 1) as FormStep) : s));
    setErrors({});
    focusStepHeading();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep(step, data, t);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      const { generateRegistrationPdf } = await import('./generatePdf');
      await generateRegistrationPdf(data, t);
      await onSubmit?.(data);
      setSubmitted(true);
    } catch {
      setSubmitError(t.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  const fid = (field: keyof FormData) => `${formId}-${field}`;

  const jobCategoryOptions = JOB_CATEGORIES.map((key) => ({
    value: key,
    label: t[`job${key.charAt(0).toUpperCase()}${key.slice(1)}` as keyof typeof t] as string,
  }));

  const progress = Math.round((step / TOTAL_STEPS) * 100);

  const stepTitles: Record<FormStep, string> = {
    1: t.sectionPersonal, 2: t.sectionDemographic, 3: t.sectionEducation,
    4: t.sectionEmployment, 5: t.sectionParticipantStatus,
    6: t.sectionPainStatus, 7: t.sectionDeclarations,
  };

  if (submitted) {
    return (
      <div className={`${styles.formWrapper} ${className ?? ''}`}>
        <div className={styles.successContainer} role="status" aria-live="polite">
          <span className={styles.successIcon} aria-hidden="true">✓</span>
          <h2 className={styles.successTitle}>{t.submitSuccess}</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.form} ${styles.formWrapper} ${className ?? ''}`}>
      <a href={`#${mainId}`} className={styles.skipLink}>
        {locale === 'pl' ? 'Przejdź do formularza' : locale === 'ua' ? 'Перейти до форми' : 'Skip to form'}
      </a>

      <header className={styles.formHeader}>
        <h1 className={styles.formTitle}>{t.formTitle}</h1>
        <p className={styles.formSubtitle}>{t.formSubtitle}</p>
        <span className={styles.projectNumber}>{t.projectNumber}</span>
      </header>

      <nav aria-label={locale === 'pl' ? 'Wybór języka' : locale === 'ua' ? 'Вибір мови' : 'Language selection'}>
        <ul className={styles.langSwitcher} role="list">
          {(['pl', 'en', 'ua'] as Locale[]).map((l) => (
            <li key={l}>
              <button
                type="button"
                className={`${styles.langBtn} ${locale === l ? styles.langBtnActive : ''}`}
                onClick={() => setLocale(l)}
                aria-current={locale === l ? 'true' : undefined}
                aria-label={l === 'pl' ? 'Polski' : l === 'en' ? 'English' : 'Українська'}
              >
                {l === 'pl' ? '🇵🇱 PL' : l === 'en' ? '🇬🇧 EN' : '🇺🇦 UA'}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.progressContainer}>
        <div className={styles.progressLabel}>
          <span className={styles.progressStepText}>
            {t.step} {step} {t.of} {TOTAL_STEPS}
          </span>
          <span aria-hidden="true">{progress}%</span>
        </div>
        <div
          className={styles.progressBar}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={t.ariaProgress}
        >
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>
        <div className={styles.progressSteps} aria-hidden="true">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => (
            <span
              key={i}
              className={`${styles.progressDot} ${
                i + 1 === step ? styles.progressDotActive
                : i + 1 < step ? styles.progressDotDone : ''
              }`}
            />
          ))}
        </div>
      </div>

      <form id={mainId} onSubmit={handleSubmit} noValidate aria-label={t.formTitle}>
        <div className={styles.stepCard}>
          <h2
            className={styles.stepTitle}
            data-step={step}
            ref={stepHeadingRef}
            tabIndex={-1}
          >
            {stepTitles[step]}
          </h2>

          {submitError && (
            <div className={styles.formErrorBanner} role="alert">{submitError}</div>
          )}

          {/* STEP 1 – Personal */}
          {step === 1 && (
            <div className={styles.fieldGrid}>
              <div className={styles.fieldGridFull}>
                <Field id={fid('fullName')} label={t.fullName} error={errors.fullName} required>
                  <input id={fid('fullName')} type="text"
                    className={`${styles.input} ${errors.fullName ? styles.inputError : ''}`}
                    value={data.fullName} onChange={(e) => update('fullName', e.target.value)}
                    placeholder={t.fullNamePlaceholder} autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.fullName ? `${fid('fullName')}-error` : undefined} />
                </Field>
              </div>

              <Field id={fid('pesel')} label={t.pesel} error={errors.pesel} required hint="11 cyfr">
                <input id={fid('pesel')} type="text" inputMode="numeric" pattern="\d{11}" maxLength={11}
                  className={`${styles.input} ${errors.pesel ? styles.inputError : ''}`}
                  value={data.pesel} onChange={(e) => update('pesel', e.target.value.replace(/\D/g, ''))}
                  placeholder={t.peselPlaceholder} autoComplete="off" aria-required="true"
                  aria-describedby={[errors.pesel ? `${fid('pesel')}-error` : '', `${fid('pesel')}-hint`].filter(Boolean).join(' ') || undefined} />
              </Field>

              <Field id={fid('age')} label={t.age} error={errors.age} required>
                <input id={fid('age')} type="number" min={18} max={120}
                  className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
                  value={data.age} onChange={(e) => update('age', e.target.value)}
                  placeholder={t.agePlaceholder} aria-required="true"
                  aria-describedby={errors.age ? `${fid('age')}-error` : undefined} />
              </Field>

              <Field id={fid('postalCode')} label={t.postalCode} error={errors.postalCode} required>
                <input id={fid('postalCode')} type="text" inputMode="numeric"
                  className={`${styles.input} ${errors.postalCode ? styles.inputError : ''}`}
                  value={data.postalCode}
                  onChange={(e) => {
                    let v = e.target.value.replace(/[^0-9-]/g, '');
                    if (v.length === 2 && !v.includes('-') && e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType !== 'deleteContentBackward') {
                      v = v + '-';
                    }
                    update('postalCode', v.slice(0, 6));
                  }}
                  placeholder={t.postalCodePlaceholder} autoComplete="postal-code" aria-required="true"
                  aria-describedby={errors.postalCode ? `${fid('postalCode')}-error` : undefined} />
              </Field>

              <Field id={fid('city')} label={t.city} error={errors.city} required>
                <input id={fid('city')} type="text"
                  className={`${styles.input} ${errors.city ? styles.inputError : ''}`}
                  value={data.city} onChange={(e) => update('city', e.target.value)}
                  placeholder={t.cityPlaceholder} autoComplete="address-level2" aria-required="true"
                  aria-describedby={errors.city ? `${fid('city')}-error` : undefined} />
              </Field>

              <div className={styles.fieldGridFull}>
                <Field id={fid('street')} label={t.street} error={errors.street} required>
                  <input id={fid('street')} type="text"
                    className={`${styles.input} ${errors.street ? styles.inputError : ''}`}
                    value={data.street} onChange={(e) => update('street', e.target.value)}
                    placeholder={t.streetPlaceholder} autoComplete="street-address" aria-required="true"
                    aria-describedby={errors.street ? `${fid('street')}-error` : undefined} />
                </Field>
              </div>

              <Field id={fid('county')} label={t.county} error={errors.county} required>
                <input id={fid('county')} type="text"
                  className={`${styles.input} ${errors.county ? styles.inputError : ''}`}
                  value={data.county} onChange={(e) => update('county', e.target.value)}
                  placeholder={t.countyPlaceholder} aria-required="true"
                  aria-describedby={errors.county ? `${fid('county')}-error` : undefined} />
              </Field>

              <Field id={fid('municipality')} label={t.municipality} error={errors.municipality} required>
                <input id={fid('municipality')} type="text"
                  className={`${styles.input} ${errors.municipality ? styles.inputError : ''}`}
                  value={data.municipality} onChange={(e) => update('municipality', e.target.value)}
                  placeholder={t.municipalityPlaceholder} aria-required="true"
                  aria-describedby={errors.municipality ? `${fid('municipality')}-error` : undefined} />
              </Field>

              <Field id={fid('phone')} label={t.phone} error={errors.phone} required>
                <input id={fid('phone')} type="tel"
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  value={data.phone} onChange={(e) => update('phone', e.target.value)}
                  placeholder={t.phonePlaceholder} autoComplete="tel" aria-required="true"
                  aria-describedby={errors.phone ? `${fid('phone')}-error` : undefined} />
              </Field>

              <Field id={fid('email')} label={t.email} error={errors.email} required>
                <input id={fid('email')} type="email"
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  value={data.email} onChange={(e) => update('email', e.target.value)}
                  placeholder={t.emailPlaceholder} autoComplete="email" inputMode="email" aria-required="true"
                  aria-describedby={errors.email ? `${fid('email')}-error` : undefined} />
              </Field>
            </div>
          )}

          {/* STEP 2 – Demographic */}
          {step === 2 && (
            <div className={styles.fieldStack}>
              <RadioGroup name={fid('gender')} legend={t.gender} value={data.gender}
                onChange={(v) => update('gender', v as FormData['gender'])}
                error={errors.gender} required inline
                options={[{ value: 'female', label: t.genderFemale }, { value: 'male', label: t.genderMale }]} />
              <RadioGroup name={fid('citizenship')} legend={t.citizenship} value={data.citizenship}
                onChange={(v) => update('citizenship', v as FormData['citizenship'])}
                error={errors.citizenship} required
                options={[
                  { value: 'polish', label: t.citizenshipPolish },
                  { value: 'eu', label: t.citizenshipEU },
                  { value: 'nonEU', label: t.citizenshipNonEU },
                  { value: 'stateless', label: t.citizenshipStateless },
                ]} />
            </div>
          )}

          {/* STEP 3 – Education */}
          {step === 3 && (
            <RadioGroup name={fid('education')} legend={t.educationLabel} value={data.education}
              onChange={(v) => update('education', v as FormData['education'])}
              error={errors.education} required
              options={[
                { value: 'secondary', label: t.educationSecondary },
                { value: 'postSecondary', label: t.educationPostSecondary },
                { value: 'higher', label: t.educationHigher },
              ]} />
          )}

          {/* STEP 4 – Employment */}
          {step === 4 && (
            <div className={styles.fieldStack}>
              <RadioGroup name={fid('employmentStatus')} legend={t.employmentStatusLabel}
                value={data.employmentStatus}
                onChange={(v) => update('employmentStatus', v as FormData['employmentStatus'])}
                error={errors.employmentStatus} required inline
                options={[
                  { value: 'employed', label: t.employmentEmployed },
                  { value: 'unemployed', label: t.employmentUnemployed },
                ]} />

              <Field id={fid('workplaceName')} label={t.workplaceName} error={errors.workplaceName} required>
                <input id={fid('workplaceName')} type="text"
                  className={`${styles.input} ${errors.workplaceName ? styles.inputError : ''}`}
                  value={data.workplaceName} onChange={(e) => update('workplaceName', e.target.value)}
                  placeholder={t.workplaceNamePlaceholder} aria-required="true"
                  aria-describedby={errors.workplaceName ? `${fid('workplaceName')}-error` : undefined} />
              </Field>

              <Field id={fid('jobCategory')} label={t.jobCategoryLabel} error={errors.jobCategory} required>
                <select id={fid('jobCategory')}
                  className={`${styles.select} ${errors.jobCategory ? styles.inputError : ''}`}
                  value={data.jobCategory} onChange={(e) => update('jobCategory', e.target.value)}
                  aria-required="true"
                  aria-describedby={errors.jobCategory ? `${fid('jobCategory')}-error` : undefined}>
                  <option value="">—</option>
                  {jobCategoryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                {errors.jobCategory && (
                  <p className={styles.errorMessage} id={`${fid('jobCategory')}-error`} role="alert" aria-live="polite">
                    {errors.jobCategory}
                  </p>
                )}
              </Field>
            </div>
          )}

          {/* STEP 5 – Participant status */}
          {step === 5 && (
            <div className={styles.fieldStack}>
              {(
                [
                  { field: 'foreignOrigin', label: t.foreignOrigin, options: ['yes', 'no'] },
                  { field: 'thirdCountryNational', label: t.thirdCountryNational, options: ['yes', 'no'] },
                  { field: 'ethnicMinority', label: t.ethnicMinority, options: ['yes', 'no', 'noInfo'] },
                  { field: 'homeless', label: t.homeless, options: ['yes', 'no'] },
                  { field: 'disabled', label: t.disabled, options: ['yes', 'no'] },
                ] as const
              ).map(({ field, label, options }) => (
                <RadioGroup key={field} name={fid(field)} legend={label} value={data[field]}
                  onChange={(v) => update(field, v as never)}
                  error={errors[field]} required inline
                  options={options.map((v) => ({
                    value: v,
                    label: v === 'yes' ? t.yesOption : v === 'no' ? t.noOption : t.noInfoOption,
                  }))} />
              ))}
            </div>
          )}

          {/* STEP 6 – Pain */}
          {step === 6 && (
            <RadioGroup name={fid('painAffectsWork')} legend={t.painAffectsWork}
              value={data.painAffectsWork}
              onChange={(v) => update('painAffectsWork', v as FormData['painAffectsWork'])}
              error={errors.painAffectsWork} required inline
              options={[{ value: 'yes', label: t.yesOption }, { value: 'no', label: t.noOption }]} />
          )}

          {/* STEP 7 – Declarations */}
          {step === 7 && (
            <div className={styles.fieldStack}>
              <fieldset className={styles.checkboxList}>
                <legend className={styles.label}>
                  {locale === 'pl' ? 'Oświadczam, że:' : locale === 'ua' ? 'Заявляю, що:' : 'I hereby declare that:'}
                  <span className={styles.requiredMark} aria-hidden="true"> *</span>
                </legend>

                {(
                  [
                    { field: 'declarationCriteria', label: t.declarationCriteria },
                    { field: 'declarationWillingness', label: t.declarationWillingness },
                    { field: 'declarationHealthData', label: t.declarationHealthData },
                    { field: 'declarationContraindications', label: t.declarationContraindications },
                    { field: 'declarationTruth', label: t.declarationTruth },
                  ] as const
                ).map(({ field, label }) => (
                  <label key={field}
                    className={`${styles.checkboxOption} ${errors[field] ? styles.checkboxOptionError : ''}`}>
                    <input type="checkbox" checked={data[field]}
                      onChange={(e) => update(field, e.target.checked as never)}
                      aria-required="true"
                      aria-describedby={errors[field] ? `${field}-error` : undefined} />
                    <span>{label}</span>
                  </label>
                ))}

                {(errors.declarationCriteria || errors.declarationWillingness ||
                  errors.declarationHealthData || errors.declarationContraindications ||
                  errors.declarationTruth) && (
                  <p className={styles.errorMessage} role="alert" aria-live="polite">
                    {t.allDeclarationsRequired}
                  </p>
                )}
              </fieldset>

              <hr className={styles.sectionDivider} />

              <div className={styles.fieldGrid}>
                <Field id={fid('signatureDate')} label={t.dateLabel} error={errors.signatureDate} required>
                  <input id={fid('signatureDate')} type="date"
                    className={`${styles.input} ${errors.signatureDate ? styles.inputError : ''}`}
                    value={data.signatureDate} onChange={(e) => update('signatureDate', e.target.value)}
                    aria-required="true"
                    aria-describedby={errors.signatureDate ? `${fid('signatureDate')}-error` : undefined} />
                </Field>

                <Field id={fid('signature')} label={t.signatureLabel} error={errors.signature} required>
                  <input id={fid('signature')} type="text"
                    className={`${styles.input} ${errors.signature ? styles.inputError : ''}`}
                    value={data.signature} onChange={(e) => update('signature', e.target.value)}
                    placeholder={t.signaturePlaceholder} autoComplete="name" aria-required="true"
                    aria-describedby={errors.signature ? `${fid('signature')}-error` : undefined} />
                </Field>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className={styles.navButtons}>
          {step > 1 ? (
            <button type="button" className={styles.btnSecondary} onClick={handleBack}
              aria-label={`${t.previous}: ${stepTitles[(step - 1) as FormStep]}`}>
              ← {t.previous}
            </button>
          ) : <span />}

          {step < TOTAL_STEPS ? (
            <button type="button" className={styles.btnPrimary} onClick={handleNext}
              aria-label={`${t.next}: ${stepTitles[(step + 1) as FormStep]}`}>
              {t.next} →
            </button>
          ) : (
            <button type="submit" className={styles.btnPrimary}
              disabled={submitting} aria-busy={submitting}>
              {submitting ? '…' : t.submitButton}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
