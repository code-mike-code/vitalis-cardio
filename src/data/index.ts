import type { NavLink, Feature, Service, TeamMember, ContactInfo, Stat, Specialist, Specialization, PricingCategory } from '@/types'
import imgAleksanderZurakowski from '@/assets/img/team/aleksander-zurakowski.webp'
import imgBeataJakubiec from '@/assets/img/team/beata-jakubiec.webp'
import imgEwelinaKubanska from '@/assets/img/team/ewelina-kubanska.webp'
import imgGrzegorzDankow from '@/assets/img/team/grzegorz-dankow.webp'
import imgIzabelaWilgaMalota from '@/assets/img/team/izabela-wilga-malota.webp'
import imgJaroslawBigaj from '@/assets/img/team/jaroslaw-bigaj.webp'
import imgJacekNowak from '@/assets/img/team/jacek-nowak.webp'
import imgKamilaJachna from '@/assets/img/team/kamila-jachna.webp'
import imgKrystynaFic from '@/assets/img/team/krystyna-fic.webp'
import imgKrzysztofNiemiec from '@/assets/img/team/krzysztof-niemiec.webp'
import imgRafalKasperczyk from '@/assets/img/team/rafal-kasperczyk.webp'
import imgSebastianWajda from '@/assets/img/team/sebastian-wajda.webp'
import imgWojciechJurek from '@/assets/img/team/wojciech-jurek.webp'
import imgAvatarMan from '@/assets/img/team/avatar-man-red.webp'
import imgAvatarWoman from '@/assets/img/team/avatar-woman-red.webp'

export const navLinks: NavLink[] = [
  { label: 'Strona główna', href: '#home' },
  { label: 'O klinice', href: '#about' },
  { label: 'Specjalizacje', href: '#services' },
  { label: 'Zespół', href: '#team' },
  { label: 'Kontakt', href: '#contact' },
]

export const features: Feature[] = [
  {
    id: 1,
    icon: 'heart',
    title: 'Kompleksowa opieka',
    description: 'Zapewniamy pełen zakres opieki medycznej — od diagnostyki, przez leczenie specjalistyczne, po rehabilitację. Wszystko w jednym miejscu.',
  },
  {
    id: 2,
    icon: 'team',
    title: 'Zespół specjalistów',
    description: 'Nasz zespół tworzą lekarze specjaliści z wieloletnim doświadczeniem klinicznym i naukowym, stale podnoszący swoje kwalifikacje.',
  },
  {
    id: 3,
    icon: 'equipment',
    title: 'Nowoczesna rehabilitacja',
    description: 'Oferujemy zaawansowane programy rehabilitacyjne z wykorzystaniem najnowszego sprzętu i sprawdzonych metod terapeutycznych.',
  },
]

export const stats: Stat[] = [
  { value: '15+', label: 'Lat doświadczenia' },
  { value: '12 000+', label: 'Zadowolonych pacjentów' },
  { value: '20+', label: 'Specjalistów' },
  { value: '8', label: 'Poradni specjalistycznych' },
]

export const services: Service[] = [
  {
    id: 1,
    title: 'Kardiologia',
    description: 'Diagnostyka i leczenie chorób układu krążenia. EKG, echo serca, holter, próby wysiłkowe.',
    icon: 'cardiology',
  },
  {
    id: 2,
    title: 'Ortopedia',
    description: 'Leczenie schorzeń narządu ruchu. Konsultacje specjalistyczne, diagnostyka USG, terapia.',
    icon: 'orthopedics',
  },
  {
    id: 3,
    title: 'Neurologia',
    description: 'Diagnostyka i leczenie chorób układu nerwowego. EEG, EMG, konsultacje specjalistyczne.',
    icon: 'neurology',
  },
  {
    id: 4,
    title: 'Rehabilitacja',
    description: 'Kompleksowe programy rehabilitacyjne. Fizjoterapia, kinezyterapia, fizykoterapia.',
    icon: 'rehabilitation',
  },
  {
    id: 5,
    title: 'Internista',
    description: 'Opieka internistyczna dla dorosłych. Badania profilaktyczne, diagnostyka, leczenie.',
    icon: 'internal',
  },
  {
    id: 6,
    title: 'Fizjoterapia',
    description: 'Indywidualne programy ćwiczeń, terapia manualna, masaże lecznicze, kinesiotaping.',
    icon: 'physiotherapy',
  },
]

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Prof. nadzw. dr hab. n. med. Aleksander Żurakowski',
    role: 'Dyrektor medyczny, współzałożyciel',
    specialization: 'Kardiolog',
    photo: imgAleksanderZurakowski,
    bio: 'Profesor nadzwyczajny i specjalista chorób wewnętrznych z tytułem doktora habilitowanego nauk medycznych. Współzałożyciel Poradni Vitalis w 2014 roku. Posiada wieloletnie doświadczenie w kardiologii klinicznej i diagnostycznej.',
  },
  {
    id: 2,
    name: 'Dr n. med. Jacek Nowak',
    role: 'Specjalista chorób wewnętrznych, współzałożyciel',
    specialization: 'Kardiolog',
    photo: imgJacekNowak,
    bio: 'Doktor nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Współzałożyciel Poradni Vitalis. Specjalizuje się w diagnostyce i leczeniu arytmii oraz niewydolności serca.',
  },
  {
    id: 3,
    name: 'Dr n. med. Ewelina Kubańska',
    role: 'Specjalista neurologii',
    specialization: 'Neurolog',
    photo: imgEwelinaKubanska,
    bio: 'Doktor nauk medycznych w dziedzinie neurologii. Prowadzi badania EEG i EMG.',
  },
  {
    id: 4,
    name: 'Dr n. med. Krzysztof Niemiec',
    role: 'Specjalista ortopedii i traumatologii',
    specialization: 'Ortopeda',
    photo: imgKrzysztofNiemiec,
    bio: 'Specjalista ortopedii i traumatologii narządu ruchu. Ekspert w leczeniu urazów sportowych, artroskopii stawów oraz schorzeń kręgosłupa. Wykonuje iniekcje dostawowe pod kontrolą USG.',
  },
  {
    id: 5,
    name: 'Mgr Kamila Jachna',
    role: 'Dział rehabilitacji',
    specialization: 'Fizjoterapeutka',
    photo: imgKamilaJachna,
    bio: 'Certyfikowana fizjoterapeutka z tytułem magistra. Specjalizuje się w terapii manualnej, kinesiotapingu oraz rehabilitacji pourazowej. Prowadzi indywidualne programy kinezyterapii.',
  },
]

export const contactInfo: ContactInfo = {
  address: 'ul. Kopernika 25, 32-540 Trzebinia',
  phone: '+48 32 210 98 66',
  email: 'jnvitalis@wp.pl',
  hours: 'Pon-Pt: 10:00-18:00',
}

export const specializations: Specialization[] = [
  {
    id: 1,
    slug: 'kardiologia',
    name: 'Kardiologia',
    menuLabel: 'Kardiolog',
    description: 'Zespół Poradni Specjalistycznych „Vitalis" został stworzony przez lekarzy kardiologów z myślą umożliwienia pacjentom dostępu do nowoczesnej i kompleksowej ambulatoryjnej opieki kardiologicznej. W związku z tym w chwili obecnej zatrudnionych jest pięciu specjalistów. Każdy kardiolog dzięki wyposażeniu placówki w nowoczesny sprzęt diagnostyczny ma możliwość leczenia prawie wszystkich rodzajów schorzeń układu sercowo-naczyniowego. Bliska współpraca z największą w Polsce siecią Klinik Kardiologicznych (Polsko-Amerykańskie Kliniki Serca) oraz Szpitalem Powiatowym w Chrzanowie umożliwia każdemu kardiologowi szybką kwalifikację do inwazyjnych zabiegów takich jak: koronarografia, angiografia, przezskórna angioplastyka wieńcowa (tzw. balonikowanie), implantacja rozruszników, defibrylatorów, by-passy, zabiegi naprawcze zastawek serca, ablacje, zabiegowe leczenia migotania przedsionków, nadciśnienia tętniczego. Każdy nasz kardiolog jest także w stanie przeprowadzić rehabilitację kardiologiczną.',
    examinations: [
      'Konsultacja z EKG spoczynkowym',
      'EKG + Opis (bez konsultacji specjalisty)',
      'Wykonanie Tilt testu',
      'Test wysiłkowy na bieżni ruchomej',
      'Holter EKG',
      'Echokardiografia przezklatkowa TTE',
      'Echokardiografia przezprzełykowa TEE, próba dobutaminowa',
      'Kontrola stymulatora/ICD',
    ],
    translations: {
      en: {
        name: 'Cardiology',
        menuLabel: 'Cardiologist',
        description: 'The team of the "Vitalis" Specialist Outpatient Clinics was created by cardiologists with the goal of providing patients with access to modern and comprehensive outpatient cardiological care. Currently five specialists are employed. Each cardiologist, thanks to the clinic\'s modern diagnostic equipment, is able to treat almost all types of cardiovascular diseases. Close cooperation with the largest network of cardiac clinics in Poland (Polish-American Heart Clinics) and the County Hospital in Chrzanów enables rapid qualification for invasive procedures such as: coronary angiography, balloon angioplasty, implantation of pacemakers, defibrillators, bypasses, heart valve repair, ablations, surgical treatment of atrial fibrillation and hypertension. Each of our cardiologists is also able to conduct cardiac rehabilitation.',
        examinations: [
          'Consultation with resting ECG',
          'ECG + Description (without specialist consultation)',
          'Tilt test',
          'Treadmill stress test',
          'Holter ECG',
          'Transthoracic echocardiography TTE',
          'Transesophageal echocardiography TEE, dobutamine stress test',
          'Pacemaker / ICD control',
        ],
      },
      ua: {
        name: 'Кардіологія',
        menuLabel: 'Кардіолог',
        description: 'Команда спеціалізованих амбулаторних клінік «Vitalis» була створена кардіологами з метою надання пацієнтам доступу до сучасної та комплексної амбулаторної кардіологічної допомоги. Наразі в закладі працює п\'ять спеціалістів. Кожен кардіолог завдяки сучасному діагностичному обладнанню клініки може лікувати майже всі типи серцево-судинних захворювань. Тісна співпраця з найбільшою мережею кардіологічних клінік у Польщі (Польсько-Американські Кардіологічні Клініки) та Районною лікарнею в Хшанові дозволяє швидко кваліфікувати пацієнтів для інвазивних процедур, таких як: коронарографія, балонна ангіопластика, імплантація кардіостимуляторів, дефібриляторів, шунтів, відновлення клапанів серця, абляція, хірургічне лікування фібриляції передсердь та артеріальної гіпертензії. Кожен з наших кардіологів також може проводити кардіологічну реабілітацію.',
        examinations: [
          'Консультація з ЕКГ у спокої',
          'ЕКГ + опис (без консультації спеціаліста)',
          'Тілт-тест',
          'Стрес-тест на біговій доріжці',
          'Холтер ЕКГ',
          'Трансторакальна ехокардіографія ТТЕ',
          'Трансезофагеальна ехокардіографія ТЕЕ, добутаміновий тест',
          'Контроль кардіостимулятора / ICD',
        ],
      },
    },
  },
  {
    id: 2,
    slug: 'kardiologia-dziecieca',
    name: 'Kardiologia dziecięca',
    menuLabel: 'Kardiolog dziecięcy',
    description: 'Kardiolog dziecięcy to specjalista zajmujący się leczeniem chorób układu sercowo-naczyniowego u pacjentów do 18. roku życia. Do najczęstszych chorób kardiologicznych wieku dziecięcego należą: arytmie, ubytek przegrody międzykomorowej lub międzyprzedsionkowej, przerost prawej komory, niewydolność serca, wady zastawki tętnicy płucnej i aorty.',
    examinations: [
      'EKG',
      'UKG',
      'Holter EKG i RR',
    ],
    translations: {
      en: {
        name: 'Paediatric Cardiology',
        menuLabel: 'Paediatric Cardiologist',
        description: 'A paediatric cardiologist is a specialist in treating cardiovascular diseases in patients up to 18 years of age. The most common cardiac diseases in childhood include: arrhythmias, ventricular or atrial septal defects, right ventricular hypertrophy, heart failure, pulmonary valve and aortic valve defects.',
        examinations: ['ECG', 'Echocardiography (UKG)', 'Holter ECG and BP'],
      },
      ua: {
        name: 'Дитяча кардіологія',
        menuLabel: 'Дитячий кардіолог',
        description: 'Дитячий кардіолог — спеціаліст із лікування захворювань серцево-судинної системи у пацієнтів до 18 років. До найпоширеніших серцевих захворювань дитячого віку належать: аритмії, дефекти міжшлуночкової або міжпередсердної перегородки, гіпертрофія правого шлуночка, серцева недостатність, вади клапана легеневої артерії та аорти.',
        examinations: ['ЕКГ', 'Ехокардіографія (УКГ)', 'Холтер ЕКГ та АТ'],
      },
    },
  },
  {
    id: 3,
    slug: 'ginekologia',
    name: 'Ginekologia i Położnictwo',
    menuLabel: 'Ginekolog - Położnictwo',
    description: 'W pełni wyposażony gabinet (USG, 3D, głowica przezpochwowa, KTG) gwarantuje troskliwą i profesjonalną opiekę. Naszą specjalnością jest diagnostyka i leczenie niepłodności oraz prowadzenie ciąży. Innowacyjna metoda naprotechnologii pozwala w 40% przypadków na skuteczne leczenie bez stosowania metod in-vitro.',
    examinationsLabel: 'Świadczone usługi',
    examinations: [
      'Konsultacja ginekologiczna',
      'Prowadzenie ciąży z USG położniczym',
      'Zapisy KTG w ciąży',
      'USG przezpochwowe',
      'USG piersi',
      'USG ginekologiczne',
      'USG trójwymiarowe',
    ],
    translations: {
      en: {
        name: 'Gynaecology and Obstetrics',
        menuLabel: 'Gynaecologist – Obstetrics',
        description: 'A fully equipped consulting room (ultrasound, 3D, transvaginal probe, CTG) guarantees attentive and professional care. Our speciality is the diagnosis and treatment of infertility and pregnancy monitoring. The innovative naprotechnology method enables effective treatment in 40% of cases without IVF.',
        examinationsLabel: 'Services provided',
        examinations: [
          'Gynaecological consultation',
          'Pregnancy monitoring with obstetric ultrasound',
          'CTG recordings during pregnancy',
          'Transvaginal ultrasound',
          'Breast ultrasound',
          'Gynaecological ultrasound',
          'Three-dimensional ultrasound',
        ],
      },
      ua: {
        name: 'Гінекологія та акушерство',
        menuLabel: 'Гінеколог – акушерство',
        description: 'Повністю обладнаний кабінет (УЗД, 3D, трансвагінальний датчик, КТГ) гарантує уважну та професійну допомогу. Наша спеціалізація — діагностика та лікування безпліддя і ведення вагітності. Інноваційний метод напротехнології дозволяє в 40% випадків ефективно лікувати без застосування ЕКЗ.',
        examinationsLabel: 'Послуги, що надаються',
        examinations: [
          'Гінекологічна консультація',
          'Ведення вагітності з акушерським УЗД',
          'Запис КТГ під час вагітності',
          'Трансвагінальне УЗД',
          'УЗД грудей',
          'Гінекологічне УЗД',
          'Тривимірне УЗД',
        ],
      },
    },
  },
  {
    id: 4,
    slug: 'gastrologia',
    name: 'Gastrologia',
    menuLabel: 'Gastrolog',
    description: 'Oferujemy Państwu pełną diagnostykę i leczenie chorób układu pokarmowego.',
    examinations: [
      'Kolonoskopia, znieczulenie ogólne',
      'Gastroskopia',
      'Endoskopowe usunięcie polipów',
      'USG',
    ],
    translations: {
      en: {
        name: 'Gastrology',
        menuLabel: 'Gastrologist',
        description: 'We offer comprehensive diagnostics and treatment of gastrointestinal diseases.',
        examinations: ['Colonoscopy, general anaesthesia', 'Gastroscopy', 'Endoscopic polyp removal', 'Ultrasound (USG)'],
      },
      ua: {
        name: 'Гастроентерологія',
        menuLabel: 'Гастроентеролог',
        description: 'Ми пропонуємо повну діагностику та лікування захворювань шлунково-кишкового тракту.',
        examinations: ['Колоноскопія, загальна анестезія', 'Гастроскопія', 'Ендоскопічне видалення поліпів', 'УЗД'],
      },
    },
  },
  {
    id: 5,
    slug: 'endokrynologia',
    name: 'Endokrynologia',
    menuLabel: 'Endokrynolog',
    description: 'Oferujemy kompetentne i kompleksowe leczenie pacjentów z zaburzeniami funkcji tarczycy, przytarczyc, nadnerczy, przysadki mózgowej i innych zaburzeń funkcji gruczołów wydzielania wewnętrznego. Szybka diagnostyka i trafna diagnoza to klucz do zadowolenia pacjenta. W wielu przypadkach niezbędnym elementem diagnostyki jest badanie histopatologiczne, odgrywające szczególną rolę w leczeniu chorób tarczycy. W naszej Poradni oferujemy wykonanie diagnostycznej biopsji cienkoigłowej wraz z precyzyjną oceną mikroskopową. Badanie to jest wykonywane przez dr Jacka Pająka – wieloletniego pracownika naukowego Śląskiego Uniwersytetu Medycznego.',
    conditionsLabel: 'Diagnozujemy i leczymy',
    conditions: [
      'Schorzenia tarczycy: guzy, nadczynność, niedoczynność, choroba Hashimoto, wole',
      'Schorzenia nadnerczy: guzy, nadczynność, niedoczynność',
      'Schorzenia przysadki: guzy, nadczynność, niedoczynność',
      'Schorzenia przytarczyc',
      'Schorzenia gonad: zaburzenia miesiączkowania, andropauza, niepłodność męska',
      'Osteoporoza',
      'Zespoły androgenne: nadmierne owłosienie, trądzik, łysienie',
      'Ginekomastia, hiperprolaktynemia',
    ],
    examinationsLabel: 'Diagnozujemy wykonując',
    examinations: [
      'USG tarczycy',
      'USG jamy brzusznej oraz nadnerczy',
      'USG przytarczyc',
      'EKG',
      'Biopsja tarczycy',
    ],
    translations: {
      en: {
        name: 'Endocrinology',
        menuLabel: 'Endocrinologist',
        description: 'We offer competent and comprehensive treatment for patients with disorders of the thyroid, parathyroid glands, adrenal glands, pituitary gland and other endocrine glands. Rapid and accurate diagnosis is the key to patient satisfaction. In many cases histopathological examination is an indispensable part of diagnostics, especially in thyroid disease. Our clinic offers diagnostic fine-needle biopsy with precise microscopic evaluation, performed by Dr Jacek Pająk – a long-term academic at the Silesian Medical University.',
        conditionsLabel: 'We diagnose and treat',
        conditions: [
          'Thyroid disorders: nodules, hyperthyroidism, hypothyroidism, Hashimoto\'s disease, goitre',
          'Adrenal disorders: tumours, hyperfunction, hypofunction',
          'Pituitary disorders: tumours, hyperfunction, hypofunction',
          'Parathyroid disorders',
          'Gonadal disorders: menstrual disorders, andropause, male infertility',
          'Osteoporosis',
          'Androgenic syndromes: hirsutism, acne, hair loss',
          'Gynaecomastia, hyperprolactinaemia',
        ],
        examinationsLabel: 'We diagnose using',
        examinations: ['Thyroid ultrasound', 'Abdominal and adrenal ultrasound', 'Parathyroid ultrasound', 'ECG', 'Thyroid biopsy'],
      },
      ua: {
        name: 'Ендокринологія',
        menuLabel: 'Ендокринолог',
        description: 'Ми пропонуємо компетентне та комплексне лікування пацієнтів із порушеннями функції щитоподібної залози, прищитоподібних залоз, наднирників, гіпофіза та інших ендокринних залоз. Швидка та точна діагностика — запорука задоволеності пацієнта. У багатьох випадках гістопатологічне дослідження є невід\'ємною частиною діагностики, особливо при захворюваннях щитоподібної залози. Наша клініка пропонує діагностичну тонкоголкову біопсію з точною мікроскопічною оцінкою, яку виконує д-р Яцек Паяк — багаторічний науковий співробітник Сілезького медичного університету.',
        conditionsLabel: 'Ми діагностуємо та лікуємо',
        conditions: [
          'Захворювання щитоподібної залози: вузли, гіперфункція, гіпофункція, хвороба Хашимото, зоб',
          'Захворювання наднирників: пухлини, гіперфункція, гіпофункція',
          'Захворювання гіпофіза: пухлини, гіперфункція, гіпофункція',
          'Захворювання прищитоподібних залоз',
          'Захворювання гонад: порушення менструального циклу, андропауза, чоловіче безпліддя',
          'Остеопороз',
          'Андрогенні синдроми: гірсутизм, акне, випадіння волосся',
          'Гінекомастія, гіперпролактинемія',
        ],
        examinationsLabel: 'Ми діагностуємо за допомогою',
        examinations: ['УЗД щитоподібної залози', 'УЗД черевної порожнини та наднирників', 'УЗД прищитоподібних залоз', 'ЕКГ', 'Біопсія щитоподібної залози'],
      },
    },
  },
  {
    id: 6,
    slug: 'ortopedia',
    name: 'Ortopedia',
    menuLabel: 'Ortopeda',
    description: 'Wizyta u Ortopedy składa się ze szczegółowego wywiadu chorobowego oraz z badania fizykalnego. Często konieczne bywa poszerzenie diagnostyki, przede wszystkim o badania obrazowe. Lekarz Ortopeda w trakcie wizyty wykonuje USG stawów i tkanek miękkich. Niejednokrotnie konieczne jest wykonanie Rezonansu Magnetycznego lub Tomografii Komputerowej.',
    examinations: [
      'Konsultacja specjalistyczna',
      'Viscosuplementacja',
    ],
    translations: {
      en: {
        name: 'Orthopaedics',
        menuLabel: 'Orthopaedist',
        description: 'A visit to the Orthopaedist consists of a detailed medical history and physical examination. Diagnostic imaging is often required. The orthopaedic doctor performs ultrasound of joints and soft tissues during the visit. In many cases MRI or CT is necessary.',
        examinations: ['Specialist consultation', 'Viscosupplementation'],
      },
      ua: {
        name: 'Ортопедія',
        menuLabel: 'Ортопед',
        description: 'Візит до ортопеда складається з детального анамнезу та фізичного огляду. Часто виникає необхідність розширення діагностики, насамперед за допомогою методів візуалізації. Лікар-ортопед під час візиту виконує УЗД суглобів та м\'яких тканин. У багатьох випадках необхідно виконати МРТ або КТ.',
        examinations: ['Консультація спеціаліста', 'Віскосупліментація'],
      },
    },
  },
  {
    id: 7,
    slug: 'neurochirurgia',
    name: 'Neurochirurgia',
    menuLabel: 'Neurochirurg',
    description: 'Neurochirurgia zajmuje się diagnostyką oraz leczeniem zaburzeń w obrębie ośrodkowego i obwodowego układu nerwowego. Najczęściej chorzy kierowani są do neurochirurga z powodu nieskutecznie leczonego bólu kręgosłupa.',
    conditionsLabel: 'W naszej poradni leczymy',
    conditions: [
      'Choroba zwyrodnieniowa kręgosłupa',
      'Dyskopatia szyjnego, piersiowego oraz lędźwiowego odcinka kręgosłupa',
      'Stenoza',
      'Choroby przeciążeniowe kręgosłupa',
      'Złamania kompresyjne kręgosłupa',
      'Rwa kulszowa',
      'Rwa udowa',
      'Wodogłowie',
      'Zespoły bólowe kręgosłupa',
      'Kręgozmyk',
      'Choroby naczyniowe OUN',
      'Nowotwory OUN (mózgu, kręgosłupa, rdzenia kręgowego)',
      'Zespół Chiariego oraz syringomielia',
      'Choroba Parkinsona',
      'Schorzenia układu pozapiramidowego',
      'Choroby nerwów obwodowych',
    ],
    translations: {
      en: {
        name: 'Neurosurgery',
        menuLabel: 'Neurosurgeon',
        description: 'Neurosurgery deals with the diagnosis and treatment of disorders of the central and peripheral nervous system. Patients are most commonly referred to a neurosurgeon due to ineffectively treated back pain.',
        conditionsLabel: 'In our clinic we treat',
        conditions: [
          'Degenerative spine disease',
          'Disc disease of the cervical, thoracic and lumbar spine',
          'Stenosis',
          'Overload spine diseases',
          'Compression fractures of the spine',
          'Sciatica',
          'Femoral neuralgia',
          'Hydrocephalus',
          'Spinal pain syndromes',
          'Spondylolisthesis',
          'Vascular diseases of the CNS',
          'CNS tumours (brain, spine, spinal cord)',
          'Chiari malformation and syringomyelia',
          'Parkinson\'s disease',
          'Extrapyramidal system disorders',
          'Peripheral nerve diseases',
        ],
      },
      ua: {
        name: 'Нейрохірургія',
        menuLabel: 'Нейрохірург',
        description: 'Нейрохірургія займається діагностикою та лікуванням порушень центральної та периферичної нервової системи. Найчастіше хворих направляють до нейрохірурга через неефективно лікований біль у спині.',
        conditionsLabel: 'У нашій клініці ми лікуємо',
        conditions: [
          'Дегенеративне захворювання хребта',
          'Дископатія шийного, грудного та поперекового відділів хребта',
          'Стеноз',
          'Перевантажувальні захворювання хребта',
          'Компресійні переломи хребта',
          'Ішіас (сідничний біль)',
          'Стегнова невралгія',
          'Гідроцефалія',
          'Больові синдроми хребта',
          'Спондилолістез',
          'Судинні захворювання ЦНС',
          'Пухлини ЦНС (мозку, хребта, спинного мозку)',
          'Мальформація Кіарі та сирингомієлія',
          'Хвороба Паркінсона',
          'Розлади екстрапірамідної системи',
          'Захворювання периферичних нервів',
        ],
      },
    },
  },
  {
    id: 8,
    slug: 'neurologia',
    name: 'Neurologia',
    menuLabel: 'Neurolog',
    description: 'Rozpoznanie schorzeń neurologicznych opieramy na bardzo dokładnie przeprowadzonym wywiadzie, analizie objawów klinicznych oraz badaniach diagnostycznych (EEG, rezonans magnetyczny). Szybka diagnostyka omdleń może zapobiegać kolejnym nieprzyjemnym epizodom. Dostępne na miejscu badanie EEG oraz możliwość wykonania w atrakcyjnej cenie badania rezonansu magnetycznego (MRI) w połączeniu z doświadczeniem lekarzy pozwala na pełną diagnostykę i leczenie większości schorzeń neurologicznych. Wszystkie badania EEG oceniane są przez certyfikowanego neurologa.',
    examinations: [
      'USG',
      'EEG',
    ],
    translations: {
      en: {
        name: 'Neurology',
        menuLabel: 'Neurologist',
        description: 'The diagnosis of neurological disorders is based on a thorough medical history, clinical symptom analysis and diagnostic tests (EEG, MRI). Rapid diagnosis of syncope can prevent further episodes. On-site EEG combined with affordable MRI and experienced doctors allows full diagnosis and treatment of most neurological disorders. All EEG examinations are evaluated by a certified neurologist.',
        examinations: ['Ultrasound (USG)', 'EEG'],
      },
      ua: {
        name: 'Неврологія',
        menuLabel: 'Невролог',
        description: 'Діагностика неврологічних розладів ґрунтується на ретельно зібраному анамнезі, аналізі клінічних симптомів та діагностичних дослідженнях (ЕЕГ, МРТ). Швидка діагностика синкопальних станів може запобігти подальшим епізодам. ЕЕГ на місці та доступне МРТ у поєднанні з досвідом лікарів дозволяють проводити повну діагностику та лікування більшості неврологічних розладів. Всі ЕЕГ оцінюються сертифікованим неврологом.',
        examinations: ['УЗД', 'ЕЕГ'],
      },
    },
  },
  {
    id: 9,
    slug: 'psychiatria',
    name: 'Psychiatria',
    menuLabel: 'Psychiatra',
    description: 'Zapewniamy nowoczesne podejście do problemu. Jedna z podstawowych specjalizacji medycznych zajmująca się badaniem, zapobieganiem i leczeniem zaburzeń i chorób psychicznych. Bada ich uwarunkowania biologiczne, psychologiczne, rodzinno-genetyczne, społeczne, konstytucjonalne – sposoby powstawania i skutecznego zapobiegania. Specjalista psychiatrii często jest nieodzowny w nerwicach reaktywnych podczas zwiększającego się codziennego tempa życia – narastający problem XXI wieku.',
    examinations: [
      'Psychiatryczne porady lekarskie',
      'Farmakoterapia',
      'Leczenie zaburzeń emocjonalnych spowodowanych stresem',
      'Leczenie zaburzeń psychotycznych',
      'Leczenie zaburzeń depresyjnych',
      'Leczenie zaburzeń lękowych',
      'Leczenie zaburzeń psychosomatycznych',
      'Leczenie zaburzeń nerwicowych',
      'Leczenie zaburzeń snu',
    ],
    translations: {
      en: {
        name: 'Psychiatry',
        menuLabel: 'Psychiatrist',
        description: 'We offer a modern approach to mental health. Psychiatry studies the biological, psychological, family-genetic, social and constitutional determinants of mental disorders and ways to prevent them. A psychiatry specialist is often indispensable for reactive neuroses in our increasingly fast-paced world – a growing problem of the 21st century.',
        examinations: [
          'Psychiatric medical consultations',
          'Pharmacotherapy',
          'Treatment of emotional disorders caused by stress',
          'Treatment of psychotic disorders',
          'Treatment of depressive disorders',
          'Treatment of anxiety disorders',
          'Treatment of psychosomatic disorders',
          'Treatment of neurotic disorders',
          'Treatment of sleep disorders',
        ],
      },
      ua: {
        name: 'Психіатрія',
        menuLabel: 'Психіатр',
        description: 'Ми забезпечуємо сучасний підхід до психічного здоров\'я. Психіатрія вивчає біологічні, психологічні, сімейно-генетичні, соціальні та конституційні детермінанти психічних розладів та способи їх профілактики. Спеціаліст із психіатрії часто є незамінним при реактивних неврозах в умовах прискорення темпу повсякденного життя — зростаюча проблема XXI століття.',
        examinations: [
          'Психіатричні медичні консультації',
          'Фармакотерапія',
          'Лікування емоційних розладів, спричинених стресом',
          'Лікування психотичних розладів',
          'Лікування депресивних розладів',
          'Лікування тривожних розладів',
          'Лікування психосоматичних розладів',
          'Лікування невротичних розладів',
          'Лікування розладів сну',
        ],
      },
    },
  },
  {
    id: 10,
    slug: 'psychologia',
    name: 'Psychologia',
    menuLabel: 'Psycholog',
    description: 'Psychoterapia indywidualna dorosłych i młodzieży to specjalistyczna forma pomocy psychologicznej, która opiera się na bezpośrednim kontakcie psychoterapeuty z klientem. Psychoterapia skierowana jest zwłaszcza do osób, które doświadczają przewlekłego psychicznego dyskomfortu, mają duże problemy z samodzielnym radzeniem sobie z przeżywanym cierpieniem lub zaburzeniami psychicznymi.',
    conditionsLabel: 'Psychoterapia indywidualna dotyczy m.in.',
    conditions: [
      'Zaburzenia lękowe (nerwice)',
      'Zaburzenia nastrojów (depresje)',
      'Kryzys, trauma, utrata bliskiej osoby',
      'Poczucie krzywdy, nieumiejętność przebaczenia związana z przeszłością',
      'Syndrom dorosłych dzieci alkoholików (DDA)',
      'Trudności w relacjach, codziennym funkcjonowaniu',
      'Zaburzenia osobowości',
    ],
    examinations: [
      'Konsultacja specjalistyczna',
      'Inna usługa',
    ],
    translations: {
      en: {
        name: 'Psychology',
        menuLabel: 'Psychologist',
        description: 'Individual psychotherapy for adults and young people is a specialised form of psychological help based on direct contact between the psychotherapist and the client. Psychotherapy is aimed especially at people who experience chronic psychological discomfort or have great difficulty coping independently with suffering or mental disorders.',
        conditionsLabel: 'Individual psychotherapy addresses, among others',
        conditions: [
          'Anxiety disorders (neuroses)',
          'Mood disorders (depression)',
          'Crisis, trauma, loss of a loved one',
          'Sense of injustice, inability to forgive related to the past',
          'Adult Children of Alcoholics syndrome (ACA)',
          'Difficulties in relationships and everyday functioning',
          'Personality disorders',
        ],
        examinations: ['Specialist consultation', 'Other service'],
      },
      ua: {
        name: 'Психологія',
        menuLabel: 'Психолог',
        description: 'Індивідуальна психотерапія для дорослих та підлітків — спеціалізована форма психологічної допомоги, заснована на безпосередньому контакті психотерапевта з клієнтом. Психотерапія спрямована перш за все на осіб, які відчувають хронічний психологічний дискомфорт або мають великі труднощі з самостійним подоланням страждань чи психічних розладів.',
        conditionsLabel: 'Індивідуальна психотерапія стосується, зокрема',
        conditions: [
          'Тривожні розлади (неврози)',
          'Розлади настрою (депресія)',
          'Криза, травма, втрата близької людини',
          'Відчуття несправедливості, нездатність пробачити пов\'язані з минулим',
          'Синдром дорослих дітей алкоголіків (ДДА)',
          'Труднощі у стосунках та повсякденному функціонуванні',
          'Розлади особистості',
        ],
        examinations: ['Консультація спеціаліста', 'Інша послуга'],
      },
    },
  },
  {
    id: 11,
    slug: 'urologia',
    name: 'Urologia',
    menuLabel: 'Urolog',
    description: 'Urologia to dziedzina medycyny zajmująca się diagnostyką, leczeniem i profilaktyką chorób układu moczowego u kobiet i mężczyzn oraz układu płciowego u mężczyzn. Nasi specjaliści kompleksowo leczą schorzenia nerek, pęcherza moczowego, moczowodów, cewki moczowej, prostaty oraz jąder. Zajmujemy się m.in. kamicą nerkową, infekcjami dróg moczowych, przerostem prostaty, nietrzymaniem moczu oraz nowotworami układu moczowo-płciowego. W diagnostyce wykorzystujemy nowoczesne metody, w tym badania USG, urodynamiczne oraz laboratoryjne badania krwi i moczu. W razie potrzeby oferujemy również leczenie chirurgiczne i zabiegowe.',
    examinations: [
      'Konsultacja specjalistyczna',
      'Inna usługa',
    ],
    translations: {
      en: {
        name: 'Urology',
        menuLabel: 'Urologist',
        description: 'Urology deals with the diagnosis, treatment and prevention of urinary tract diseases in women and men, as well as male reproductive tract diseases. Our specialists treat kidney, bladder, ureter, urethra, prostate and testicular disorders. We address kidney stones, urinary infections, prostate hypertrophy, urinary incontinence and urogenital tumours. We use modern diagnostic methods including ultrasound, urodynamic tests and laboratory blood and urine tests. Surgical treatment is also available where needed.',
        examinations: ['Specialist consultation', 'Other service'],
      },
      ua: {
        name: 'Урологія',
        menuLabel: 'Уролог',
        description: 'Урологія займається діагностикою, лікуванням та профілактикою захворювань сечовивідних шляхів у жінок і чоловіків, а також захворювань чоловічої статевої системи. Наші спеціалісти комплексно лікують захворювання нирок, сечового міхура, сечоводів, сечівника, простати та яєчок. Ми займаємося нирковокам\'яною хворобою, інфекціями сечовивідних шляхів, гіперплазією простати, нетриманням сечі та пухлинами сечостатевої системи. Використовуємо сучасні методи діагностики, включаючи УЗД, уродинамічні та лабораторні дослідження. За потреби пропонуємо хірургічне лікування.',
        examinations: ['Консультація спеціаліста', 'Інша послуга'],
      },
    },
  },
  {
    id: 12,
    slug: 'dietetyka',
    name: 'Dietetyka',
    menuLabel: 'Dietetyk',
    description: 'Zdrowe odżywianie to fundament dobrego samopoczucia i profilaktyki wielu chorób cywilizacyjnych. W naszej klinice oferujemy kompleksowe konsultacje dietetyczne prowadzone przez doświadczonych specjalistów, którzy pomagają pacjentom osiągnąć cele zdrowotne poprzez indywidualnie dopasowane strategie żywieniowe. Niezależnie od tego, czy zmagasz się z nadwagą, chorobami metabolicznymi, czy po prostu chcesz poprawić jakość swojego życia — jesteśmy tu, by Ci pomóc.',
    serviceGroups: [
      {
        title: 'Indywidualne plany żywieniowe',
        items: [
          'Redukcja masy ciała',
          'Przyrost masy mięśniowej',
          'Dieta lecznicza',
        ],
      },
      {
        title: 'Dieta przy chorobach metabolicznych',
        items: [
          'Cukrzyca typu 2',
          'Insulinooporność',
          'Niedoczynność tarczycy',
        ],
      },
      {
        title: 'Żywienie w chorobach układu pokarmowego',
        items: [
          'SIBO',
          'IBS',
          'Refluks',
          'Nietolerancje pokarmowe',
        ],
      },
      {
        title: 'Wsparcie żywieniowe',
        items: [
          'Wsparcie żywieniowe w onkologii i rekonwalescencji pooperacyjnej',
          'Dietetyka pediatryczna',
          'Żywienie kobiet w ciąży oraz karmiących',
          'Edukacja żywieniowa i warsztaty zdrowego gotowania',
        ],
      },
    ],
    infoSections: [
      {
        title: 'Jak wygląda wizyta u dietetyka?',
        content: 'Nasz dietetyk kliniczny przeprowadza szczegółowy wywiad zdrowotny, analizę składu ciała oraz wyników badań laboratoryjnych, na podstawie których układa spersonalizowany plan żywieniowy. Każdy jadłospis jest dostosowany do Twoich potrzeb, trybu życia, preferencji smakowych oraz ewentualnych schorzeń towarzyszących. Regularne wizyty kontrolne pozwalają na bieżące modyfikowanie diety i monitorowanie postępów terapii.',
      },
    ],
    translations: {
      en: {
        name: 'Dietetics',
        menuLabel: 'Dietitian',
        description: 'Healthy nutrition is the foundation of wellbeing and prevention of many civilisation diseases. Our clinic offers comprehensive dietary consultations conducted by experienced specialists who help patients achieve health goals through individually tailored nutritional strategies. Whether you struggle with excess weight, metabolic diseases, or simply want to improve your quality of life – we are here to help.',
        serviceGroups: [
          {
            title: 'Individual nutritional plans',
            items: ['Weight reduction', 'Muscle mass gain', 'Therapeutic diet'],
          },
          {
            title: 'Diet in metabolic diseases',
            items: ['Type 2 diabetes', 'Insulin resistance', 'Hypothyroidism'],
          },
          {
            title: 'Nutrition in gastrointestinal diseases',
            items: ['SIBO', 'IBS', 'Reflux', 'Food intolerances'],
          },
          {
            title: 'Nutritional support',
            items: [
              'Nutritional support in oncology and post-operative recovery',
              'Paediatric dietetics',
              'Nutrition for pregnant and breastfeeding women',
              'Nutritional education and healthy cooking workshops',
            ],
          },
        ],
        infoSections: [
          {
            title: 'What does a visit to the dietitian look like?',
            content: 'Our clinical dietitian conducts a detailed health history, body composition analysis and laboratory results evaluation, on the basis of which an individualised nutritional plan is drawn up. Each meal plan is tailored to your needs, lifestyle, taste preferences and any coexisting conditions. Regular follow-up visits allow ongoing modification of the diet and monitoring of therapy progress.',
          },
        ],
      },
      ua: {
        name: 'Дієтетика',
        menuLabel: 'Дієтолог',
        description: 'Здорове харчування є основою гарного самопочуття та профілактики багатьох цивілізаційних хвороб. Наша клініка пропонує комплексні дієтологічні консультації досвідчених спеціалістів, які допомагають пацієнтам досягти цілей здоров\'я через індивідуально підібрані дієтологічні стратегії. Незалежно від того, чи ви страждаєте від зайвої ваги, метаболічних захворювань, чи просто хочете покращити якість свого життя — ми тут, щоб допомогти.',
        serviceGroups: [
          {
            title: 'Індивідуальні плани харчування',
            items: ['Зниження ваги', 'Набір м\'язової маси', 'Лікувальна дієта'],
          },
          {
            title: 'Дієта при метаболічних захворюваннях',
            items: ['Цукровий діабет 2 типу', 'Інсулінорезистентність', 'Гіпотиреоз'],
          },
          {
            title: 'Харчування при захворюваннях ШКТ',
            items: ['СІБО', 'СПК', 'Рефлюкс', 'Харчова непереносимість'],
          },
          {
            title: 'Нутритивна підтримка',
            items: [
              'Нутритивна підтримка в онкології та після операційного відновлення',
              'Дієтологія для дітей',
              'Харчування вагітних та жінок, що годують груддю',
              'Дієтологічна освіта та майстер-класи здорового приготування їжі',
            ],
          },
        ],
        infoSections: [
          {
            title: 'Як проходить візит до дієтолога?',
            content: 'Наш клінічний дієтолог проводить детальний анамнез здоров\'я, аналіз складу тіла та оцінку результатів лабораторних досліджень, на основі яких складає індивідуалізований план харчування. Кожне меню підлаштовується під ваші потреби, спосіб життя, смакові уподобання та будь-які супутні захворювання. Регулярні контрольні візити дозволяють постійно коригувати дієту та контролювати прогрес терапії.',
          },
        ],
      },
    },
  },
  {
    id: 13,
    slug: 'diabetologia',
    name: 'Diabetologia',
    menuLabel: 'Diabetolog',
    description: 'Poradnia diabetologiczna zajmuje się diagnostyką i leczeniem cukrzycy u osób dorosłych oraz edukacją w zakresie zdrowego stylu życia i samokontroli glikemii.',
    conditionsLabel: 'Diagnostyka i leczenie cukrzycy',
    conditions: [
      'Cukrzyca typ 1 i 2',
      'Cukrzyca ciążowa',
      'Cukrzyca wtórna',
      'Hipoglikemia i hiperglikemia',
    ],
    examinationsLabel: 'Prowadzimy edukację w zakresie',
    examinations: [
      'Diety',
      'Samodzielnej kontroli glikemii',
      'Obsługi pena do podawania insuliny',
      'Aktywnego trybu życia',
      'Samokontroli i kontynuacji leczenia w chorobach współistniejących',
    ],
    translations: {
      en: {
        name: 'Diabetology',
        menuLabel: 'Diabetologist',
        description: 'The diabetology outpatient clinic deals with the diagnosis and treatment of diabetes in adults, as well as education in healthy lifestyle and blood glucose self-monitoring.',
        conditionsLabel: 'Diagnosis and treatment of diabetes',
        conditions: ['Type 1 and Type 2 diabetes', 'Gestational diabetes', 'Secondary diabetes', 'Hypoglycaemia and hyperglycaemia'],
        examinationsLabel: 'We provide education in the field of',
        examinations: [
          'Diet',
          'Blood glucose self-monitoring',
          'Insulin pen use',
          'Active lifestyle',
          'Self-monitoring and treatment continuation in coexisting diseases',
        ],
      },
      ua: {
        name: 'Діабетологія',
        menuLabel: 'Діабетолог',
        description: 'Діабетологічна клініка займається діагностикою та лікуванням цукрового діабету у дорослих, а також навчанням щодо здорового способу життя та самоконтролю глікемії.',
        conditionsLabel: 'Діагностика та лікування цукрового діабету',
        conditions: ['Цукровий діабет 1 та 2 типу', 'Гестаційний діабет', 'Вторинний діабет', 'Гіпоглікемія та гіперглікемія'],
        examinationsLabel: 'Ми проводимо навчання у сфері',
        examinations: [
          'Дієти',
          'Самостійного контролю глікемії',
          'Використання інсулінового шприц-ручки',
          'Активного способу життя',
          'Самоконтролю та продовження лікування при супутніх захворюваннях',
        ],
      },
    },
  },
  {
    id: 14,
    slug: 'medycyna-estetyczna',
    name: 'Medycyna Estetyczna',
    menuLabel: 'Medycyna Estetyczna',
    hideFromMenu: true,
    description: 'Oferujemy szeroki zakres zabiegów z dziedziny medycyny estetycznej wykonywanych przez doświadczonych specjalistów. W naszej ofercie znajdują się zabiegi z kwasem hialuronowym, toksyna botulinową (botox) oraz innowacyjne nici liftingujące. Każdy zabieg przeprowadzany jest z dbałością o naturalny efekt końcowy i bezpieczeństwo pacjenta.',
    serviceGroups: [
      {
        title: 'Zabiegi przeprowadzone przy pomocy kwasu hialuronowego',
        items: [
          'Modelowanie i powiększenie ust',
          'Korekcja zmarszczek między brwiami tzw. lwiej zmarszczki',
          'Korekcja bruzd marionetek',
          'Korekcja bruzd nosowo-wargowych',
          'Uzupełnienie tzw. doliny łez',
          'Korekcja tzw. zmarszczek palacza',
          'Uzupełnienie objętości policzków – wolumetria',
          'Korekcja wszelkich innych bruzd powstałych z wiekiem bądź pod wpływem urazu',
        ],
      },
      {
        title: 'Zabiegi przeprowadzone przy pomocy botoxu',
        items: [
          'Zmarszczki między brwiami',
          'Zmarszczki poziome czoła',
          'Kurze łapki',
          'Zmarszczki wokół ust',
        ],
      },
      {
        title: 'Zabiegi przeprowadzane przy pomocy nici liftingujących',
        items: [
          'Pionowe i poziome zmarszczki na czole',
          'Lifting czoła, obniżone zewnętrzne krawędzie brwi, wiotka tkanka, opadające brwi',
          'Dolna powieka – worki',
          'Policzki',
          'Wyraźny fałd nosowo-wargowy',
          'Rowek policzkowo-jarzmowy',
          'Fałd podbródkowy',
          'Fałd marionetkowy',
          'V-lifting',
          'Opadające policzki i obszar pod dolną szczęką',
          'Fałdy skóry na policzku',
        ],
      },
    ],
    infoSections: [
      {
        title: 'Kwas hialuronowy',
        content: 'Preparaty do wypełniania zmarszczek na bazie kwasu hialuronowego mają postać krystalicznego, bardzo plastycznego i elastycznego żelu, który po wprowadzeniu do skóry wypełnia zmarszczkę, dając bardzo naturalny efekt. Po wstrzyknięciu żelu w linię zmarszczki lub w usta preparat wiąże wodę i powiększa objętość danej okolicy, wygładza ją bądź nadaje zadany kształt w przypadku ust czy policzków.',
      },
      {
        title: 'Botox',
        content: 'Botox to środek, który w skuteczny sposób blokuje jakiekolwiek przewodzenie bodźców z nerwów do mięśni, których zadaniem jest panowanie nad mimiką twarzy. Przeciwdziała skurczom tej partii mięśni, a dodatkowo jest dobrym sposobem na marszczenie i fałdowanie się skóry, czyli pogłębianie się zmarszczek. Działanie botoxu dotyczy jedynie obrębu tych mięśni, do których go wstrzyknięto. Dlatego też kiedy zaczyna działać nie zmienia się wyraz twarzy, a jedyna zmiana dotyczy znikających zmarszczek. Warto wiedzieć, że botox zaczyna działać dopiero po 2–3 dniach od zabiegu, a pełen efekt widać po 7–10 dniach. Utrzymuje się on przez 3–5 miesięcy (zależy od indywidualnych predyspozycji), a potem stopniowo zanika.',
      },
      {
        title: 'Nici liftingujące',
        content: 'Aplikacja nici jest praktycznie bezinwazyjna i bezbolesna, trwa około pół godziny, nie pozostawia żadnych blizn ani nacięć, a drobne zaczerwienienia znikają w ciągu kilku dni. Dodatkowo można je aplikować niemal na całym ciele – tak delikatnych i wszechstronnych nici jeszcze nie było!',
      },
    ],
    translations: {
      en: {
        name: 'Aesthetic Medicine',
        menuLabel: 'Aesthetic Medicine',
        description: 'We offer a wide range of aesthetic medicine procedures performed by experienced specialists. Our services include hyaluronic acid fillers, botulinum toxin (botox) and innovative thread lifting. Every procedure is carried out with a focus on natural-looking results and patient safety.',
        serviceGroups: [
          {
            title: 'Hyaluronic acid treatments',
            items: [
              'Lip modelling and augmentation',
              'Correction of frown lines (glabellar lines)',
              'Correction of marionette lines',
              'Correction of nasolabial folds',
              'Tear trough filling',
              'Correction of smoker\'s lines',
              'Cheek volumisation',
              'Correction of any other age-related or trauma-related wrinkles',
            ],
          },
          {
            title: 'Botox treatments',
            items: ['Frown lines', 'Horizontal forehead lines', 'Crow\'s feet', 'Perioral lines'],
          },
          {
            title: 'Thread lifting treatments',
            items: [
              'Vertical and horizontal forehead wrinkles',
              'Forehead lift, lowered outer brow edges, sagging tissue, drooping eyebrows',
              'Lower eyelid – bags',
              'Cheeks',
              'Prominent nasolabial fold',
              'Cheek-zygomatic groove',
              'Chin fold',
              'Marionette fold',
              'V-lift',
              'Drooping cheeks and area under the lower jaw',
              'Skin folds on the cheek',
            ],
          },
        ],
        infoSections: [
          {
            title: 'Hyaluronic acid',
            content: 'Hyaluronic acid-based wrinkle fillers take the form of a crystalline, highly pliable and elastic gel that, after being introduced into the skin, fills the wrinkle giving a very natural effect. After injection into the wrinkle line or lips, the preparation binds water and increases volume, smoothes the area or gives the desired shape.',
          },
          {
            title: 'Botox',
            content: 'Botox effectively blocks impulse conduction from nerves to facial muscles. It counteracts contractions of those muscles and prevents skin wrinkling. Botox acts only on the muscles into which it is injected, so facial expression is preserved while wrinkles disappear. It starts working 2–3 days after the procedure, full effect is visible after 7–10 days, and it lasts 3–5 months.',
          },
          {
            title: 'Thread lifting',
            content: 'Thread application is practically non-invasive and painless, takes about half an hour, leaves no scars or incisions, and minor redness disappears within a few days. They can be applied to almost any part of the body.',
          },
        ],
      },
      ua: {
        name: 'Естетична медицина',
        menuLabel: 'Естетична медицина',
        description: 'Ми пропонуємо широкий спектр процедур естетичної медицини, що виконуються досвідченими спеціалістами. У нашій пропозиції — ін\'єкції гіалуронової кислоти, ботулінічного токсину (ботокс) та інноваційні ліфтингові нитки. Кожна процедура проводиться з акцентом на природний результат та безпеку пацієнта.',
        serviceGroups: [
          {
            title: 'Процедури з гіалуроновою кислотою',
            items: [
              'Моделювання та збільшення губ',
              'Корекція зморшок між бровами (зморшки лева)',
              'Корекція маріонеткових ліній',
              'Корекція носогубних складок',
              'Заповнення сльозової борозни',
              'Корекція зморшок курця',
              'Волюметрія щік',
              'Корекція будь-яких інших зморшок, що виникли з віком або внаслідок травми',
            ],
          },
          {
            title: 'Процедури з ботоксом',
            items: ['Зморшки між бровами', 'Горизонтальні зморшки чола', 'Зморшки-гусячі лапки', 'Зморшки навколо рота'],
          },
          {
            title: 'Процедури з ліфтинговими нитками',
            items: [
              'Вертикальні та горизонтальні зморшки на чолі',
              'Ліфтинг чола, опущені зовнішні краї брів, в\'яла тканина, опущені брови',
              'Нижнє повіко — мішки',
              'Щоки',
              'Виражена носогубна складка',
              'Щічно-вилична борозна',
              'Складка підборіддя',
              'Маріонеткова складка',
              'V-ліфтинг',
              'Опущені щоки та область під нижньою щелепою',
              'Складки шкіри на щоці',
            ],
          },
        ],
        infoSections: [
          {
            title: 'Гіалуронова кислота',
            content: 'Препарати для заповнення зморшок на основі гіалуронової кислоти мають вигляд кристалічного, дуже пластичного та еластичного гелю, який після введення в шкіру заповнює зморшку, даючи природний ефект. Після ін\'єкції гель зв\'язує воду, збільшує об\'єм ділянки, розгладжує її або надає заданої форми.',
          },
          {
            title: 'Ботокс',
            content: 'Ботокс ефективно блокує передачу імпульсів від нервів до мімічних м\'язів обличчя. Він протидіє скороченням цих м\'язів і запобігає поглибленню зморшок. Ботокс діє лише на ті м\'язи, в які його ввели, тому вираз обличчя зберігається, а зморшки зникають. Починає діяти через 2–3 дні, повний ефект — через 7–10 днів, утримується 3–5 місяців.',
          },
          {
            title: 'Ліфтингові нитки',
            content: 'Нанесення ниток практично неінвазивне та безболісне, займає близько півгодини, не залишає жодних шрамів або надрізів, а незначне почервоніння зникає протягом кількох днів. Їх можна наносити майже на будь-яку частину тіла.',
          },
        ],
      },
    },
  },
  {
    id: 15,
    slug: 'biopsja',
    name: 'Biopsja cienkoigłowa',
    menuLabel: 'Biopsja',
    description: 'Oprócz tego, że możecie Państwo skorzystać u nas z pomocy kardiologa czy neurologa, to w poradni Vitalis istnieje możliwość wykonania profesjonalnej diagnostyki nowotworowej. Pozwala ona na diagnozę cytopatologiczną zmienionych przez chorobę tkanek w obrębie tarczycy, ślinianek i węzłów chłonnych.',
    infoSections: [
      {
        title: 'Informacje szczegółowe',
        content: 'Biopsja aspiracyjna cienkoigłowa pod kontrolą USG to jedna z najmniej inwazyjnych metod brania odpowiedniego materiału cytologicznego. Polega na nakłuciu badanej części ciała cienką igłą, oczywiście pod stałą kontrolą na obrazie USG. Materiał pobrany w ten sposób pod mikroskopem ocenia cytopatolog. Metoda ta umożliwia szybką i trafną diagnozę zarówno nowotworów o przebiegu łagodnym, jak i złośliwym. Technika ta, oprócz małej inwazyjności, ma szereg innych zalet. Niewątpliwie jedną spośród nich jest możliwość uzyskania odpowiednio wyodrębnionego materiału z guzów, które położone są głęboko wśród tkanek, w sposób, który nie wymaga ogólnego znieczulenia i pobierania całego wycinka.',
      },
      {
        title: 'Przebieg badania',
        content: 'Biopsja cienkoigłowa rutynowo nie wymaga żadnych środków przeciwbólowych ani przed, ani po jej wykonaniu. W celu zlokalizowania odpowiedniego miejsca do skóry przykładana jest sonda. Po odnalezieniu przez badającego podejrzanej zmiany na monitorze USG, lekarz wkłuwa cienką igłę (zazwyczaj o średnicy 0,4–0,7 mm), jednocześnie cały czas śledząc to, co się dzieje na monitorze aparatury USG. Po przekłuciu skóry i w momencie dotarcia do zmiany, specjalista pobiera materiał komórkowy. Kiedy wyjmuje igłę, zakłada osobie badanej jałowy opatrunek.',
      },
    ],
    translations: {
      en: {
        name: 'Fine-needle Biopsy',
        menuLabel: 'Biopsy',
        description: 'In addition to cardiological and neurological care, the Vitalis clinic offers professional oncological diagnostics – cytopathological diagnosis of disease-altered tissues in the thyroid gland, salivary glands and lymph nodes.',
        infoSections: [
          {
            title: 'Detailed information',
            content: 'Ultrasound-guided fine-needle aspiration biopsy is one of the least invasive methods of obtaining cytological material. It involves puncturing the examined area with a fine needle under constant ultrasound monitoring. The material is evaluated under a microscope by a cytopathologist. This method enables rapid and accurate diagnosis of both benign and malignant tumours. Besides its minimal invasiveness, it allows material to be obtained from deeply located tumours without general anaesthesia.',
          },
          {
            title: 'Examination procedure',
            content: 'Fine-needle biopsy routinely requires no analgesics before or after the procedure. A probe is placed on the skin to locate the appropriate site. After the examiner locates a suspicious lesion on the ultrasound monitor, the doctor inserts a fine needle (usually 0.4–0.7 mm in diameter) while continuously monitoring the ultrasound screen. After piercing the skin and reaching the lesion, the specialist collects cell material. When the needle is removed, a sterile dressing is applied.',
          },
        ],
      },
      ua: {
        name: 'Тонкоголкова біопсія',
        menuLabel: 'Біопсія',
        description: 'Окрім кардіологічної та неврологічної допомоги, клініка Vitalis пропонує професійну онкологічну діагностику — цитопатологічну діагностику змінених хворобою тканин щитоподібної залози, слинних залоз та лімфатичних вузлів.',
        infoSections: [
          {
            title: 'Детальна інформація',
            content: 'Аспіраційна тонкоголкова біопсія під контролем УЗД є одним з найменш інвазивних методів отримання цитологічного матеріалу. Вона полягає у проколюванні досліджуваної ділянки тонкою голкою під постійним ультразвуковим контролем. Матеріал оцінює під мікроскопом цитопатолог. Метод дозволяє швидко та точно діагностувати як доброякісні, так і злоякісні пухлини. Крім мінімальної інвазивності, дозволяє отримати матеріал з глибоко розташованих пухлин без загального знеболення.',
          },
          {
            title: 'Процедура обстеження',
            content: 'Тонкоголкова біопсія зазвичай не вимагає жодних знеболювальних засобів. Датчик прикладається до шкіри для локалізації місця. Після знаходження підозрілої зміни на моніторі УЗД лікар вводить тонку голку (зазвичай діаметром 0,4–0,7 мм), постійно стежачи за екраном. Після проколювання шкіри та досягнення зміни спеціаліст збирає клітинний матеріал. Після видалення голки накладають стерильну пов\'язку.',
          },
        ],
      },
    },
  },
  {
    id: 16,
    slug: 'rehabilitacja',
    name: 'Rehabilitacja',
    menuLabel: 'Rehabilitacja',
    hideFromMenu: true,
    description: 'Podstawą naszych rehabilitacji jest odpowiednie podejście do pacjenta. Skuteczność każdego działania, które ma prowadzić do odzyskania pełnej sprawności polega na tym, że jego podstawą jest holistyczne traktowania organizmu każdego człowieka. Kompleksowe spojrzenie na pacjenta pozwoli na takie prowadzenie rehabilitacji, że ten odzyska pełną sprawność w możliwie najkrótszym czasie.',
    conditionsLabel: 'Rehabilitacja obejmuje',
    conditions: [
      'leczenie ostrych i przewlekłych zespołów bólowych kręgosłupa (dyskopatia, rwa kulszowa, rwa udowa, rwa ramienia)',
      'leczenie ostrych i przewlekłych zespołów bólowych stawów kończyn (Zespół Ciasnoty Podbarkowej, „zamrożony bark", łokieć golfisty i tenisisty, kolano skoczka, „chondromalacja rzepki")',
      'fizjoterapię zachowawczą, a także pooperacyjną stawu kolanowego (uszkodzenia ACL, PCL, MCL, LCL)',
      'prowadzenie profilaktyki bólów kręgosłupa, naukę ergonomii miejsca pracy',
      'usprawnianie po zabiegach operacyjnych w obrębie kręgosłupa',
      'rehabilitację po urazach (zwichnięciach, skręceniach, złamaniach)',
      'dysfunkcje stawów skroniowo-żuchwowych (bóle głowy, ból mięśni twarzy i żuchwy)',
    ],
    examinationsLabel: 'Na wizytę zabierz ze sobą',
    examinations: [
      'swobodny strój sportowy, nie ograniczający ruchów i umożliwiający dostęp do leczonej okolicy ciała',
      'obuwie sportowe',
      'ręcznik',
      'dokumentację medyczną z przebiegu dotychczasowego leczenia oraz wykonanych badań (o ile Pacjent taką posiada)',
    ],
    infoSections: [
      {
        title: 'Indywidualne podejście',
        content: 'Do każdego pacjenta należy dostosować indywidualny program rehabilitacji. Musi się on opierać na szeregu zmiennych. Pod uwagę należy wziąć przede wszystkim rodzaj dolegliwości, z jaką dana osoba się zmaga, a także jej stopień. Nie można dawać zbyt trudnych zadań komuś, kto jest dopiero na początku rehabilitacji. Inne czynniki, które każdy lekarz weźmie pod uwagę, to między innymi ogólny stan zdrowia pacjenta, a także założony cel, jaki postawili sobie leczący i leczony. Odpowiednio dopasowany program rehabilitacji pozwoli nie tylko na efektywne leczenie, ale także na utrwalenie jego efektów oraz zmniejszenie do minimum ryzyka nawrotu kontuzji.',
      },
      {
        title: 'Odpowiednie zaplecze',
        content: 'Posiadamy nowocześnie urządzoną salę gimnastyczną, która umożliwia przeprowadzanie rehabilitacji i wspomaga trening siłowy, wydolnościowy, funkcjonalny i dynamiczny, odbudowę prawidłowych wzorców ruchowych i korekcję wady postawy, a także odbudowę balansu i koordynacji nerwowo-mięśniowej (propriocepcja). Rehabilitacja w poradni Vitalis prowadzona jest przez wykwalifikowanych fizjoterapeutów z wieloletnim doświadczeniem.',
      },
      {
        title: 'Wizyta diagnostyczna',
        content: 'Pierwsza wizyta ma charakter diagnostyczno-terapeutyczny. Większość czasu poświęcona jest na kompleksowe badanie fizjoterapeutyczne, polegające na szczegółowym wywiadzie z Pacjentem na temat dolegliwości i obecnego stanu zdrowia. Dokładna diagnostyka ma na celu określenie przyczyny dysfunkcji i zaplanowanie indywidualnego programu terapeutycznego, który rozpoczyna się już w trakcie pierwszej wizyty. W terapii wykorzystuje się nowoczesne metody fizjoterapeutyczne. Pacjentowi dobiera się też indywidualny program ćwiczeń.',
      },
      {
        title: 'Wizyta standardowa',
        content: 'Standardowa wizyta fizjoterapeutyczna łączy w sobie elementy terapii manualnej oraz ćwiczeń z zastosowaniem nowoczesnego sprzętu rehabilitacyjnego. Trening na sali gimnastycznej pozwala na utrwalenie efektów terapii.',
      },
      {
        title: 'Wizyta indywidualna',
        content: 'Indywidualna wizyta fizjoterapeutyczna przeznaczona jest dla Pacjentów wymagających indywidualnej pracy manualnej. Podczas tego typu terapii fizjoterapeuta jest na wyłączność danego Pacjenta.',
      },
      {
        title: 'Trening funkcjonalny',
        content: 'Trening funkcjonalny ustalany jest w sposób indywidualny — w zależności od rodzaju dolegliwości, ogólnego stanu zdrowia oraz potrzeb i założonego celu dobiera się zestaw ćwiczeń obejmujących ruch we wszystkich płaszczyznach.',
      },
      {
        title: 'Program Profilaktyki i Promocji Zdrowia',
        content: 'Ta oferta skierowana jest do osób po 65. roku życia, chcących w sposób regularny dbać o swoją sprawność fizyczną oraz działać profilaktycznie. Dostępna wyłącznie w pakiecie 10 zabiegów.',
      },
    ],
    translations: {
      en: {
        name: 'Rehabilitation',
        menuLabel: 'Rehabilitation',
        description: 'The foundation of our rehabilitation is the proper approach to the patient. The effectiveness of any action aimed at restoring full physical ability lies in the holistic treatment of each person\'s body. A comprehensive view of the patient enables rehabilitation to be conducted so that they regain full fitness in the shortest possible time.',
        conditionsLabel: 'Rehabilitation covers',
        conditions: [
          'Treatment of acute and chronic spinal pain syndromes (disc disease, sciatica, femoral neuralgia, arm neuralgia)',
          'Treatment of acute and chronic joint pain syndromes (Subacromial Impingement, "frozen shoulder", golfer\'s and tennis elbow, jumper\'s knee, chondromalacia patella)',
          'Conservative and post-operative physiotherapy of the knee joint (ACL, PCL, MCL, LCL injuries)',
          'Prevention of spinal pain and workplace ergonomics training',
          'Post-operative spine rehabilitation',
          'Rehabilitation after injuries (dislocations, sprains, fractures)',
          'Temporomandibular joint dysfunction (headaches, facial and jaw muscle pain)',
        ],
        examinationsLabel: 'Bring to your appointment',
        examinations: [
          'Comfortable sportswear that does not restrict movement and allows access to the treated area',
          'Sports footwear',
          'A towel',
          'Medical records of previous treatment and tests performed (if available)',
        ],
        infoSections: [
          {
            title: 'Individual approach',
            content: 'An individual rehabilitation programme must be tailored to each patient based on the type and severity of the ailment, general health and the treatment goal. A properly tailored programme allows for effective treatment, consolidates its effects and minimises the risk of injury recurrence.',
          },
          {
            title: 'Appropriate facilities',
            content: 'We have a modern gymnasium enabling rehabilitation and strength, endurance, functional and dynamic training, rebuilding correct movement patterns and correcting posture defects, as well as rebuilding balance and neuromuscular coordination. Rehabilitation is carried out by qualified physiotherapists with many years of experience.',
          },
          {
            title: 'Diagnostic visit',
            content: 'The first visit is diagnostic and therapeutic. Most of the time is devoted to a comprehensive physiotherapy examination and detailed patient interview. Precise diagnosis identifies the cause of the dysfunction and an individual therapeutic programme begins during the first visit.',
          },
          {
            title: 'Standard visit',
            content: 'A standard physiotherapy visit combines manual therapy with exercises using modern rehabilitation equipment. Training in the gymnasium consolidates the effects of therapy.',
          },
          {
            title: 'Individual visit',
            content: 'An individual physiotherapy visit is for patients requiring individual manual work. During this type of therapy, the physiotherapist is exclusively devoted to one patient.',
          },
          {
            title: 'Functional training',
            content: 'Functional training is established individually – depending on the type of ailment, general health and treatment goals, a set of exercises covering movement in all planes is selected.',
          },
          {
            title: 'Health Prevention and Promotion Programme',
            content: 'This offer is addressed to people over 65 who wish to regularly take care of their physical fitness and act preventively. Available exclusively in a package of 10 treatments.',
          },
        ],
      },
      ua: {
        name: 'Реабілітація',
        menuLabel: 'Реабілітація',
        description: 'Основою нашої реабілітації є правильний підхід до пацієнта. Ефективність будь-якої дії, спрямованої на відновлення повної фізичної дієздатності, полягає у цілісному ставленні до організму кожної людини. Комплексний погляд на пацієнта дозволяє проводити реабілітацію так, щоб пацієнт відновив повну дієздатність у найкоротші терміни.',
        conditionsLabel: 'Реабілітація охоплює',
        conditions: [
          'Лікування гострих та хронічних больових синдромів хребта (дископатія, ішіас, стегнова невралгія, невралгія плеча)',
          'Лікування гострих та хронічних больових синдромів суглобів (синдром субакроміального защемлення, "заморожене плече", ліктьовий епікондиліт, коліно стрибуна, хондромаляція надколінника)',
          'Консервативна та постопераційна фізіотерапія колінного суглоба (пошкодження ПХЗ, ЗХЗ, МБЗ, ЛБЗ)',
          'Профілактика болю у спині та навчання ергономіці робочого місця',
          'Реабілітація після операцій на хребті',
          'Реабілітація після травм (вивихів, розтягнень, переломів)',
          'Дисфункції скронево-нижньощелепного суглоба (головні болі, болі м\'язів обличчя та щелепи)',
        ],
        examinationsLabel: 'Візьміть із собою на прийом',
        examinations: [
          'Зручний спортивний одяг, що не обмежує рухів і дозволяє доступ до лікованої ділянки тіла',
          'Спортивне взуття',
          'Рушник',
          'Медичну документацію попереднього лікування та проведених досліджень (якщо є)',
        ],
        infoSections: [
          {
            title: 'Індивідуальний підхід',
            content: 'До кожного пацієнта необхідно підібрати індивідуальну програму реабілітації з урахуванням типу та ступеня недуги, загального стану здоров\'я та поставленої мети. Відповідно підібрана програма дозволить ефективно лікуватися, закріпити її результати та мінімізувати ризик повторного травмування.',
          },
          {
            title: 'Відповідна база',
            content: 'У нас є сучасно обладнаний спортивний зал для проведення реабілітації та силових, витривалісних, функціональних і динамічних тренувань, відновлення правильних рухових патернів, корекції порушень постави та відновлення балансу і нервово-м\'язової координації. Реабілітацію проводять кваліфіковані фізіотерапевти з багаторічним досвідом.',
          },
          {
            title: 'Діагностичний візит',
            content: 'Перший візит має діагностично-терапевтичний характер. Більша частина часу присвячена комплексному фізіотерапевтичному обстеженню та детальному анамнезу. Точна діагностика визначає причину дисфункції, а індивідуальна терапевтична програма розпочинається вже на першому візиті.',
          },
          {
            title: 'Стандартний візит',
            content: 'Стандартний фізіотерапевтичний візит поєднує мануальну терапію та вправи з використанням сучасного реабілітаційного обладнання. Тренування в спортивному залі закріплює результати терапії.',
          },
          {
            title: 'Індивідуальний візит',
            content: 'Індивідуальний фізіотерапевтичний візит призначений для пацієнтів, які потребують індивідуальної мануальної роботи. Під час такого типу терапії фізіотерапевт приділяє увагу виключно одному пацієнту.',
          },
          {
            title: 'Функціональне тренування',
            content: 'Функціональне тренування встановлюється індивідуально — залежно від типу недуги, загального стану здоров\'я та поставленої мети підбирається комплекс вправ у всіх площинах руху.',
          },
          {
            title: 'Програма профілактики та зміцнення здоров\'я',
            content: 'Ця пропозиція орієнтована на осіб старше 65 років, які хочуть регулярно дбати про свою фізичну форму та діяти профілактично. Доступна виключно в пакеті 10 процедур.',
          },
        ],
      },
    },
  },
  {
    id: 17,
    slug: 'diagnostyka-usg',
    name: 'Diagnostyka USG',
    menuLabel: 'Diagnostyka USG',
    hideFromMenu: true,
    description: 'Pracownia diagnostyczna USG wyposażona jest w 3 wysokiej klasy aparaty USG (Philips HD7, Philips HD11XE, Siemens Accuson NX3) umożliwiające pełną diagnostykę wszystkich narządów człowieka. Poza standardowymi badaniami takimi jak USG j. brzusznej, pęcherza moczowego, tętnic i żył, tarczycy, narządów rodnych i jąder wykonujemy specjalistyczne badania w zakresie kardiologii oraz diagnostyki nowotworów z biopsją włącznie.',
    examinationsLabel: 'Świadczone usługi',
    examinations: [
      'USG jamy brzusznej',
      'USG węzłów chłonnych',
      'USG tkanek miękkich całego ciała',
      'USG — poszukiwanie wbitych ciał obcych',
      'USG stawów',
      'USG szyi',
      'Badanie dopplerowskie naczyń',
      'USG tarczycy',
      'USG piersi',
      'USG ślinianki',
      'USG układu moczowego (nerki, pęcherz moczowy)',
      'USG serca (ECHO, UKG)',
      'Stress Echo',
      'Echo przezprzełykowe',
    ],
    infoSections: [
      {
        title: 'Specjalistyczne badania',
        content: 'Jako jedni z nielicznych wykonujemy badania USG serca z wykorzystaniem głowicy przezprzełykowej (ECHO przezprzełykowe) oraz UKG obciążeniowe (Stress ECHO). Ponadto oferujemy szybką diagnozę piersi i tarczycy dzięki biopsji cienkoigłowej i gruboigłowej oraz bliskiej współpracy z pracownią histopatologii.',
      },
      {
        title: 'Nasz sprzęt',
        content: 'Pracownia wyposażona jest w nowoczesne aparaty USG: Philips Affinity, Philips HD7, Siemens Accuson NX3 oraz Philips HD11XE.',
      },
    ],
    translations: {
      en: {
        name: 'Ultrasound Diagnostics',
        menuLabel: 'Ultrasound Diagnostics',
        description: 'The ultrasound diagnostic laboratory is equipped with 3 high-class ultrasound machines (Philips HD7, Philips HD11XE, Siemens Accuson NX3) enabling comprehensive diagnostics of all human organs. In addition to standard examinations we perform specialist cardiac and oncological diagnostics including biopsy.',
        examinationsLabel: 'Services provided',
        examinations: [
          'Abdominal ultrasound',
          'Lymph node ultrasound',
          'Soft tissue ultrasound of the whole body',
          'Ultrasound – locating embedded foreign bodies',
          'Joint ultrasound',
          'Neck ultrasound',
          'Doppler vascular examination',
          'Thyroid ultrasound',
          'Breast ultrasound',
          'Salivary gland ultrasound',
          'Urinary system ultrasound (kidneys, bladder)',
          'Cardiac ultrasound (ECHO, UKG)',
          'Stress Echo',
          'Transesophageal echo',
        ],
        infoSections: [
          {
            title: 'Specialist examinations',
            content: 'As one of the few clinics, we perform cardiac ultrasound using a transesophageal probe (transesophageal ECHO) and stress echocardiography (Stress ECHO). We also offer rapid breast and thyroid diagnosis through fine-needle and core-needle biopsy and close cooperation with the histopathology laboratory.',
          },
          {
            title: 'Our equipment',
            content: 'The laboratory is equipped with modern ultrasound machines: Philips Affinity, Philips HD7, Siemens Accuson NX3 and Philips HD11XE.',
          },
        ],
      },
      ua: {
        name: 'УЗД діагностика',
        menuLabel: 'УЗД діагностика',
        description: 'Діагностична лабораторія УЗД оснащена 3 апаратами УЗД високого класу (Philips HD7, Philips HD11XE, Siemens Accuson NX3), що дозволяють проводити повну діагностику всіх органів людини. Окрім стандартних досліджень виконуємо спеціалізовані кардіологічні та онкологічні дослідження, включаючи біопсію.',
        examinationsLabel: 'Послуги, що надаються',
        examinations: [
          'УЗД черевної порожнини',
          'УЗД лімфатичних вузлів',
          'УЗД м\'яких тканин усього тіла',
          'УЗД — пошук сторонніх тіл',
          'УЗД суглобів',
          'УЗД шиї',
          'Допплерівське дослідження судин',
          'УЗД щитоподібної залози',
          'УЗД грудей',
          'УЗД слинних залоз',
          'УЗД сечовидільної системи (нирки, сечовий міхур)',
          'УЗД серця (ЕХОКГ, УКГ)',
          'Стрес-Ехо',
          'Трансезофагеальне ехо',
        ],
        infoSections: [
          {
            title: 'Спеціалізовані дослідження',
            content: 'Як одна з небагатьох клінік, ми виконуємо УЗД серця за допомогою трансезофагеального датчика (трансезофагеальне ЕХОКГ) та стрес-ехокардіографію (Стрес-ЕХОКГ). Крім того, пропонуємо швидку діагностику грудей та щитоподібної залози завдяки тонко- та товстоголковій біопсії і тісній співпраці з гістопатологічною лабораторією.',
          },
          {
            title: 'Наше обладнання',
            content: 'Лабораторія оснащена сучасними апаратами УЗД: Philips Affinity, Philips HD7, Siemens Accuson NX3 та Philips HD11XE.',
          },
        ],
      },
    },
  },
  {
    id: 18,
    slug: 'biopsja-grubogłowa',
    name: 'Biopsja gruboigłowa – guz piersi',
    menuLabel: 'Biopsja gruboigłowa',
    description: 'W Poradni Vitalis oferujemy szybką i rzetelną diagnostykę guzów piersi opartą na USG wykonywanym na wysokiej klasy aparacie Philips Affinity oraz ewentualnej biopsji gruboigłowej. Rak piersi jest najczęstszym nowotworem wśród kobiet i jedną z głównych przyczyn zgonów z powodu nowotworów złośliwych.',
    examinationsLabel: 'W ramach diagnostyki raka sutka wykonujemy',
    examinations: [
      'USG piersi',
      'Cienkoigłową i gruboigłową biopsję piersi',
      'Badanie histopatologiczne',
    ],
    infoSections: [
      {
        title: 'Informacje szczegółowe',
        content: 'Biopsja gruboigłowa prawie całkowicie wyparła biopsję cienkoigłową. W tej metodzie igła do pobierania komórek ma większą średnicę i specjalną końcówkę, która pozwala na pobranie tkanek. Wykonuje się ją, aby wykluczyć podejrzenie choroby nowotworowej lub określić zaawansowanie.',
      },
      {
        title: 'Przebieg badania',
        content: 'Biopsję gruboigłową poprzedza się znieczuleniem – pacjentka dostaje lidokainę. Zabieg jest małoinwazyjny, nie wymaga zakładania szwów; igła wprowadzana jest przez małe, 2–3 milimetrowe nacięcie skóry. Po zabiegu pacjentka otrzymuje opatrunek i zalecenie, aby przez 2–3 dni prowadzić oszczędny tryb życia. Powikłań w zasadzie nie ma; co najwyżej może pojawić się siniak w miejscu ukłucia lub loża, w której był guzek i która może napełnić się krwią.',
      },
    ],
    translations: {
      en: {
        name: 'Core-needle Biopsy – Breast Tumour',
        menuLabel: 'Core-needle Biopsy',
        description: 'At the Vitalis clinic we offer quick and reliable diagnostics of breast tumours based on ultrasound performed on a high-class Philips Affinity machine and possible core-needle biopsy. Breast cancer is the most common cancer among women and one of the main causes of cancer-related deaths.',
        examinationsLabel: 'In breast cancer diagnostics we perform',
        examinations: ['Breast ultrasound', 'Fine-needle and core-needle breast biopsy', 'Histopathological examination'],
        infoSections: [
          {
            title: 'Detailed information',
            content: 'Core-needle biopsy has almost completely replaced fine-needle biopsy. In this method the needle has a larger diameter and a special tip that allows for tissue collection. It is performed to rule out cancer suspicion or determine its extent.',
          },
          {
            title: 'Examination procedure',
            content: 'Core-needle biopsy is preceded by local anaesthesia with lidocaine. The procedure is minimally invasive and does not require sutures; the needle is inserted through a small 2–3 mm skin incision. After the procedure the patient receives a dressing and is advised to rest for 2–3 days. Complications are virtually absent; at most a bruise may appear at the puncture site.',
          },
        ],
      },
      ua: {
        name: 'Товстоголкова біопсія – пухлина грудей',
        menuLabel: 'Товстоголкова біопсія',
        description: 'У клініці Vitalis ми пропонуємо швидку та надійну діагностику пухлин грудей на основі УЗД на апараті Philips Affinity та можливої товстоголкової біопсії. Рак грудей є найпоширенішим онкологічним захворюванням серед жінок та однією з основних причин смерті від злоякісних пухлин.',
        examinationsLabel: 'У рамках діагностики раку грудей ми виконуємо',
        examinations: ['УЗД грудей', 'Тонко- та товстоголкову біопсію грудей', 'Гістопатологічне дослідження'],
        infoSections: [
          {
            title: 'Детальна інформація',
            content: 'Товстоголкова біопсія майже повністю витіснила тонкоголкову. У цьому методі голка має більший діаметр та спеціальний наконечник для забору тканин. Її виконують, щоб виключити підозру на рак або визначити ступінь його поширення.',
          },
          {
            title: 'Процедура обстеження',
            content: 'Товстоголковій біопсії передує місцеве знеболення лідокаїном. Процедура мінімально інвазивна, не вимагає швів; голка вводиться через невеликий надріз шкіри 2–3 мм. Після процедури пацієнтка отримує пов\'язку та рекомендацію відпочивати 2–3 дні. Ускладнень практично немає; в крайньому випадку може з\'явитися синець.',
          },
        ],
      },
    },
  },
]

export const pricing: PricingCategory[] = [
  {
    id: 1,
    title: 'Poradnie Specjalistyczne',
    sections: [
      {
        subtitle: 'Kardiologia',
        slug: 'kardiologia',
        items: [
          { name: 'Badanie echokardiografii przezklatkowej TTE', price: '150 PLN' },
          { name: 'Badanie echokardiografii przezprzełykowej TEE – Próba dobutaminowa', price: '360 PLN' },
          { name: 'Badanie przepływów dopplerowskich kończyn dolnych', price: '190 PLN' },
          { name: 'Badanie przepływów dopplerowskich tętnic szyjnych', price: '190 PLN' },
          { name: 'Kontrola stymulatora ICD', price: '200 PLN' },
          { name: 'Wykonanie Tilt Testu', price: '200 PLN' },
          { name: 'Test wysiłkowy na bieżni ruchomej', price: '150 PLN' },
          { name: 'EKG z opisem kardiologa poza wizytą u specjalisty', price: '20 PLN' },
          { name: 'Konsultacja kardiologiczna z EKG spoczynkowym – Dr P. Nowak', price: '250 PLN' },
          { name: 'Konsultacja kardiologiczna z EKG spoczynkowym – Dr J. Nowak', price: '300 PLN' },
          { name: 'Konsultacja kardiologiczna z EKG spoczynkowym – Dr A. Żurakowski', price: '300/350 PLN' },
          { name: 'Konsultacja kardiologiczna z EKG spoczynkowym – Dr Chodur', price: '200/250 PLN' },
          { name: 'Konsultacja kardiologiczna z EKG spoczynkowym – Dr M. Bońkowski', price: '250 PLN' },
          { name: 'USG naczyniowe – Dr M. Bońkowski', price: '250 PLN' },
          { name: 'Konsultacja naczyniowa – Dr M. Bońkowski', price: '250 PLN' },
          { name: 'Konsultacja naczyniowa z Dopplerem – Dr M. Bońkowski', price: '350 PLN' },
          { name: 'Konsultacja kardiochirurgiczna', price: '390 PLN' },
          { name: 'Holter EKG 1/2/3/4 doby', price: '150/200/250 PLN' },
          { name: 'Holter RR 1 doba', price: '120 PLN' },
          { name: 'Istel ECG (tydzień)', price: '200 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia neurologiczna',
        slug: 'neurologia',
        items: [
          { name: 'Konsultacja neurologiczna', price: '250 PLN / 220 PLN' },
          { name: 'Wykonanie badania EEG', price: '300 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia neurochirurgiczna',
        slug: 'neurochirurgia',
        items: [
          { name: 'Konsultacja neurochirurgiczna', price: '240 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia psychiatryczna',
        slug: 'psychiatria',
        items: [
          { name: 'Konsultacja psychiatryczna – dr Woźniak', price: '280 PLN' },
          { name: 'Konsultacja psychiatryczna – dr Wajda', price: '280 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia endokrynologiczna',
        slug: 'endokrynologia',
        items: [
          { name: 'Konsultacja endokrynologiczna – dr Szymkowiak', price: '280 PLN' },
          { name: 'Konsultacja endokrynologiczna z USG – dr Szymkowiak', price: '330 PLN' },
          { name: 'Konsultacja endokrynologiczna – dr Pierzchała', price: '220 PLN' },
          { name: 'Konsultacja endokrynologiczna (kontrolna) – dr Pierzchała', price: '180 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia urologiczna',
        slug: 'urologia',
        items: [
          { name: 'Konsultacja urologiczna – dr Sołtys', price: '250 PLN / 200 PLN' },
          { name: 'Konsultacja urologiczna z USG – dr Sołtys', price: '350 PLN / 250 PLN' },
          { name: 'Badanie uroflometria – dr Sołtys', price: '100 PLN' },
          { name: 'USG jąder', price: '180 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia diabetologiczna',
        slug: 'diabetologia',
        items: [
          { name: 'Konsultacja diabetologiczna', price: '270 PLN / 220 PLN' },
          { name: 'Konsultacja dietetyczna', price: '150 PLN' },
        ],
      },
      {
        subtitle: 'Poradnia gastrologiczna',
        slug: 'gastrologia',
        items: [
          { name: 'Konsultacja gastrologiczna – dr Fic', price: '250 PLN' },
          { name: 'Konsultacja gastrologiczna – dr Szulewski', price: '250 PLN' },
        ],
      },
      {
        subtitle: 'Procedury ortopedyczne',
        slug: 'ortopedia',
        items: [
          { name: 'Pierwsza konsultacja ortopedyczna', price: '300 PLN' },
          { name: 'Konsultacja ortopedyczna', price: '200 PLN' },
          { name: 'Viscosuplementacja Cignal', price: '900 PLN' },
          { name: 'Viscosuplementacja Monovisc', price: '750 PLN' },
          { name: 'Viscosuplementacja Ortovisc', price: '280 PLN' },
          { name: 'Iniekcja Ortokol', price: '600 PLN' },
          { name: 'Iniekcja Ortovisc T', price: '300 PLN' },
          { name: 'Biolevox 2,2% 2 ml', price: '280 PLN' },
          { name: 'Biolevox 2,5% 4,8 ml', price: '750 PLN' },
          { name: 'Podanie osocza dostawowo', price: '800 PLN' },
          { name: 'Punkcja / iniekcja', price: '150 PLN' },
          { name: 'Diprofos', price: '150 PLN' },
        ],
      },
      {
        subtitle: 'Procedury ginekologiczne',
        slug: 'ginekologia',
        items: [
          { name: 'Konsultacja ginekologiczna', price: '150 PLN' },
          { name: 'Konsultacja ginekologiczna z USG', price: '240 PLN' },
          { name: 'Wykonanie badania USG ginekologicznego', price: '150 PLN' },
          { name: 'Wykonanie badania USG piersi', price: '200 PLN' },
          { name: 'Wykonanie badania cytologicznego', price: '50 PLN' },
        ],
      },
      {
        subtitle: 'Pracownia Endoskopii',
        slug: 'gastrologia', // endoscopy bookings go through the gastrology page
        items: [
          { name: 'Gastroskopia diagnostyczna', price: '350 PLN' },
          { name: 'Gastroskopia diagnostyczna + test na HP', price: '370 PLN' },
          { name: 'Gastroskopia diagnostyczna + badanie 1 zmiany hist-pat', price: '430 PLN' },
          { name: 'Badanie kolejne zmiany hist-pat', price: '70 PLN' },
          { name: 'Gastroskopia diagnostyczna + badanie 1 zmiany hist-pat + test na HP', price: '450 PLN' },
          { name: 'Kolonoskopia diagnostyczna', price: '600 PLN' },
          { name: 'Kolonoskopia diagnostyczna + badanie 1 zmiany hist-pat', price: '690 PLN' },
          { name: 'Badanie kolejne zmiany hist-pat (kolonoskopia)', price: '70 PLN' },
          { name: 'Kolonoskopia diagnostyczna z polipektomią (1 polip) + badanie 1 zmiany hist-pat', price: '840 PLN' },
          { name: 'Każdy kolejny polip z badaniem hist-pat', price: '110 PLN' },
          { name: 'Badanie histochemiczne', price: '110 PLN' },
          { name: 'Znieczulenie ogólne', price: '350 PLN' },
          { name: 'Znieczulenie ogólne (gastroskopia + kolonoskopia jednocześnie)', price: '450 PLN' },
        ],
      },
      {
        subtitle: 'USG',
        slug: 'diagnostyka-usg',
        items: [
          { name: 'USG tarczycy, przytarczyc', price: '170 PLN' },
          { name: 'USG jamy brzusznej, przestrzeni zaotrzewnowej i miednicy mniejszej', price: '190 PLN' },
          { name: 'USG tkanki miękkie', price: '170 PLN' },
          { name: 'USG przepływów dopplerowskich jamy brzusznej', price: '190 PLN' },
          { name: 'USG Ślinianek', price: '170 PLN' },
          { name: 'USG węzłów chłonnych szyi / guzków pachowych', price: '170 PLN' },
          { name: 'USG układu moczowego', price: '180 PLN' },
          { name: 'USG szyji', price: '190 PLN' },
          { name: 'USG piersi', price: '200 PLN' },
          { name: 'USG jąder', price: '180 PLN' },
        ],
      },
      {
        subtitle: 'Pozostałe badania',
        items: [
          { name: 'Wykonanie badania spirometrii', price: '50 PLN' },
          { name: 'Szybka wizyta / recepta', price: '60 PLN' },
        ],
      },
    ],
    translations: {
      en: {
        title: 'Specialist Outpatient Clinics',
        sections: [
          {
            subtitle: 'Cardiology',
            items: [
              { name: 'Transthoracic echocardiography (TTE)' },
              { name: 'Transoesophageal echocardiography (TEE) – Dobutamine stress test' },
              { name: 'Doppler flow study of lower limbs' },
              { name: 'Doppler flow study of carotid arteries' },
              { name: 'ICD pacemaker check' },
              { name: 'Tilt Test' },
              { name: 'Exercise stress test (treadmill)' },
              { name: 'ECG with cardiologist report (outside specialist visit)' },
              { name: 'Cardiology consultation with resting ECG – Dr P. Nowak' },
              { name: 'Cardiology consultation with resting ECG – Dr J. Nowak' },
              { name: 'Cardiology consultation with resting ECG – Dr A. Żurakowski' },
              { name: 'Cardiology consultation with resting ECG – Dr Chodur' },
              { name: 'Cardiology consultation with resting ECG – Dr M. Bońkowski' },
              { name: 'Vascular ultrasound – Dr M. Bońkowski' },
              { name: 'Vascular consultation – Dr M. Bońkowski' },
              { name: 'Vascular consultation with Doppler – Dr M. Bońkowski' },
              { name: 'Cardiac surgery consultation' },
              { name: 'Holter ECG 1/2/3/4 days' },
              { name: 'Holter BP 1 day' },
              { name: 'Istel ECG (1 week)' },
            ],
          },
          {
            subtitle: 'Neurology clinic',
            items: [
              { name: 'Neurology consultation' },
              { name: 'EEG examination' },
            ],
          },
          {
            subtitle: 'Neurosurgery clinic',
            items: [
              { name: 'Neurosurgery consultation' },
            ],
          },
          {
            subtitle: 'Psychiatry clinic',
            items: [
              { name: 'Psychiatric consultation – dr Woźniak' },
              { name: 'Psychiatric consultation – dr Wajda' },
            ],
          },
          {
            subtitle: 'Endocrinology clinic',
            items: [
              { name: 'Endocrinology consultation – dr Szymkowiak' },
              { name: 'Endocrinology consultation with ultrasound – dr Szymkowiak' },
              { name: 'Endocrinology consultation – dr Pierzchała' },
              { name: 'Endocrinology follow-up consultation – dr Pierzchała' },
            ],
          },
          {
            subtitle: 'Urology clinic',
            items: [
              { name: 'Urology consultation – dr Sołtys' },
              { name: 'Urology consultation with ultrasound – dr Sołtys' },
              { name: 'Uroflowmetry – dr Sołtys' },
              { name: 'Testicular ultrasound' },
            ],
          },
          {
            subtitle: 'Diabetology clinic',
            items: [
              { name: 'Diabetology consultation' },
              { name: 'Dietitian consultation' },
            ],
          },
          {
            subtitle: 'Gastrology clinic',
            items: [
              { name: 'Gastrology consultation – dr Fic' },
              { name: 'Gastrology consultation – dr Szulewski' },
            ],
          },
          {
            subtitle: 'Orthopaedic procedures',
            items: [
              { name: 'First orthopaedic consultation' },
              { name: 'Orthopaedic consultation' },
              { name: 'Viscosupplementation Cignal' },
              { name: 'Viscosupplementation Monovisc' },
              { name: 'Viscosupplementation Ortovisc' },
              { name: 'Ortokol injection' },
              { name: 'Ortovisc T injection' },
              { name: 'Biolevox 2.2% 2 ml' },
              { name: 'Biolevox 2.5% 4.8 ml' },
              { name: 'Intra-articular plasma injection' },
              { name: 'Puncture / injection' },
              { name: 'Diprofos' },
            ],
          },
          {
            subtitle: 'Gynaecological procedures',
            items: [
              { name: 'Gynaecological consultation' },
              { name: 'Gynaecological consultation with ultrasound' },
              { name: 'Gynaecological ultrasound examination' },
              { name: 'Breast ultrasound examination' },
              { name: 'Cytological examination (Pap smear)' },
            ],
          },
          {
            subtitle: 'Endoscopy unit',
            items: [
              { name: 'Diagnostic gastroscopy' },
              { name: 'Diagnostic gastroscopy + H. pylori test' },
              { name: 'Diagnostic gastroscopy + 1 histopathological examination' },
              { name: 'Additional histopathological examination' },
              { name: 'Diagnostic gastroscopy + 1 histopathological examination + H. pylori test' },
              { name: 'Diagnostic colonoscopy' },
              { name: 'Diagnostic colonoscopy + 1 histopathological examination' },
              { name: 'Additional histopathological examination (colonoscopy)' },
              { name: 'Diagnostic colonoscopy with polypectomy (1 polyp) + 1 histopathological examination' },
              { name: 'Each additional polyp with histopathological examination' },
              { name: 'Histochemical examination' },
              { name: 'General anaesthesia' },
              { name: 'General anaesthesia (gastroscopy + colonoscopy combined)' },
            ],
          },
          {
            subtitle: 'Ultrasound (USG)',
            items: [
              { name: 'Thyroid and parathyroid ultrasound' },
              { name: 'Abdominal, retroperitoneal and pelvic ultrasound' },
              { name: 'Soft tissue ultrasound' },
              { name: 'Abdominal Doppler flow ultrasound' },
              { name: 'Salivary gland ultrasound' },
              { name: 'Cervical lymph nodes / axillary nodes ultrasound' },
              { name: 'Urinary tract ultrasound' },
              { name: 'Neck ultrasound' },
              { name: 'Breast ultrasound' },
              { name: 'Testicular ultrasound' },
            ],
          },
          {
            subtitle: 'Other examinations',
            items: [
              { name: 'Spirometry examination' },
              { name: 'Quick visit / prescription' },
            ],
          },
        ],
      },
      ua: {
        title: 'Спеціалізовані амбулаторні клініки',
        sections: [
          {
            subtitle: 'Кардіологія',
            items: [
              { name: 'Черезгрудна ехокардіографія (TTE)' },
              { name: 'Черезстравохідна ехокардіографія (TEE) – Добутаміновий стрес-тест' },
              { name: 'Допплерографія судин нижніх кінцівок' },
              { name: 'Допплерографія сонних артерій' },
              { name: 'Перевірка кардіостимулятора ICD' },
              { name: 'Тілт-тест' },
              { name: 'Навантажувальний тест (бігова доріжка)' },
              { name: 'ЕКГ з описом кардіолога (поза консультацією спеціаліста)' },
              { name: 'Кардіологічна консультація з ЕКГ спокою – Dr P. Nowak' },
              { name: 'Кардіологічна консультація з ЕКГ спокою – Dr J. Nowak' },
              { name: 'Кардіологічна консультація з ЕКГ спокою – Dr A. Żurakowski' },
              { name: 'Кардіологічна консультація з ЕКГ спокою – Dr Chodur' },
              { name: 'Кардіологічна консультація з ЕКГ спокою – Dr M. Bońkowski' },
              { name: 'Судинне УЗД – Dr M. Bońkowski' },
              { name: 'Судинна консультація – Dr M. Bońkowski' },
              { name: 'Судинна консультація з допплером – Dr M. Bońkowski' },
              { name: 'Кардіохірургічна консультація' },
              { name: 'Холтер ЕКГ 1/2/3/4 доби' },
              { name: 'Холтер АТ 1 доба' },
              { name: 'Istel ЕКГ (тиждень)' },
            ],
          },
          {
            subtitle: 'Неврологічна поліклініка',
            items: [
              { name: 'Неврологічна консультація' },
              { name: 'Дослідження ЕЕГ' },
            ],
          },
          {
            subtitle: 'Нейрохірургічна поліклініка',
            items: [
              { name: 'Нейрохірургічна консультація' },
            ],
          },
          {
            subtitle: 'Психіатрична поліклініка',
            items: [
              { name: 'Психіатрична консультація – dr Woźniak' },
              { name: 'Психіатрична консультація – dr Wajda' },
            ],
          },
          {
            subtitle: 'Ендокринологічна поліклініка',
            items: [
              { name: 'Ендокринологічна консультація – dr Szymkowiak' },
              { name: 'Ендокринологічна консультація з УЗД – dr Szymkowiak' },
              { name: 'Ендокринологічна консультація – dr Pierzchała' },
              { name: 'Контрольна ендокринологічна консультація – dr Pierzchała' },
            ],
          },
          {
            subtitle: 'Урологічна поліклініка',
            items: [
              { name: 'Урологічна консультація – dr Sołtys' },
              { name: 'Урологічна консультація з УЗД – dr Sołtys' },
              { name: 'Урофлоуметрія – dr Sołtys' },
              { name: 'УЗД яєчок' },
            ],
          },
          {
            subtitle: 'Діабетологічна поліклініка',
            items: [
              { name: 'Діабетологічна консультація' },
              { name: 'Дієтологічна консультація' },
            ],
          },
          {
            subtitle: 'Гастроентерологічна поліклініка',
            items: [
              { name: 'Гастроентерологічна консультація – dr Fic' },
              { name: 'Гастроентерологічна консультація – dr Szulewski' },
            ],
          },
          {
            subtitle: 'Ортопедичні процедури',
            items: [
              { name: 'Перша ортопедична консультація' },
              { name: 'Ортопедична консультація' },
              { name: 'Вискосаплементація Cignal' },
              { name: 'Вискосаплементація Monovisc' },
              { name: 'Вискосаплементація Ortovisc' },
              { name: 'Ін\'єкція Ortokol' },
              { name: 'Ін\'єкція Ortovisc T' },
              { name: 'Biolevox 2,2% 2 мл' },
              { name: 'Biolevox 2,5% 4,8 мл' },
              { name: 'Внутрішньосуглобове введення плазми' },
              { name: 'Пункція / ін\'єкція' },
              { name: 'Diprofos' },
            ],
          },
          {
            subtitle: 'Гінекологічні процедури',
            items: [
              { name: 'Гінекологічна консультація' },
              { name: 'Гінекологічна консультація з УЗД' },
              { name: 'Гінекологічне УЗД дослідження' },
              { name: 'УЗД молочної залози' },
              { name: 'Цитологічне дослідження (мазок Папаніколау)' },
            ],
          },
          {
            subtitle: 'Відділення ендоскопії',
            items: [
              { name: 'Діагностична гастроскопія' },
              { name: 'Діагностична гастроскопія + тест на H. pylori' },
              { name: 'Діагностична гастроскопія + 1 гістопатологічне дослідження' },
              { name: 'Додаткове гістопатологічне дослідження' },
              { name: 'Діагностична гастроскопія + 1 гістопатологічне дослідження + тест на H. pylori' },
              { name: 'Діагностична колоноскопія' },
              { name: 'Діагностична колоноскопія + 1 гістопатологічне дослідження' },
              { name: 'Додаткове гістопатологічне дослідження (колоноскопія)' },
              { name: 'Діагностична колоноскопія з поліпектомією (1 поліп) + 1 гістопатологічне дослідження' },
              { name: 'Кожен наступний поліп з гістопатологічним дослідженням' },
              { name: 'Гістохімічне дослідження' },
              { name: 'Загальна анестезія' },
              { name: 'Загальна анестезія (гастроскопія + колоноскопія одночасно)' },
            ],
          },
          {
            subtitle: 'УЗД',
            items: [
              { name: 'УЗД щитоподібної та прищитоподібної залоз' },
              { name: 'УЗД черевної порожнини, заочеревинного простору та малого тазу' },
              { name: 'УЗД м\'яких тканин' },
              { name: 'Допплерографія судин черевної порожнини' },
              { name: 'УЗД слинних залоз' },
              { name: 'УЗД лімфатичних вузлів шиї / пахвових вузлів' },
              { name: 'УЗД сечовивідної системи' },
              { name: 'УЗД шиї' },
              { name: 'УЗД молочної залози' },
              { name: 'УЗД яєчок' },
            ],
          },
          {
            subtitle: 'Інші дослідження',
            items: [
              { name: 'Дослідження спірометрії' },
              { name: 'Швидкий візит / рецепт' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 2,
    title: 'Rehabilitacja',
    sections: [
      {
        subtitle: 'Pojedyncza wizyta',
        slug: 'rehabilitacja',
        items: [
          { name: 'Konsultacja (pierwszorazowa) diagnostyczno-terapeutyczna', price: '100 PLN / 90 min' },
          { name: 'Konsultacja (pierwszorazowa) diagnostyczna', price: '85 PLN / 45 min' },
          { name: 'Wizyta fizjoterapeutyczna standardowa', price: '80 PLN / 60 min' },
          { name: 'Wizyta fizjoterapeutyczna indywidualna', price: '60 PLN / 40 min' },
          { name: 'Trening funkcjonalny', price: '40 PLN / 60 min' },
        ],
      },
      {
        subtitle: 'Pakiet wizyt',
        slug: 'rehabilitacja',
        items: [
          { name: 'Program profilaktyki i promocji zdrowia dla osób po 65 roku życia', price: '120 PLN / 10 × 40 min' },
          { name: 'Pakiet mały standardowych wizyt fizjoterapeutycznych', price: '350 PLN / 5 × 60 min' },
          { name: 'Pakiet duży standardowych wizyt fizjoterapeutycznych', price: '600 PLN / 10 × 60 min' },
          { name: 'Pakiet mały treningu funkcjonalnego', price: '175 PLN / 5 × 60 min' },
          { name: 'Pakiet duży treningu funkcjonalnego', price: '300 PLN / 10 × 60 min' },
        ],
      },
    ],
    translations: {
      en: {
        title: 'Rehabilitation',
        sections: [
          {
            subtitle: 'Single visit',
            items: [
              { name: 'First diagnostic-therapeutic consultation' },
              { name: 'First diagnostic consultation' },
              { name: 'Standard physiotherapy visit' },
              { name: 'Individual physiotherapy visit' },
              { name: 'Functional training' },
            ],
          },
          {
            subtitle: 'Visit package',
            items: [
              { name: 'Health prevention and promotion programme for people aged 65+' },
              { name: 'Small package of standard physiotherapy visits' },
              { name: 'Large package of standard physiotherapy visits' },
              { name: 'Small functional training package' },
              { name: 'Large functional training package' },
            ],
          },
        ],
      },
      ua: {
        title: 'Реабілітація',
        sections: [
          {
            subtitle: 'Одиночний візит',
            items: [
              { name: 'Перша діагностично-терапевтична консультація' },
              { name: 'Перша діагностична консультація' },
              { name: 'Стандартний фізіотерапевтичний візит' },
              { name: 'Індивідуальний фізіотерапевтичний візит' },
              { name: 'Функціональне тренування' },
            ],
          },
          {
            subtitle: 'Пакет візитів',
            items: [
              { name: 'Програма профілактики та зміцнення здоров\'я для осіб від 65 років' },
              { name: 'Малий пакет стандартних фізіотерапевтичних візитів' },
              { name: 'Великий пакет стандартних фізіотерапевтичних візитів' },
              { name: 'Малий пакет функціонального тренування' },
              { name: 'Великий пакет функціонального тренування' },
            ],
          },
        ],
      },
    },
  },
  {
    id: 3,
    title: 'Medycyna Estetyczna',
    sections: [
      {
        subtitle: 'Korekcja zmarszczek',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Lwia zmarszczka', price: '300 PLN' },
          { name: 'Zmarszczki poprzeczne czoła', price: '300 PLN' },
          { name: '„Kurze łapki"', price: '260 PLN' },
          { name: 'Lifting Nefretete', price: '360 PLN' },
        ],
      },
      {
        subtitle: 'Leczenie nadpotliwości',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Pachy', price: '1050 PLN' },
          { name: 'Dłonie', price: '1200 PLN' },
        ],
      },
      {
        subtitle: 'Wypełnianie zmarszczek',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Bruzda nosowo-wargowa', price: '600 PLN' },
          { name: 'Modelowanie ust', price: '600 PLN' },
          { name: 'Dolina łez', price: '600 PLN' },
          { name: 'Wolumetria policzków', price: '1200 PLN' },
          { name: 'Wolumetria – doły skroniowe', price: '600 PLN' },
          { name: 'Wolumetria dłoni', price: '900 PLN' },
        ],
      },
      {
        subtitle: 'Bezoperacyjny lifting',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Lifting dolnej części twarzy', price: '1100 PLN' },
          { name: 'Lifting szyi', price: '1100 PLN' },
        ],
      },
      {
        subtitle: 'Mezoterapia igłowa',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Twarz', price: '450 PLN' },
          { name: 'Skalp', price: '350 PLN' },
        ],
      },
      {
        subtitle: 'Lipoliza iniekcyjna',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Podbródek', price: '260 PLN' },
          { name: 'Kolano strona wewnętrzna', price: '400 PLN' },
          { name: 'Brzuch', price: '600 PLN' },
          { name: 'Lędźwie', price: '600 PLN' },
        ],
      },
      {
        subtitle: 'Nici liftingujące',
        slug: 'medycyna-estetyczna',
        items: [
          { name: 'Screw', price: '350–400 PLN' },
          { name: 'Barbe', price: '970 PLN' },
        ],
      },
    ],
    translations: {
      en: {
        title: 'Aesthetic Medicine',
        sections: [
          {
            subtitle: 'Wrinkle correction',
            items: [
              { name: 'Glabellar lines (lion\'s wrinkle)' },
              { name: 'Forehead horizontal lines' },
              { name: 'Crow\'s feet' },
              { name: 'Nefertiti lift' },
            ],
          },
          {
            subtitle: 'Hyperhidrosis treatment',
            items: [
              { name: 'Armpits' },
              { name: 'Hands' },
            ],
          },
          {
            subtitle: 'Wrinkle filling',
            items: [
              { name: 'Nasolabial folds' },
              { name: 'Lip augmentation' },
              { name: 'Tear trough' },
              { name: 'Cheek volumetry' },
              { name: 'Volumetry – temporal hollows' },
              { name: 'Hand volumetry' },
            ],
          },
          {
            subtitle: 'Non-surgical lift',
            items: [
              { name: 'Lower face lift' },
              { name: 'Neck lift' },
            ],
          },
          {
            subtitle: 'Needle mesotherapy',
            items: [
              { name: 'Face' },
              { name: 'Scalp' },
            ],
          },
          {
            subtitle: 'Injection lipolysis',
            items: [
              { name: 'Chin' },
              { name: 'Inner knee' },
              { name: 'Abdomen' },
              { name: 'Waist / flanks' },
            ],
          },
          {
            subtitle: 'Lifting threads',
            items: [
              { name: 'Screw' },
              { name: 'Barb' },
            ],
          },
        ],
      },
      ua: {
        title: 'Естетична медицина',
        sections: [
          {
            subtitle: 'Корекція зморшок',
            items: [
              { name: 'Зморшки між бровами (лев\'яча зморшка)' },
              { name: 'Поперечні зморшки чола' },
              { name: '"Гусячі лапки"' },
              { name: 'Ліфтинг Нефертіті' },
            ],
          },
          {
            subtitle: 'Лікування гіпергідрозу',
            items: [
              { name: 'Пахви' },
              { name: 'Долоні' },
            ],
          },
          {
            subtitle: 'Заповнення зморшок',
            items: [
              { name: 'Носогубні складки' },
              { name: 'Моделювання губ' },
              { name: 'Долина сліз' },
              { name: 'Волюметрія щік' },
              { name: 'Волюметрія – скроневі западини' },
              { name: 'Волюметрія рук' },
            ],
          },
          {
            subtitle: 'Безопераційний ліфтинг',
            items: [
              { name: 'Ліфтинг нижньої частини обличчя' },
              { name: 'Ліфтинг шиї' },
            ],
          },
          {
            subtitle: 'Голкова мезотерапія',
            items: [
              { name: 'Обличчя' },
              { name: 'Шкіра голови' },
            ],
          },
          {
            subtitle: 'Ін\'єкційний ліполіз',
            items: [
              { name: 'Підборіддя' },
              { name: 'Внутрішня сторона коліна' },
              { name: 'Живіт' },
              { name: 'Поперек' },
            ],
          },
          {
            subtitle: 'Ліфтингові нитки',
            items: [
              { name: 'Screw' },
              { name: 'Barbe' },
            ],
          },
        ],
      },
    },
  },
]

export const specialists: Specialist[] = [
  {
    id: 1,
    slug: 'aleksander-zurakowski',
    titlePrefix: 'prof. nadzw. dr hab. n. med.',
    name: 'Aleksander Żurakowski',
    role: 'Specjalista chorób wewnętrznych - kardiolog',
    specializationSlug: 'kardiologia',
    photo: imgAleksanderZurakowski,
    bio: 'Profesor nadzwyczajny i specjalista chorób wewnętrznych z tytułem doktora habilitowanego nauk medycznych. Współzałożyciel Poradni Vitalis w 2014 roku. Posiada wieloletnie doświadczenie w kardiologii klinicznej i diagnostycznej.',
    isFounder: true,
    translations: {
      en: {
        role: 'Internal medicine specialist – cardiologist',
        bio: 'Associate professor and internal medicine specialist with a postdoctoral degree in medical sciences. Co-founder of the Vitalis Clinic in 2014. Has many years of experience in clinical and diagnostic cardiology.',
      },
      ua: {
        role: 'Спеціаліст внутрішніх хвороб – кардіолог',
        bio: 'Доцент і спеціаліст з внутрішніх хвороб зі ступенем доктора медичних наук. Співзасновник клініки Vitalis у 2014 році. Має багаторічний досвід у клінічній та діагностичній кардіології.',
      },
    },
  },
  {
    id: 2,
    slug: 'jacek-nowak',
    titlePrefix: 'dr n. med.',
    name: 'Jacek Nowak',
    role: 'Specjalista chorób wewnętrznych - kardiolog',
    specializationSlug: 'kardiologia',
    photo: imgJacekNowak,
    bio: 'Doktor nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Współzałożyciel Poradni Vitalis. Specjalizuje się w diagnostyce i leczeniu arytmii oraz niewydolności serca.',
    isFounder: true,
    translations: {
      en: {
        role: 'Internal medicine specialist – cardiologist',
        bio: 'Doctor of medical sciences, specialist in internal medicine and cardiology. Co-founder of the Vitalis Clinic. Specialises in the diagnosis and treatment of arrhythmias and heart failure.',
      },
      ua: {
        role: 'Спеціаліст внутрішніх хвороб – кардіолог',
        bio: 'Доктор медичних наук, спеціаліст з внутрішніх хвороб та кардіології. Співзасновник клініки Vitalis. Спеціалізується на діагностиці та лікуванні аритмій та серцевої недостатності.',
      },
    },
  },
  {
    id: 3,
    slug: 'maciej-chodur',
    titlePrefix: 'lek.',
    name: 'Maciej Chodur',
    role: 'Kardiolog',
    specializationSlug: 'kardiologia',
    photo: imgAvatarMan,
    bio: '',
    translations: {
      en: { role: 'Cardiologist' },
      ua: { role: 'Кардіолог' },
    },
  },
  {
    id: 4,
    slug: 'michal-bonkowski',
    titlePrefix: 'lek. med.',
    name: 'Michał Bońkowski',
    role: 'Kardiolog, specjalista chirurgii naczyniowej',
    specializationSlug: 'kardiologia',
    photo: imgAvatarMan,
    bio: 'Doświadczony lekarz z wieloletnią praktyką od 2011 roku. Specjalizuje się w diagnostyce i leczeniu chorób układu sercowo-naczyniowego, w tym choroby wieńcowej, nadciśnienia, niewydolności serca, arytmii oraz stanów po zawale serca.',
    translations: {
      en: {
        role: 'Cardiologist',
        bio: 'Experienced physician practising since 2011. Specialises in the diagnosis and treatment of cardiovascular diseases, including coronary artery disease, hypertension, heart failure, arrhythmia and post-myocardial infarction care.',
    } ,
      ua: {
        role: 'Кардіолог',
        bio: 'Досвідчений лікар, що практикує з 2011 року. Спеціалізується на діагностиці та лікуванні серцево-судинних захворювань, зокрема ішемічної хвороби серця, гіпертонії, серцевої недостатності та аритмії.',
    },
  },
  },
  {
    id: 5,
    slug: 'piotr-nowak',
    titlePrefix: 'lek. med.',
    name: 'Piotr Nowak',
    role: 'Kardiolog',
    specializationSlug: 'kardiologia',
    photo: imgAvatarMan,
    bio: '',
    translations: {
      en: { role: 'Cardiologist' },
      ua: { role: 'Кардіолог' },
    },
  },
  {
    id: 6,
    slug: 'katarzyna-michalak',
    titlePrefix: 'lek. med.',
    name: 'Katarzyna Michalak',
    role: 'Kardiolog dziecięcy',
    specializationSlug: 'kardiologia-dziecieca',
    photo: imgAvatarWoman,
    bio: 'Specjalistka pediatrii i kardiologii dziecięcej, absolwentka Śląskiej Akademii Medycznej w Katowicach. Zajmuje się diagnostyką i leczeniem wad wrodzonych serca, zaburzeń rytmu serca, nadciśnienia tętniczego oraz chorób układu krążenia u dzieci.',
  translations: {
    en: {
      role: 'Paediatrician – paediatric cardiologist',
      bio: 'Specialist in paediatrics and paediatric cardiology, graduate of the Silesian Medical Academy in Katowice. Focuses on congenital heart defects, arrhythmias, arterial hypertension and cardiovascular diseases in children.',
    },
    ua: {
      role: 'Педіатр – дитячий кардіолог',
      bio: 'Спеціалістка з педіатрії та дитячої кардіології, випускниця Сілезької медичної академії в Катовіцах. Займається діагностикою та лікуванням вроджених вад серця, аритмій, артеріальної гіпертензії та хвороб серцево-судинної системи у дітей.',
    },
  },
  },
  {
    id: 7,
    slug: 'janusz-gajda',
    titlePrefix: 'lek.',
    name: 'Janusz Gajda',
    role: 'Ginekolog, położnik',
    specializationSlug: 'ginekologia',
    photo: imgAvatarMan,
    bio: 'Doświadczony ginekolog z praktyką lekarską od 1999 roku. Specjalizuje się w diagnostyce i leczeniu endometriozy, niepłodności, zaburzeń miesiączkowania, prowadzeniu ciąży oraz wykonywaniu badań ginekologicznych.',
  translations: {
    en: {
      role: 'Gynaecologist',
      bio: 'Experienced gynaecologist with a medical practice dating back to 1999. Specialises in endometriosis, infertility, menstrual disorders, pregnancy care and gynaecological examinations.',
    },
    ua: {
      role: 'Гінеколог',
      bio: 'Досвідчений гінеколог, що практикує з 1999 року. Спеціалізується на діагностиці та лікуванні ендометріозу, безпліддя, порушень менструального циклу, ведення вагітності та гінекологічних обстежень.',
    },
  },
  },
  {
    id: 8,
    slug: 'jaroslaw-bigaj',
    titlePrefix: 'lek. med.',
    name: 'Jarosław Bigaj',
    role: 'Gastrolog',
    specializationSlug: 'gastrologia',
    photo: imgJaroslawBigaj,
    bio: 'Doświadczony lekarz z praktyką od 2012 roku. Zajmuje się diagnostyką i leczeniem schorzeń chirurgicznych, w tym kamicy żółciowej, przepukliny pachwinowej, żylaków kończyn dolnych, guzków tarczycy, zapalenia wyrostka robaczkowego oraz torbieli skóry.',
  translations: {
    en: {
      role: 'General surgeon',
      bio: 'Experienced physician practising since 2012. Specialises in surgical conditions including gallstones, inguinal hernia, varicose veins, thyroid nodules, appendicitis and skin cysts.',
    },
    ua: {
      role: 'Загальний хірург',
      bio: 'Досвідчений лікар, що практикує з 2012 року. Займається діагностикою та лікуванням хірургічних захворювань: жовчнокам\'яної хвороби, пахової грижі, варикозного розширення вен, вузлів щитоподібної залози, апендициту та кіст шкіри.',
    },
  },
  },
  {
    id: 9,
    slug: 'pawel-szulewski',
    titlePrefix: 'dr n. med.',
    name: 'Paweł Szulewski',
    role: 'Gastrolog',
    specializationSlug: 'gastrologia',
    photo: imgAvatarMan,
    bio: 'Gastrolog z pasją oddany medycynie od 2001 roku. Specjalizuje się w diagnostyce i leczeniu chorób przewodu pokarmowego, w tym celiakii, choroby Leśniowskiego-Crohna, marskości wątroby, wrzodziejącego zapalenia jelita grubego, zespołu jelita drażliwego, wrzodów żołądka oraz refluksu.',
  translations: {
    en: {
      role: 'Gastrologist',
      bio: 'Gastrologist devoted to medicine since 2001. Specialises in coeliac disease, Crohn\'s disease, liver cirrhosis, ulcerative colitis, irritable bowel syndrome, peptic ulcers and gastro-oesophageal reflux disease.',
    },
    ua: {
      role: 'Гастроентеролог',
      bio: 'Гастроентеролог, відданий медицині з 2001 року. Спеціалізується на діагностиці та лікуванні целіакії, хвороби Крона, цирозу печінки, виразкового коліту, синдрому подразненого кишківника, виразки шлунка та гастроезофагеального рефлюксу.',
    },
  },
  },
  {
    id: 10,
    slug: 'edward-surma',
    titlePrefix: 'lek. med.',
    name: 'Edward Surma',
    role: 'Gastrolog',
    specializationSlug: 'gastrologia',
    photo: imgAvatarMan,
    bio: 'Gastrolog zajmujący się poradnictwem i leczeniem chorób przewodu pokarmowego. Konsultuje pacjentów z czynnościowymi chorobami przewodu pokarmowego, nieswoistymi chorobami zapalnymi jelit oraz chorobą refluksową.',
  translations: {
    en: {
      role: 'Gastrologist',
      bio: 'Gastrologist specialising in counselling and treatment of gastrointestinal diseases. Consults patients with functional gastrointestinal disorders, inflammatory bowel diseases and reflux disease.',
    },
    ua: {
      role: 'Гастроентеролог',
      bio: 'Гастроентеролог, що спеціалізується на консультуванні та лікуванні захворювань шлунково-кишкового тракту. Консультує пацієнтів із функціональними розладами ШКТ, запальними захворюваннями кишківника та рефлюксною хворобою.',
    },
  },
  },
  {
    id: 11,
    slug: 'pawel-tyrawski',
    titlePrefix: 'lek. med.',
    name: 'Paweł Tyrawski',
    role: 'Gastrolog',
    specializationSlug: 'gastrologia',
    photo: imgAvatarMan,
    bio: 'Specjalista chirurgii ogólnej II stopnia z praktyką od 2006 roku. Zajmuje się diagnostyką i leczeniem schorzeń chirurgicznych: kamicy żółciowej, przepukliny pachwinowej, żylaków kończyn dolnych, guzków tarczycy, zapalenia wyrostka robaczkowego oraz torbieli skóry.',
  translations: {
    en: {
      role: 'General surgeon',
      bio: 'Second-degree specialist in general surgery, practising since 2006. Treats surgical conditions including gallstones, inguinal hernia, varicose veins, thyroid nodules, appendicitis and skin cysts.',
    },
    ua: {
      role: 'Загальний хірург',
      bio: 'Спеціаліст загальної хірургії другого ступеня, що практикує з 2006 року. Займається лікуванням жовчнокам\'яної хвороби, пахової грижі, варикозного розширення вен, вузлів щитоподібної залози, апендициту та кіст шкіри.',
    },
  },
  },
  {
    id: 12,
    slug: 'krystyna-fic',
    titlePrefix: 'lek. med.',
    name: 'Krystyna Fic',
    role: 'Gastrolog',
    specializationSlug: 'gastrologia',
    photo: imgKrystynaFic,
    bio: 'Gastrolog z wieloletnim doświadczeniem, wspierająca pacjentów od 2007 roku. Zajmuje się diagnostyką i leczeniem celiakii, choroby Leśniowskiego-Crohna, marskości wątroby, wrzodziejącego zapalenia jelita grubego, zespołu jelita drażliwego, wrzodów żołądka oraz refluksu.',
  translations: {
    en: {
      role: 'Gastrologist',
      bio: 'Gastrologist with extensive experience, supporting patients since 2007. Specialises in coeliac disease, Crohn\'s disease, liver cirrhosis, ulcerative colitis, irritable bowel syndrome, peptic ulcers and reflux disease.',
    },
    ua: {
      role: 'Гастроентеролог',
      bio: 'Гастроентеролог із багаторічним досвідом, що підтримує пацієнтів з 2007 року. Спеціалізується на целіакії, хворобі Крона, цирозі печінки, виразковому коліті, синдромі подразненого кишківника, виразці шлунка та рефлюксній хворобі.',
    },
  },
  },
  {
    id: 13,
    slug: 'jacek-szymkowiak',
    titlePrefix: 'dr n. med.',
    name: 'Jacek Szymkowiak',
    role: 'Endokrynolog',
    specializationSlug: 'endokrynologia',
    photo: imgAvatarMan,
    bio: 'Specjalista II stopnia chorób wewnętrznych oraz endokrynologii. Zapewnia kompleksową opiekę internistyczną i hormonalną, opierając leczenie na indywidualnym podejściu i wieloletnim doświadczeniu, zarejestrowanym od 2014 roku.',
  translations: {
    en: {
      role: 'Internist – endocrinologist',
      bio: 'Second-degree specialist in internal medicine and endocrinology. Provides comprehensive internistic and hormonal care, combining individual approach with extensive clinical experience since 2014.',
    },
    ua: {
      role: 'Терапевт – ендокринолог',
      bio: 'Спеціаліст другого ступеня з внутрішніх хвороб та ендокринології. Забезпечує комплексну терапевтичну та гормональну допомогу, поєднуючи індивідуальний підхід із багаторічним клінічним досвідом з 2014 року.',
    },
  },
  },
  {
    id: 14,
    slug: 'sylwia-pierzchala',
    titlePrefix: 'lek. med.',
    name: 'Sylwia Pierzchała',
    role: 'Endokrynolog',
    specializationSlug: 'endokrynologia',
    photo: imgAvatarWoman,
    bio: 'Lekarz w trakcie szkolenia specjalizacyjnego z endokrynologii w Uniwersyteckim Centrum Klinicznym w Katowicach. Członkini Polskiego Towarzystwa Endokrynologicznego, posiadaczka certyfikatu ultrasonografii tarczycy. W pracy stawia na partnerską relację i wspólne podejmowanie decyzji diagnostyczno-terapeutycznych.',
  translations: {
    en: {
      role: 'Endocrinologist (specialist in training)',
      bio: 'Physician in endocrinology specialist training at the University Clinical Centre in Katowice. Member of the Polish Society of Endocrinology, certified in thyroid ultrasonography. Committed to a partnership approach and shared decision-making with patients.',
    },
    ua: {
      role: 'Ендокринолог (лікар-резидент)',
      bio: 'Лікар на спеціалізаційному навчанні з ендокринології в Університетському клінічному центрі в Катовіцах. Членкиня Польського товариства ендокринологів, сертифікована з ультразвукової діагностики щитоподібної залози. Прихильниця партнерських відносин із пацієнтом та спільного прийняття терапевтичних рішень.',
    },
  },
  },
  {
    id: 15,
    slug: 'jacek-pajak',
    titlePrefix: 'dr n. med.',
    name: 'Jacek Pająk',
    role: 'Endokrynolog, biopsje tarczycy',
    specializationSlug: 'endokrynologia',
    photo: imgAvatarMan,
    bio: 'Specjalista II stopnia w dziedzinie patomorfologii z praktyką od 2000 roku. Wykonuje konsultacje endokrynologiczne oraz biopsje tarczycy, zapewniając pacjentom precyzyjną diagnostykę i profesjonalne wsparcie na dalszych etapach leczenia.',
  translations: {
    en: {
      role: 'Endocrinologist – thyroid biopsy specialist',
      bio: 'Second-degree specialist in pathomorphology, practising since 2000. Performs endocrinological consultations and thyroid biopsies, providing patients with precise diagnostics and professional guidance throughout their treatment.',
    },
    ua: {
      role: 'Ендокринолог – спеціаліст з біопсії щитоподібної залози',
      bio: 'Спеціаліст другого ступеня з патоморфології, що практикує з 2000 року. Проводить ендокринологічні консультації та біопсії щитоподібної залози, забезпечуючи точну діагностику та фахову підтримку пацієнтів.',
    },
  },
  },
  {
    id: 16,
    slug: 'krzysztof-niemiec',
    titlePrefix: 'lek. med.',
    name: 'Krzysztof Niemiec',
    role: 'Ortopeda',
    specializationSlug: 'ortopedia',
    photo: imgKrzysztofNiemiec,
    bio: 'Ortopeda z doświadczeniem zawodowym od 2009 roku. Zajmuje się diagnostyką i leczeniem schorzeń narządu ruchu, w tym dyskopatii, łokcia tenisisty, zespołu cieśni nadgarstka, zapalenia ścięgna Achillesa, zmian zwyrodnieniowych stawów, skręceń stawu skokowego oraz skoliozy.',
  translations: {
    en: {
      role: 'Orthopaedic surgeon',
      bio: 'Orthopaedic specialist with clinical experience since 2009. Treats musculoskeletal conditions including disc disease, tennis elbow, carpal tunnel syndrome, Achilles tendinitis, joint degeneration, ankle sprains and scoliosis.',
    },
    ua: {
      role: 'Ортопед',
      bio: 'Ортопед із клінічним досвідом з 2009 року. Займається діагностикою та лікуванням захворювань опорно-рухового апарату: дископатії, ліктя тенісиста, синдрому зап\'ястного каналу, тендиніту ахіллового сухожилля, дегенерації суглобів, розтягнень гомілковостопного суглоба та сколіозу.',
    },
  },
  },
  {
    id: 17,
    slug: 'mateusz-mroczkowski',
    titlePrefix: 'lek. med.',
    name: 'Mateusz Mroczkowski',
    role: 'Ortopeda',
    specializationSlug: 'ortopedia',
    photo: imgAvatarMan,
    bio: 'Specjalista ortopedii zajmujący się diagnostyką i leczeniem schorzeń oraz urazów narządu ruchu. W pracy z pacjentem stawia na dokładną ocenę problemu, dobór odpowiedniego leczenia i wsparcie w powrocie do sprawności.',
  translations: {
    en: {
      role: 'Orthopaedic surgeon',
      bio: 'Orthopaedic specialist focused on the diagnosis and treatment of musculoskeletal conditions and injuries. Committed to thorough assessment, tailored treatment and supporting patients in their recovery.',
    },
    ua: {
      role: 'Ортопед',
      bio: 'Спеціаліст ортопедії, що займається діагностикою та лікуванням захворювань і травм опорно-рухового апарату. Приділяє особливу увагу ретельній оцінці стану пацієнта, підбору лікування та підтримці у відновленні.',
    },
  },
  },
  {
    id: 18,
    slug: 'wojciech-jurek',
    titlePrefix: 'lek. med.',
    name: 'Wojciech Jurek',
    role: 'Ortopeda',
    specializationSlug: 'ortopedia',
    photo: imgWojciechJurek,
    bio: 'Ortopeda z doświadczeniem zawodowym od 2013 roku. Zajmuje się diagnostyką i leczeniem dyskopatii, łokcia tenisisty, zespołu cieśni nadgarstka, zapalenia ścięgna Achillesa, zmian zwyrodnieniowych stawów, skręceń stawu skokowego oraz skoliozy.',
  translations: {
    en: {
      role: 'Orthopaedic surgeon',
      bio: 'Orthopaedic specialist practising since 2013. Treats disc disease, tennis elbow, carpal tunnel syndrome, Achilles tendinitis, joint degeneration, ankle sprains and scoliosis.',
    },
    ua: {
      role: 'Ортопед',
      bio: 'Ортопед, що практикує з 2013 року. Займається лікуванням дископатії, ліктя тенісиста, синдрому зап\'ястного каналу, тендиніту ахіллового сухожилля, дегенерації суглобів, розтягнень гомілковостопного суглоба та сколіозу.',
    },
  },
  },
  {
    id: 19,
    slug: 'przemyslaw-maslowski',
    titlePrefix: 'lek. med.',
    name: 'Przemysław Masłowski',
    role: 'Neurochirurg',
    specializationSlug: 'neurochirurgia',
    photo: imgAvatarMan,
    bio: 'Neurochirurg z wieloletnim doświadczeniem, praktykujący od 2001 roku. W swojej pracy skupia się na rzetelnej diagnostyce i bezpiecznym leczeniu schorzeń neurochirurgicznych, stawiając dobro pacjenta w centrum każdej decyzji klinicznej.',
  translations: {
    en: {
      role: 'Neurosurgeon',
      bio: 'Neurosurgeon with extensive experience, practising since 2001. Focuses on reliable diagnostics and safe treatment of neurosurgical conditions, placing patient well-being at the centre of every clinical decision.',
    },
    ua: {
      role: 'Нейрохірург',
      bio: 'Нейрохірург із багаторічним досвідом, що практикує з 2001 року. Зосереджується на надійній діагностиці та безпечному лікуванні нейрохірургічних захворювань, ставлячи добробут пацієнта в центр кожного клінічного рішення.',
    },
  },
  },
  {
    id: 20,
    slug: 'anna-brozek-stanislawska',
    titlePrefix: 'lek. med.',
    name: 'Anna Brożek-Stanisławska',
    role: 'Neurolog',
    specializationSlug: 'neurologia',
    photo: imgAvatarWoman,
    bio: 'Specjalistka neurologii zajmująca się diagnostyką i leczeniem chorób układu nerwowego. W pracy z pacjentem stawia na dokładny wywiad, wnikliwą ocenę objawów i indywidualne podejście terapeutyczne.',
  translations: {
    en: {
      role: 'Neurologist',
      bio: 'Neurology specialist focused on the diagnosis and treatment of nervous system disorders. Committed to thorough patient history, careful symptom assessment and an individualised therapeutic approach.',
    },
    ua: {
      role: 'Невролог',
      bio: 'Спеціалістка неврології, що займається діагностикою та лікуванням захворювань нервової системи. Надає пріоритет ретельному збору анамнезу, уважній оцінці симптомів та індивідуальному терапевтичному підходу.',
    },
  },
  },
  {
    id: 21,
    slug: 'ewelina-kubanska',
    titlePrefix: 'lek. med.',
    name: 'Ewelina Kubańska',
    role: 'Neurolog',
    specializationSlug: 'neurologia',
    photo: imgEwelinaKubanska,
    bio: '',
    translations: {
      en: { role: 'Neurologist' },
      ua: { role: 'Невролог' },
    },
  },
  {
    id: 22,
    slug: 'barbara-kosowska',
    titlePrefix: 'piel.',
    name: 'Barbara Kosowska',
    role: 'Pielęgniarka EEG',
    specializationSlug: 'neurologia',
    photo: imgAvatarWoman,
    bio: 'Pielęgniarka EEG specjalizująca się w profesjonalnym wykonywaniu badań elektroencefalograficznych. Dba o komfort pacjenta, spokojną atmosferę badania oraz najwyższą jakość uzyskanych wyników diagnostycznych.',
  translations: {
    en: {
      role: 'EEG nurse',
      bio: 'EEG nurse specialising in professional electroencephalographic examinations. Ensures patient comfort, a calm examination environment and the highest quality of diagnostic results.',
    },
    ua: {
      role: 'Медсестра ЕЕГ',
      bio: 'Медсестра ЕЕГ, що спеціалізується на проведенні електроенцефалографічних досліджень. Забезпечує комфорт пацієнта, спокійну атмосферу обстеження та найвищу якість діагностичних результатів.',
    },
  },
  },
  {
    id: 23,
    slug: 'katarzyna-drozdowicz',
    titlePrefix: 'lek.',
    name: 'Katarzyna Drozdowicz',
    role: 'Psychiatra',
    specializationSlug: 'psychiatria',
    photo: imgAvatarWoman,
    bio: 'Psychiatra z praktyką od 2012 roku, skoncentrowana na wszechstronnej opiece nad zdrowiem psychicznym. Zajmuje się diagnostyką i leczeniem depresji, zaburzeń lękowych, zaburzeń snu, stanów stresowych, zaburzeń obsesyjno-kompulsyjnych oraz ADHD.',
  translations: {
    en: {
      role: 'Psychiatrist',
      bio: 'Psychiatrist practising since 2012, focused on comprehensive mental health care. Specialises in the diagnosis and treatment of depression, anxiety disorders, sleep disorders, stress, OCD and ADHD.',
    },
    ua: {
      role: 'Психіатр',
      bio: 'Психіатр, що практикує з 2012 року, зосереджена на комплексній охороні психічного здоров\'я. Спеціалізується на діагностиці та лікуванні депресії, тривожних розладів, порушень сну, стресових станів, ОКР та СДУГ.',
    },
  },
  },
  {
    id: 24,
    slug: 'jaroslaw-wozniak',
    titlePrefix: 'lek. med.',
    name: 'Jarosław Woźniak',
    role: 'Psychiatra',
    specializationSlug: 'psychiatria',
    photo: imgAvatarMan,
    bio: 'Psychiatra z doświadczeniem zawodowym od 2011 roku. W swojej praktyce zajmuje się diagnostyką i leczeniem depresji, zaburzeń lękowych, zaburzeń snu, stresu, zaburzeń obsesyjno-kompulsyjnych oraz ADHD, dbając o komfort i zrozumienie procesu leczenia przez pacjenta.',
  translations: {
    en: {
      role: 'Psychiatrist',
      bio: 'Psychiatrist with professional experience since 2011. Specialises in depression, anxiety disorders, sleep disorders, stress, OCD and ADHD, with a focus on patient comfort and clear communication throughout the treatment process.',
    },
    ua: {
      role: 'Психіатр',
      bio: 'Психіатр із досвідом роботи з 2011 року. Спеціалізується на депресії, тривожних розладах, порушеннях сну, стресі, ОКР та СДУГ, приділяючи увагу комфорту пацієнта та чіткому роз\'ясненню процесу лікування.',
    },
  },
  },
  {
    id: 25,
    slug: 'sebastian-wajda',
    titlePrefix: 'lek.',
    name: 'Sebastian Wajda',
    role: 'Psychiatra',
    specializationSlug: 'psychiatria',
    photo: imgSebastianWajda,
    bio: 'Absolwent Wydziału Lekarskiego Śląskiego Uniwersytetu Medycznego w Katowicach. Pracuje z pacjentami w Oddziale Psychiatrii Ogólnej, zajmując się zaburzeniami nastroju, lękowymi, psychosomatycznymi i osobowości, a także schizofrenią i chorobą afektywną dwubiegunową. Certyfikowany specjalista leczenia bólu przewlekłego akredytowany przez Polskie Towarzystwo Badania Bólu.',
  translations: {
    en: {
      role: 'Psychiatrist',
      bio: 'Graduate of the Medical Faculty of the Silesian University of Medicine in Katowice. Works in the General Psychiatry Ward, treating mood, anxiety, psychosomatic and personality disorders, as well as schizophrenia and bipolar disorder. Certified specialist in chronic pain management, accredited by the Polish Association for the Study of Pain.',
    },
    ua: {
      role: 'Психіатр',
      bio: 'Випускник медичного факультету Сілезького університету медицини в Катовіцах. Працює у відділенні загальної психіатрії, лікуючи афективні, тривожні, психосоматичні та особистісні розлади, а також шизофренію та біполярний афективний розлад. Сертифікований спеціаліст із лікування хронічного болю, акредитований Польським товариством вивчення болю.',
    },
  },
  },
  {
    id: 26,
    slug: 'izabela-wilga-malota',
    titlePrefix: 'certyfikowany psychoterapeuta PTPPd',
    name: 'Izabela Wilga-Malota',
    role: 'Psychoterapeuta',
    specializationSlug: 'psychologia',
    photo: imgIzabelaWilgaMalota,
    bio: 'Specjalista psychologii klinicznej oraz certyfikowany psychoterapeuta Polskiego Towarzystwa Psychoterapii Psychodynamicznej. Od ponad 15 lat prowadzi psychoterapię indywidualną i grupową w nurcie psychodynamicznym. Wykonuje diagnozy zaburzeń psychicznych, testy osobowości i oceny poziomu inteligencji. Regularnie superwizuje swoją pracę i prowadzi szkolenia z zakresu kompetencji społecznych.',
  translations: {
    en: {
      role: 'Clinical psychologist – psychotherapist',
      bio: 'Specialist in clinical psychology and certified psychotherapist of the Polish Society of Psychodynamic Psychotherapy. Has been conducting individual and group psychodynamic psychotherapy for over 15 years. Performs psychological assessments, personality tests and intelligence evaluations. Regularly supervises her work and conducts social competence training.',
    },
    ua: {
      role: 'Клінічний психолог – психотерапевт',
      bio: 'Спеціаліст клінічної психології та сертифікований психотерапевт Польського товариства психодинамічної психотерапії. Понад 15 років проводить індивідуальну та групову психотерапію в психодинамічному напрямку. Здійснює психологічну діагностику, тести особистості та оцінку рівня інтелекту. Регулярно супервізує свою роботу та проводить тренінги соціальних компетенцій.',
    },
  },
  },
  {
    id: 27,
    slug: 'rafal-kasperczyk',
    titlePrefix: 'dr n. med.',
    name: 'Rafał Kasperczyk',
    role: 'Urolog',
    specializationSlug: 'urologia',
    photo: imgRafalKasperczyk,
    bio: 'Urolog z wieloletnim doświadczeniem, świadczący profesjonalne usługi zdrowotne od 2007 roku. W swojej praktyce stawia na kompleksowe podejście do diagnostyki i leczenia schorzeń układu moczowo-płciowego.',
  translations: {
    en: {
      role: 'Urologist',
      bio: 'Urologist with extensive experience, providing professional healthcare since 2007. Committed to a comprehensive approach to the diagnosis and treatment of urological and genitourinary conditions.',
    },
    ua: {
      role: 'Уролог',
      bio: 'Уролог із багаторічним досвідом, що надає фахову медичну допомогу з 2007 року. Дотримується комплексного підходу до діагностики та лікування захворювань сечостатевої системи.',
    },
  },
  },
  {
    id: 28,
    slug: 'krzysztof-soltys',
    titlePrefix: 'lek. med.',
    name: 'Krzysztof Sołtys',
    role: 'Urolog',
    specializationSlug: 'urologia',
    photo: imgAvatarMan,
    bio: 'Urolog praktykujący od 2015 roku, zapewniający pacjentom kompleksową opiekę w zakresie schorzeń układu moczowego. Specjalizuje się w diagnostyce i leczeniu nietrzymania moczu, raka prostaty, zapalenia pęcherza moczowego, kamicy nerkowej, przerostu prostaty oraz zapalenia gruczołu krokowego.',
  translations: {
    en: {
      role: 'Urologist',
      bio: 'Urologist practising since 2015, providing comprehensive urological care. Specialises in urinary incontinence, prostate cancer, bladder infections, kidney stones, benign prostatic hyperplasia and prostatitis.',
    },
    ua: {
      role: 'Уролог',
      bio: 'Уролог, що практикує з 2015 року та забезпечує комплексну урологічну допомогу. Спеціалізується на нетриманні сечі, раку простати, запаленні сечового міхура, нирковокам\'яній хворобі, гіперплазії простати та простатиті.',
    },
  },
  },
  {
    id: 29,
    slug: 'marcin-warzecha',
    titlePrefix: 'lek. med.',
    name: 'Marcin Warzecha',
    role: 'Urolog',
    specializationSlug: 'urologia',
    photo: imgAvatarMan,
    bio: 'Urolog z praktyką od 2013 roku, zajmujący się diagnostyką i leczeniem schorzeń układu moczowego. Specjalizuje się m.in. w nietrzymaniu moczu, raku prostaty, zapaleniu pęcherza moczowego, kamicy nerkowej, przeroście prostaty oraz zapaleniu gruczołu krokowego.',
  translations: {
    en: {
      role: 'Urologist',
      bio: 'Urologist practising since 2013, focused on the diagnosis and treatment of urinary tract conditions. Specialises in urinary incontinence, prostate cancer, bladder infections, kidney stones, benign prostatic hyperplasia and prostatitis.',
    },
    ua: {
      role: 'Уролог',
      bio: 'Уролог, що практикує з 2013 року, зосереджений на діагностиці та лікуванні захворювань сечовивідних шляхів. Спеціалізується на нетриманні сечі, раку простати, запаленні сечового міхура, нирковокам\'яній хворобі, гіперплазії простати та простатиті.',
    },
  },
  },
  {
    id: 30,
    slug: 'beata-jakubiec',
    titlePrefix: 'lek. med.',
    name: 'Beata Jakubiec',
    role: 'Diabetolog',
    specializationSlug: 'diabetologia',
    photo: imgBeataJakubiec,
    bio: 'Specjalistka chorób wewnętrznych I i II stopnia oraz diabetologii z praktyką od 2008 roku. Oferuje kompleksowe konsultacje internistyczne i diabetologiczne, łącząc wieloletnie doświadczenie z indywidualnym podejściem do każdego pacjenta.',
  translations: {
    en: {
      role: 'Internist – diabetologist',
      bio: 'First and second-degree specialist in internal medicine and diabetology, practising since 2008. Provides comprehensive internistic and diabetological consultations, combining extensive experience with an individual approach to each patient.',
    },
    ua: {
      role: 'Терапевт – діабетолог',
      bio: 'Спеціаліст першого та другого ступеня з внутрішніх хвороб та діабетології, що практикує з 2008 року. Проводить комплексні терапевтичні та діабетологічні консультації, поєднуючи багаторічний досвід із індивідуальним підходом до кожного пацієнта.',
    },
  },
  },
  {
    id: 31,
    slug: 'ewelina-kubanska-estetyczna',
    titlePrefix: 'lek. med.',
    name: 'Ewelina Kubańska',
    role: 'Specjalista medycyny estetycznej',
    specializationSlug: 'medycyna-estetyczna',
    photo: imgEwelinaKubanska,
    bio: 'Specjalistka medycyny estetycznej koncentrująca się na poprawie wyglądu i komfortu pacjentów przy zachowaniu bezpieczeństwa i naturalnych efektów. W pracy stawia na dokładną konsultację i dobór rozwiązań dopasowanych do indywidualnych potrzeb.',
  translations: {
    en: {
      role: 'Aesthetic medicine specialist',
      bio: 'Aesthetic medicine specialist focused on enhancing patients\' appearance and comfort while ensuring safety and natural-looking results. Committed to thorough consultations and treatments tailored to individual needs.',
    },
    ua: {
      role: 'Спеціаліст естетичної медицини',
      bio: 'Спеціаліст естетичної медицини, зосереджена на покращенні зовнішнього вигляду та комфорту пацієнтів із дотриманням безпеки та природного результату. Приділяє особливу увагу детальній консультації та підбору процедур відповідно до індивідуальних потреб.',
    },
  },
  },
  {
    id: 32,
    slug: 'jacek-pajak-biopsja',
    titlePrefix: 'dr n. med.',
    name: 'Jacek Pająk',
    role: 'Cytopatolog, biopsje tarczycy',
    specializationSlug: 'biopsja',
    photo: imgAvatarMan,
    bio: 'Cytopatolog z wieloletnim doświadczeniem, specjalizujący się w diagnostyce cytologicznej i biopsjach tarczycy. Zapewnia pacjentom precyzyjną ocenę zmian oraz profesjonalne wsparcie na etapie dalszej diagnostyki i leczenia.',
  translations: {
    en: {
      role: 'Cytopathologist – thyroid biopsy specialist',
      bio: 'Cytopathologist with extensive experience, specialising in cytological diagnostics and thyroid biopsies. Provides precise lesion assessment and professional guidance throughout the diagnostic and treatment process.',
    },
    ua: {
      role: 'Цитопатолог – спеціаліст з біопсії щитоподібної залози',
      bio: 'Цитопатолог із багаторічним досвідом, що спеціалізується на цитологічній діагностиці та біопсіях щитоподібної залози. Забезпечує точну оцінку змін та фахову підтримку на етапах подальшої діагностики та лікування.',
    },
  },
  },
  {
    id: 33,
    slug: 'tomasz-blachura',
    titlePrefix: 'lek. med.',
    name: 'Tomasz Blachura',
    role: 'Chirurg, diagnostyka piersi',
    specializationSlug: 'biopsja-grubogłowa',
    photo: imgAvatarMan,
    bio: '',
    translations: {
      en: { role: 'Surgeon, breast diagnostics' },
      ua: { role: 'Хірург, діагностика грудей' },
    },
  },
  {
    id: 34,
    slug: 'kamila-jachna',
    titlePrefix: 'mgr rehabilitacji',
    name: 'Kamila Jachna',
    role: 'Fizjoterapeuta',
    specializationSlug: 'rehabilitacja',
    photo: imgKamilaJachna,
    bio: 'Fizjoterapeutka wspierająca pacjentów w powrocie do sprawności i poprawie komfortu codziennego funkcjonowania. W pracy stawia na indywidualnie dobrane metody terapeutyczne, dokładną ocenę potrzeb oraz edukację pacjenta.',
  translations: {
    en: {
      role: 'Physiotherapist',
      bio: 'Physiotherapist supporting patients in regaining mobility and improving their quality of daily life. Focuses on individually tailored therapeutic methods, thorough needs assessment and patient education.',
    },
    ua: {
      role: 'Фізіотерапевт',
      bio: 'Фізіотерапевт, що допомагає пацієнтам відновити рухливість та покращити якість повсякденного життя. Зосереджується на індивідуально підібраних методах терапії, ретельній оцінці потреб та освіті пацієнта.',
    },
  },
  },
  {
    id: 35,
    slug: 'grzegorz-dankow',
    titlePrefix: 'mgr rehabilitacji',
    name: 'Grzegorz Dańków',
    role: 'Fizjoterapeuta',
    specializationSlug: 'rehabilitacja',
    photo: imgGrzegorzDankow,
    bio: 'Fizjoterapeuta specjalizujący się w leczeniu dolegliwości bólowych i usprawnianiu narządu ruchu. Koncentruje się na indywidualnym podejściu do pacjenta, terapii funkcjonalnej oraz stopniowym przywracaniu sprawności.',
  translations: {
    en: {
      role: 'Physiotherapist',
      bio: 'Physiotherapist specialising in pain management and musculoskeletal rehabilitation. Focuses on an individual approach, functional therapy and the gradual restoration of physical fitness.',
    },
    ua: {
      role: 'Фізіотерапевт',
      bio: 'Фізіотерапевт, що спеціалізується на лікуванні больових синдромів та реабілітації опорно-рухового апарату. Зосереджується на індивідуальному підході до пацієнта, функціональній терапії та поступовому відновленні рухової активності.',
    },
  },
  },
  {
    id: 36,
    slug: 'elzbieta-piatkowska',
    titlePrefix: 'mgr rehabilitacji',
    name: 'Elżbieta Piątkowska',
    role: 'Fizjoterapeuta',
    specializationSlug: 'rehabilitacja',
    photo: imgAvatarWoman,
    bio: 'Magister rehabilitacji i fizjoterapeutka z doświadczeniem w kompleksowym usprawnianiu pacjentów. W pracy łączy wiedzę teoretyczną z praktyką, dobierając metody terapeutyczne indywidualnie do problemu i potrzeb zdrowotnych pacjenta.',
  translations: {
    en: {
      role: 'Physiotherapist',
      bio: 'Master of rehabilitation and physiotherapist with experience in comprehensive patient rehabilitation. Combines theoretical knowledge with clinical practice, tailoring therapeutic methods to each patient\'s specific condition and needs.',
    },
    ua: {
      role: 'Фізіотерапевт',
      bio: 'Магістр реабілітації та фізіотерапевт із досвідом комплексного відновлення пацієнтів. Поєднує теоретичні знання з клінічною практикою, індивідуально підбираючи методи терапії відповідно до стану та потреб пацієнта.',
    },
  },
  },
  {
    id: 37,
    slug: 'katarzyna-waclawek-slusarczyk',
    titlePrefix: 'lek. med.',
    name: 'Katarzyna Wacławek-Ślusarczyk',
    role: 'Specjalista diagnostyki USG',
    specializationSlug: 'diagnostyka-usg',
    photo: imgAvatarWoman,
    bio: 'Lekarz medycyny specjalizujący się w diagnostyce ultrasonograficznej. W swojej pracy koncentruje się na precyzyjnej ocenie obrazowej, rzetelnej diagnostyce oraz zapewnieniu pacjentom profesjonalnej i spokojnej opieki podczas badania.',
  translations: {
    en: {
      role: 'Ultrasound diagnostics specialist',
      bio: 'Medical doctor specialising in ultrasound diagnostics. Focused on precise imaging assessment, reliable diagnostics and providing patients with professional and reassuring care during examinations.',
    },
    ua: {
      role: 'Спеціаліст ультразвукової діагностики',
      bio: 'Лікар, що спеціалізується на ультразвуковій діагностиці. Зосереджується на точній оцінці зображень, достовірній діагностиці та забезпеченні пацієнтам фахової та комфортної допомоги під час обстеження.',
    },
  },
  },
  {
    id: 38,
    slug: 'tomasz-blachura-usg',
    titlePrefix: 'lek. med.',
    name: 'Tomasz Blachura',
    role: 'Chirurg, diagnostyka USG',
    specializationSlug: 'diagnostyka-usg',
    photo: imgAvatarMan,
    bio: 'Lekarz chirurg ze specjalizacją w diagnostyce ultrasonograficznej. Łączy doświadczenie kliniczne z diagnostyką obrazową, zapewniając pacjentom kompleksowe podejście do rozpoznania i leczenia problemów zdrowotnych.',
  translations: {
    en: {
      role: 'Surgeon – ultrasound diagnostics specialist',
      bio: 'Surgeon with a specialisation in ultrasound diagnostics. Combines clinical expertise with imaging diagnostics to provide patients with a comprehensive approach to diagnosis and treatment.',
    },
    ua: {
      role: 'Хірург – спеціаліст ультразвукової діагностики',
      bio: 'Хірург зі спеціалізацією в ультразвуковій діагностиці. Поєднує клінічний досвід із діагностикою зображень, забезпечуючи пацієнтам комплексний підхід до діагностики та лікування.',
    },
  },
  },
]
