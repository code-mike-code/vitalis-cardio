export type Locale = 'pl' | 'en' | 'ua';

export interface Translations {
  formTitle: string;
  formSubtitle: string;
  projectNumber: string;
  sectionPersonal: string;
  sectionDemographic: string;
  sectionEducation: string;
  sectionEmployment: string;
  sectionParticipantStatus: string;
  sectionPainStatus: string;
  sectionDeclarations: string;
  fullName: string;
  fullNamePlaceholder: string;
  pesel: string;
  peselPlaceholder: string;
  age: string;
  agePlaceholder: string;
  postalCode: string;
  postalCodePlaceholder: string;
  city: string;
  cityPlaceholder: string;
  street: string;
  streetPlaceholder: string;
  county: string;
  countyPlaceholder: string;
  municipality: string;
  municipalityPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  email: string;
  emailPlaceholder: string;
  gender: string;
  genderFemale: string;
  genderMale: string;
  citizenship: string;
  citizenshipPolish: string;
  citizenshipEU: string;
  citizenshipNonEU: string;
  citizenshipStateless: string;
  educationLabel: string;
  educationSecondary: string;
  educationPostSecondary: string;
  educationHigher: string;
  employmentStatusLabel: string;
  employmentEmployed: string;
  employmentUnemployed: string;
  workplaceName: string;
  workplaceNamePlaceholder: string;
  jobCategoryLabel: string;
  jobSelfEmployed: string;
  jobGovernment: string;
  jobLocalGov: string;
  jobNGO: string;
  jobMSME: string;
  jobLargeEnterprise: string;
  jobHealthcare: string;
  jobSchoolTeaching: string;
  jobSchoolNonTeaching: string;
  jobSchoolManagement: string;
  jobUniversity: string;
  jobScienceInstitute: string;
  jobResearchInstitute: string;
  jobLukasiewicz: string;
  jobInternationalInstitute: string;
  jobFederation: string;
  jobStateEntity: string;
  jobOther: string;
  foreignOrigin: string;
  thirdCountryNational: string;
  ethnicMinority: string;
  homeless: string;
  disabled: string;
  yesOption: string;
  noOption: string;
  noInfoOption: string;
  painAffectsWork: string;
  declarationCriteria: string;
  declarationWillingness: string;
  declarationHealthData: string;
  declarationContraindications: string;
  declarationTruth: string;
  dateLabel: string;
  datePlaceholder: string;
  signatureLabel: string;
  signaturePlaceholder: string;
  submitButton: string;
  submitSuccess: string;
  submitError: string;
  required: string;
  invalidEmail: string;
  invalidPesel: string;
  invalidAge: string;
  invalidPostalCode: string;
  invalidPhone: string;
  allDeclarationsRequired: string;
  step: string;
  of: string;
  next: string;
  previous: string;
  ariaRequired: string;
  ariaProgress: string;
}

export const translations: Record<Locale, Translations> = {
  pl: {
    formTitle: 'Formularz zgłoszeniowy uczestnika projektu',
    formSubtitle: 'Profilaktyka i rehabilitacja osób z dysfunkcjami narządu ruchu utrudniającymi wykonywanie pracy zawodowej',
    projectNumber: 'Nr projektu: FEMP.06.08-IP.02-0454/24',
    sectionPersonal: 'Dane osobowe i adres zamieszkania',
    sectionDemographic: 'Dane demograficzne',
    sectionEducation: 'Wykształcenie',
    sectionEmployment: 'Status zawodowy',
    sectionParticipantStatus: 'Status uczestnika w chwili przystąpienia',
    sectionPainStatus: 'Dolegliwości bólowe',
    sectionDeclarations: 'Oświadczenia i zgody',
    fullName: 'Imię i nazwisko',
    fullNamePlaceholder: 'Wpisz imię i nazwisko',
    pesel: 'PESEL',
    peselPlaceholder: 'Wpisz numer PESEL (11 cyfr)',
    age: 'Wiek',
    agePlaceholder: 'Wpisz wiek',
    postalCode: 'Kod pocztowy',
    postalCodePlaceholder: 'XX-XXX',
    city: 'Miejscowość',
    cityPlaceholder: 'Wpisz miejscowość',
    street: 'Ulica',
    streetPlaceholder: 'Wpisz ulicę i numer',
    county: 'Powiat',
    countyPlaceholder: 'Wpisz powiat',
    municipality: 'Gmina',
    municipalityPlaceholder: 'Wpisz gminę',
    phone: 'Telefon kontaktowy',
    phonePlaceholder: 'Np. 600 000 000',
    email: 'Adres e-mail',
    emailPlaceholder: 'Wpisz adres e-mail',
    gender: 'Płeć',
    genderFemale: 'Kobieta',
    genderMale: 'Mężczyzna',
    citizenship: 'Obywatelstwo',
    citizenshipPolish: 'Polskie',
    citizenshipEU: 'Brak polskiego obywatelstwa – obywatel kraju UE',
    citizenshipNonEU: 'Brak polskiego obywatelstwa lub UE – obywatel kraju spoza UE',
    citizenshipStateless: 'Bezpaństwowiec',
    educationLabel: 'Wykształcenie',
    educationSecondary: 'Średnie',
    educationPostSecondary: 'Ponadgimnazjalne',
    educationHigher: 'Wyższe',
    employmentStatusLabel: 'Główny status zatrudnienia',
    employmentEmployed: 'Zatrudniony/a',
    employmentUnemployed: 'Bezrobotny/a (zarejestrowany/a)',
    workplaceName: 'Miejsce pracy / Nazwa urzędu pracy',
    workplaceNamePlaceholder: 'Wpisz nazwę zakładu pracy lub urzędu pracy',
    jobCategoryLabel: 'Kategoria zawodowa',
    jobSelfEmployed: 'Osoba prowadząca działalność na własny rachunek',
    jobGovernment: 'Osoba pracująca w administracji rządowej',
    jobLocalGov: 'Osoba pracująca w administracji samorządowej (z wyłączeniem szkół i placówek systemu oświaty)',
    jobNGO: 'Osoba w organizacji pozarządowej',
    jobMSME: 'Osoba w MMŚP',
    jobLargeEnterprise: 'Osoba w dużym przedsiębiorstwie',
    jobHealthcare: 'Osoba pracująca w podmiocie wykonującym działalność leczniczą',
    jobSchoolTeaching: 'Osoba pracująca w szkole lub placówce systemu oświaty (Kadra pedagogiczna)',
    jobSchoolNonTeaching: 'Osoba pracująca w szkole lub placówce systemu oświaty (Kadra niepedagogiczna)',
    jobSchoolManagement: 'Osoba pracująca w szkole lub placówce systemu oświaty (Kadra zarządzająca)',
    jobUniversity: 'Osoba pracująca na uczelni',
    jobScienceInstitute: 'Osoba pracująca w instytucie naukowym',
    jobResearchInstitute: 'Osoba pracująca w instytucie badawczym',
    jobLukasiewicz: 'Osoba pracująca w instytucie działającym w ramach Sieci Badawczej Łukasiewicz',
    jobInternationalInstitute: 'Osoba pracująca w Międzynarodowym Instytucie Naukowym',
    jobFederation: 'Osoba pracująca dla federacji podmiotów systemu szkolnictwa wyższego i nauki',
    jobStateEntity: 'Osoba pracująca na rzecz państwowej osoby prawnej',
    jobOther: 'Inne',
    foreignOrigin: 'Osoba obcego pochodzenia',
    thirdCountryNational: 'Osoba z państwa trzeciego',
    ethnicMinority: 'Mniejszość narodowa/etniczna (marginalizowana)',
    homeless: 'Osoba bezdomna lub wykluczona z dostępu do mieszkań',
    disabled: 'Osoba z niepełnosprawnościami',
    yesOption: 'Tak',
    noOption: 'Nie',
    noInfoOption: 'Nie podaję',
    painAffectsWork: 'Czy dolegliwości bólowe w zakresie narządu ruchu utrudniają wykonywanie pracy zawodowej?',
    declarationCriteria: 'Oświadczam, że spełniam kryteria udziału w programie.',
    declarationWillingness: 'Oświadczam, że wyrażam chęć udziału w działaniach diagnostycznych, profilaktycznych i fizjoterapeutycznych.',
    declarationHealthData: 'Oświadczam, że wyrażam zgodę na przetwarzanie danych dotyczących mojego stanu zdrowia w zakresie niezbędnym do realizacji programu.',
    declarationContraindications: 'Oświadczam, że poinformowałem/poinformowałam prowadzącego o wszystkich przeciwwskazaniach zdrowotnych.',
    declarationTruth: 'Oświadczam, że dane w formularzu są zgodne z prawdą.',
    dateLabel: 'Data',
    datePlaceholder: 'RRRR-MM-DD',
    signatureLabel: 'Podpis uczestnika',
    signaturePlaceholder: 'Wpisz imię i nazwisko jako podpis elektroniczny',
    submitButton: 'Pobierz formularz (PDF)',
    submitSuccess: 'Formularz PDF został wygenerowany i pobrany. Prosimy wysłać go na adres e-mail gabinetu.',
    submitError: 'Nie udało się wygenerować pliku PDF. Prosimy spróbować ponownie.',
    required: 'To pole jest wymagane',
    invalidEmail: 'Podaj poprawny adres e-mail',
    invalidPesel: 'PESEL musi zawierać dokładnie 11 cyfr',
    invalidAge: 'Wiek musi być liczbą między 18 a 120',
    invalidPostalCode: 'Kod pocztowy powinien mieć format XX-XXX',
    invalidPhone: 'Podaj poprawny numer telefonu',
    allDeclarationsRequired: 'Wszystkie oświadczenia są wymagane',
    step: 'Krok',
    of: 'z',
    next: 'Dalej',
    previous: 'Wróć',
    ariaRequired: 'wymagane',
    ariaProgress: 'Postęp formularza',
  },
  en: {
    formTitle: 'Project Participant Registration Form',
    formSubtitle: 'Prevention and rehabilitation of persons with musculoskeletal dysfunctions affecting professional work',
    projectNumber: 'Project No.: FEMP.06.08-IP.02-0454/24',
    sectionPersonal: 'Personal data and address',
    sectionDemographic: 'Demographic data',
    sectionEducation: 'Education',
    sectionEmployment: 'Employment status',
    sectionParticipantStatus: 'Participant status upon enrollment',
    sectionPainStatus: 'Pain condition',
    sectionDeclarations: 'Declarations and consents',
    fullName: 'Full name',
    fullNamePlaceholder: 'Enter full name',
    pesel: 'PESEL (Polish ID number)',
    peselPlaceholder: 'Enter PESEL (11 digits)',
    age: 'Age',
    agePlaceholder: 'Enter age',
    postalCode: 'Postal code',
    postalCodePlaceholder: 'XX-XXX',
    city: 'City',
    cityPlaceholder: 'Enter city',
    street: 'Street',
    streetPlaceholder: 'Enter street and number',
    county: 'County (Powiat)',
    countyPlaceholder: 'Enter county',
    municipality: 'Municipality (Gmina)',
    municipalityPlaceholder: 'Enter municipality',
    phone: 'Phone number',
    phonePlaceholder: 'e.g. 600 000 000',
    email: 'Email address',
    emailPlaceholder: 'Enter email address',
    gender: 'Gender',
    genderFemale: 'Female',
    genderMale: 'Male',
    citizenship: 'Citizenship',
    citizenshipPolish: 'Polish',
    citizenshipEU: 'Non-Polish – EU citizen',
    citizenshipNonEU: 'Non-Polish, non-EU – citizen of a non-EU country',
    citizenshipStateless: 'Stateless person',
    educationLabel: 'Education level',
    educationSecondary: 'Secondary',
    educationPostSecondary: 'Post-secondary',
    educationHigher: 'Higher education',
    employmentStatusLabel: 'Primary employment status',
    employmentEmployed: 'Employed',
    employmentUnemployed: 'Registered unemployed',
    workplaceName: 'Employer name / Employment office name',
    workplaceNamePlaceholder: 'Enter employer or employment office name',
    jobCategoryLabel: 'Occupational category',
    jobSelfEmployed: 'Self-employed',
    jobGovernment: 'Government administration employee',
    jobLocalGov: 'Local government employee (excluding schools)',
    jobNGO: 'NGO employee',
    jobMSME: 'MSME employee',
    jobLargeEnterprise: 'Large enterprise employee',
    jobHealthcare: 'Healthcare entity employee',
    jobSchoolTeaching: 'School employee – teaching staff',
    jobSchoolNonTeaching: 'School employee – non-teaching staff',
    jobSchoolManagement: 'School employee – management',
    jobUniversity: 'University employee',
    jobScienceInstitute: 'Scientific institute employee',
    jobResearchInstitute: 'Research institute employee',
    jobLukasiewicz: 'Łukasiewicz Research Network institute employee',
    jobInternationalInstitute: 'International Scientific Institute employee',
    jobFederation: 'Higher education federation employee',
    jobStateEntity: 'State legal entity employee',
    jobOther: 'Other',
    foreignOrigin: 'Person of foreign origin',
    thirdCountryNational: 'Third-country national',
    ethnicMinority: 'National/ethnic minority (marginalised)',
    homeless: 'Homeless or excluded from access to housing',
    disabled: 'Person with disabilities',
    yesOption: 'Yes',
    noOption: 'No',
    noInfoOption: 'Prefer not to say',
    painAffectsWork: 'Do musculoskeletal pain conditions affect your ability to perform professional work?',
    declarationCriteria: 'I declare that I meet the participation criteria for the programme.',
    declarationWillingness: 'I declare my willingness to participate in diagnostic, preventive and physiotherapy activities.',
    declarationHealthData: 'I consent to the processing of my health data to the extent necessary for the programme implementation.',
    declarationContraindications: 'I declare that I have informed the programme coordinator of all health contraindications.',
    declarationTruth: 'I declare that all data provided in the form is accurate and truthful.',
    dateLabel: 'Date',
    datePlaceholder: 'YYYY-MM-DD',
    signatureLabel: 'Participant signature',
    signaturePlaceholder: 'Enter full name as electronic signature',
    submitButton: 'Download form (PDF)',
    submitSuccess: 'Your PDF form has been generated and downloaded. Please email it to the clinic.',
    submitError: 'Could not generate the PDF file. Please try again.',
    required: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPesel: 'PESEL must contain exactly 11 digits',
    invalidAge: 'Age must be a number between 18 and 120',
    invalidPostalCode: 'Postal code must be in format XX-XXX',
    invalidPhone: 'Please enter a valid phone number',
    allDeclarationsRequired: 'All declarations are required',
    step: 'Step',
    of: 'of',
    next: 'Next',
    previous: 'Back',
    ariaRequired: 'required',
    ariaProgress: 'Form progress',
  },
  ua: {
    formTitle: 'Реєстраційна форма учасника проєкту',
    formSubtitle: 'Профілактика та реабілітація осіб із дисфункціями опорно-рухового апарату, що ускладнюють виконання трудової діяльності',
    projectNumber: 'Номер проєкту: FEMP.06.08-IP.02-0454/24',
    sectionPersonal: 'Особисті дані та адреса проживання',
    sectionDemographic: 'Демографічні дані',
    sectionEducation: 'Освіта',
    sectionEmployment: 'Статус зайнятості',
    sectionParticipantStatus: 'Статус учасника на момент вступу',
    sectionPainStatus: 'Больовий стан',
    sectionDeclarations: 'Заяви та згоди',
    fullName: "Прізвище та ім'я",
    fullNamePlaceholder: "Введіть прізвище та ім'я",
    pesel: 'PESEL (ідентифікаційний номер)',
    peselPlaceholder: 'Введіть PESEL (11 цифр)',
    age: 'Вік',
    agePlaceholder: 'Введіть вік',
    postalCode: 'Поштовий індекс',
    postalCodePlaceholder: 'XX-XXX',
    city: 'Місто',
    cityPlaceholder: 'Введіть місто',
    street: 'Вулиця',
    streetPlaceholder: 'Введіть вулицю та номер',
    county: 'Повіт (Powiat)',
    countyPlaceholder: 'Введіть повіт',
    municipality: 'Гміна (Gmina)',
    municipalityPlaceholder: 'Введіть гміну',
    phone: 'Контактний телефон',
    phonePlaceholder: 'Напр. 600 000 000',
    email: 'Адреса електронної пошти',
    emailPlaceholder: 'Введіть адресу e-mail',
    gender: 'Стать',
    genderFemale: 'Жінка',
    genderMale: 'Чоловік',
    citizenship: 'Громадянство',
    citizenshipPolish: 'Польське',
    citizenshipEU: 'Не польське – громадянин країни ЄС',
    citizenshipNonEU: 'Не польське і не ЄС – громадянин країни поза ЄС',
    citizenshipStateless: 'Особа без громадянства',
    educationLabel: 'Рівень освіти',
    educationSecondary: 'Середня',
    educationPostSecondary: 'Середньо-спеціальна',
    educationHigher: 'Вища',
    employmentStatusLabel: 'Основний статус зайнятості',
    employmentEmployed: 'Працевлаштований/а',
    employmentUnemployed: 'Безробітний/а (зареєстрований/а)',
    workplaceName: 'Місце роботи / Назва служби зайнятості',
    workplaceNamePlaceholder: 'Введіть назву роботодавця або служби зайнятості',
    jobCategoryLabel: 'Категорія зайнятості',
    jobSelfEmployed: 'Самозайнятий/а',
    jobGovernment: 'Працівник державної адміністрації',
    jobLocalGov: 'Працівник місцевого самоврядування (крім шкіл)',
    jobNGO: 'Працівник НКО',
    jobMSME: 'Працівник МСП',
    jobLargeEnterprise: 'Працівник великого підприємства',
    jobHealthcare: 'Працівник медичної установи',
    jobSchoolTeaching: 'Працівник школи – педагогічний склад',
    jobSchoolNonTeaching: 'Працівник школи – непедагогічний склад',
    jobSchoolManagement: 'Працівник школи – керівництво',
    jobUniversity: 'Працівник університету',
    jobScienceInstitute: 'Працівник наукового інституту',
    jobResearchInstitute: 'Працівник дослідницького інституту',
    jobLukasiewicz: 'Працівник інституту мережі Łukasiewicz',
    jobInternationalInstitute: 'Працівник Міжнародного наукового інституту',
    jobFederation: 'Працівник федерації системи вищої освіти',
    jobStateEntity: 'Працівник державної юридичної особи',
    jobOther: 'Інше',
    foreignOrigin: 'Особа іноземного походження',
    thirdCountryNational: 'Громадянин третьої країни',
    ethnicMinority: 'Національна/етнічна меншина (маргіналізована)',
    homeless: 'Бездомна особа або особа, позбавлена доступу до житла',
    disabled: 'Особа з інвалідністю',
    yesOption: 'Так',
    noOption: 'Ні',
    noInfoOption: 'Не вказую',
    painAffectsWork: 'Чи ускладнюють больові стани опорно-рухового апарату виконання трудової діяльності?',
    declarationCriteria: 'Заявляю, що відповідаю критеріям участі в програмі.',
    declarationWillingness: 'Заявляю про бажання брати участь у діагностичних, профілактичних та фізіотерапевтичних заходах.',
    declarationHealthData: "Даю згоду на обробку даних про стан мого здоров'я в обсязі, необхідному для реалізації програми.",
    declarationContraindications: 'Заявляю, що повідомив/повідомила координатора програми про всі медичні протипоказання.',
    declarationTruth: 'Заявляю, що дані у формі є достовірними.',
    dateLabel: 'Дата',
    datePlaceholder: 'РРРР-ММ-ДД',
    signatureLabel: 'Підпис учасника',
    signaturePlaceholder: "Введіть прізвище та ім'я як електронний підпис",
    submitButton: 'Завантажити форму (PDF)',
    submitSuccess: 'PDF-форму згенеровано та завантажено. Будь ласка, надішліть її на e-mail клініки.',
    submitError: 'Не вдалося згенерувати PDF. Будь ласка, спробуйте ще раз.',
    required: "Це поле є обов'язковим",
    invalidEmail: 'Введіть дійсну адресу електронної пошти',
    invalidPesel: 'PESEL має містити рівно 11 цифр',
    invalidAge: 'Вік має бути числом від 18 до 120',
    invalidPostalCode: 'Поштовий індекс має бути у форматі XX-XXX',
    invalidPhone: 'Введіть дійсний номер телефону',
    allDeclarationsRequired: "Усі заяви є обов'язковими",
    step: 'Крок',
    of: 'з',
    next: 'Далі',
    previous: 'Назад',
    ariaRequired: "обов'язкове",
    ariaProgress: 'Прогрес форми',
  },
};
