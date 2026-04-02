import type { NavLink, Feature, Service, TeamMember, ContactInfo, Stat, Specialist, Specialization, PricingCategory } from '@/types'

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
    photo: '',
    bio: 'Profesor nadzwyczajny i specjalista chorób wewnętrznych z tytułem doktora habilitowanego nauk medycznych. Współzałożyciel Poradni Vitalis w 2014 roku. Posiada wieloletnie doświadczenie w kardiologii klinicznej i diagnostycznej.',
  },
  {
    id: 2,
    name: 'Dr n. med. Jacek Nowak',
    role: 'Specjalista chorób wewnętrznych, współzałożyciel',
    specialization: 'Kardiolog',
    photo: '',
    bio: 'Doktor nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Współzałożyciel Poradni Vitalis. Specjalizuje się w diagnostyce i leczeniu arytmii oraz niewydolności serca.',
  },
  {
    id: 3,
    name: 'Dr n. med. Katarzyna Malinowska',
    role: 'Specjalista neurologii',
    specialization: 'Neurolog',
    photo: '',
    bio: 'Doktor nauk medycznych w dziedzinie neurologii. Doświadczenie w diagnostyce i leczeniu migren, padaczki oraz chorób neurodegeneracyjnych. Prowadzi badania EEG i EMG.',
  },
  {
    id: 4,
    name: 'Dr Paweł Kowalczyk',
    role: 'Specjalista ortopedii i traumatologii',
    specialization: 'Ortopeda',
    photo: '',
    bio: 'Specjalista ortopedii i traumatologii narządu ruchu. Ekspert w leczeniu urazów sportowych, artroskopii stawów oraz schorzeń kręgosłupa. Wykonuje iniekcje dostawowe pod kontrolą USG.',
  },
  {
    id: 5,
    name: 'Mgr Marta Zielińska',
    role: 'Kierownik działu rehabilitacji',
    specialization: 'Fizjoterapeutka',
    photo: '',
    bio: 'Certyfikowana fizjoterapeutka z tytułem magistra. Specjalizuje się w terapii manualnej, kinesiotapingu oraz rehabilitacji pourazowej. Prowadzi indywidualne programy kinezyterapii.',
  },
]

export const contactInfo: ContactInfo = {
  address: 'ul. Kopernika 25, 32-540 Trzebinia',
  phone: '+48 22 123 45 67',
  email: 'rejestracja@klinika-vitalis.pl',
  hours: 'Pon-Pt: 7:00-20:00, Sob: 8:00-14:00',
}

export const specializations: Specialization[] = [
  { id: 1, slug: 'kardiologia', name: 'Kardiologia', menuLabel: 'Kardiolog', description: 'Diagnozujemy i leczymy choroby układu krążenia, w tym nadciśnienie tętnicze, arytmie, niewydolność serca i miażdżycę. Dysponujemy pełnym zapleczem diagnostycznym: EKG spoczynkowe i wysiłkowe, holter EKG i ciśnieniowy, echokardiografia.' },
  { id: 2, slug: 'kardiologia-dziecieca', name: 'Kardiologia dziecięca', menuLabel: 'Kardiolog dziecięcy', description: 'Specjalistyczna opieka kardiologiczna dla dzieci i młodzieży. Diagnostyka wrodzonych wad serca, zaburzeń rytmu oraz ocena kardiologiczna przed aktywnością sportową.' },
  { id: 3, slug: 'ginekologia', name: 'Ginekologia i Położnictwo', menuLabel: 'Ginekolog - Położnictwo', description: 'Kompleksowa opieka ginekologiczna i położnicza. Profilaktyka, diagnostyka USG, cytologia, opieka nad ciążą oraz leczenie chorób narządu rodnego.' },
  { id: 4, slug: 'gastroenterologia', name: 'Gastroenterologia', menuLabel: 'Gastrolog', description: 'Diagnostyka i leczenie chorób przewodu pokarmowego. Gastroskopia, kolonoskopia, leczenie refluksu, choroby wrzodowej, nieswoistych chorób zapalnych jelit.' },
  { id: 5, slug: 'endokrynologia', name: 'Endokrynologia', menuLabel: 'Endokrynolog', description: 'Leczenie zaburzeń hormonalnych i chorób gruczołów wydzielania wewnętrznego: tarczycy, nadnerczy, przysadki. Diagnostyka cukrzycy, osteoporozy i otyłości.' },
  { id: 6, slug: 'ortopedia', name: 'Ortopedia', menuLabel: 'Ortopeda', description: 'Diagnozujemy i leczymy schorzenia narządu ruchu – stawy, kręgosłup, ścięgna i kości. Konsultacje, diagnostyka USG i RTG, iniekcje dostawowe, kwalifikacja do operacji.' },
  { id: 7, slug: 'neurochirurgia', name: 'Neurochirurgia', menuLabel: 'Neurochirurg', description: 'Konsultacje neurochirurgiczne, kwalifikacja do leczenia operacyjnego chorób kręgosłupa, dyskopatii, guzów układu nerwowego i urazów czaszkowo-mózgowych.' },
  { id: 8, slug: 'neurologia', name: 'Neurologia', menuLabel: 'Neurolog', description: 'Diagnostyka i leczenie chorób układu nerwowego: migreny, padaczki, stwardnienia rozsianego, chorób neurodegeneracyjnych. EEG, EMG, konsultacje specjalistyczne.' },
  { id: 9, slug: 'psychiatria', name: 'Psychiatria', menuLabel: 'Psychiatra', description: 'Leczenie zaburzeń psychicznych: depresji, zaburzeń lękowych, ADHD, schizofrenii i innych. Diagnostyka, farmakoterapia i skierowania do psychoterapii.' },
  { id: 10, slug: 'psychologia', name: 'Psychologia', menuLabel: 'Psycholog', description: 'Konsultacje psychologiczne, diagnoza psychologiczna, wsparcie w kryzysach emocjonalnych, psychoterapia indywidualna i grupowa dla dorosłych i dzieci.' },
  { id: 11, slug: 'urologia', name: 'Urologia', menuLabel: 'Urolog', description: 'Diagnostyka i leczenie chorób układu moczowego i płciowego u mężczyzn. Kamica nerkowa, infekcje dróg moczowych, łagodny przerost prostaty, nowotwory urologiczne.' },
  { id: 12, slug: 'dietetyka', name: 'Dietetyka', menuLabel: 'Dietetyk', description: 'Indywidualne plany żywieniowe, leczenie dietetyczne otyłości, cukrzycy i chorób metabolicznych. Wsparcie żywieniowe w terapii chorób przewlekłych.' },
  { id: 13, slug: 'diabetologia', name: 'Diabetologia', menuLabel: 'Diabetolog', description: 'Kompleksowa opieka nad pacjentem z cukrzycą typu 1 i 2. Insulinoterapia, edukacja diabetologiczna, diagnostyka powikłań cukrzycy, holter glikemiczny.' },
  { id: 14, slug: 'medycyna-estetyczna', name: 'Medycyna Estetyczna', menuLabel: 'Medycyna Estetyczna', description: 'Zabiegi medycyny estetycznej wykonywane przez lekarzy: botoks, kwas hialuronowy, mezoterapia, osocze bogatopłytkowe, lipoliza iniekcyjna, peelingi chemiczne.' },
  { id: 15, slug: 'biopsja', name: 'Biopsja', menuLabel: 'Biopsja', description: 'Biopsje aspiracyjne i gruboigłowe pod kontrolą USG: tarczycy, węzłów chłonnych, piersi, wątroby i innych narządów. Szybka diagnostyka histopatologiczna.' },
  { id: 16, slug: 'rehabilitacja', name: 'Rehabilitacja', menuLabel: 'Rehabilitacja', description: 'Kompleksowa rehabilitacja lecznicza, fizjoterapia, kinezyterapia i fizykoterapia. Indywidualnie dobrane programy terapeutyczne dla pacjentów po urazach, operacjach i z chorobami przewlekłymi.' },
  { id: 17, slug: 'diagnostyka-usg', name: 'Diagnostyka USG', menuLabel: 'Diagnostyka USG', description: 'Badania ultrasonograficzne jamy brzusznej, tarczycy, piersi, układu moczowego oraz badania dopplerowskie naczyń krwionośnych. Biopsje pod kontrolą USG.' },
]

export const pricing: PricingCategory[] = [
  {
    id: 1,
    title: 'Kardiologia',
    items: [
      { name: 'Konsultacja kardiologiczna', price: '200 zł' },
      { name: 'EKG spoczynkowe', price: '50 zł' },
      { name: 'EKG wysiłkowe', price: '150 zł' },
      { name: 'Echokardiografia (ECHO serca)', price: '250 zł' },
      { name: 'Holter EKG 24h', price: '180 zł' },
      { name: 'Holter ciśnieniowy 24h', price: '160 zł' },
    ],
  },
  {
    id: 2,
    title: 'Neurologia',
    items: [
      { name: 'Konsultacja neurologiczna', price: '200 zł' },
      { name: 'EEG', price: '200 zł' },
      { name: 'EMG', price: '300 zł' },
    ],
  },
  {
    id: 3,
    title: 'Ortopedia',
    items: [
      { name: 'Konsultacja ortopedyczna', price: '200 zł' },
      { name: 'USG stawu', price: '150 zł' },
      { name: 'Iniekcja dostawowa', price: '300 zł' },
      { name: 'Kwalifikacja do operacji', price: '250 zł' },
    ],
  },
  {
    id: 4,
    title: 'Ginekologia i Położnictwo',
    items: [
      { name: 'Konsultacja ginekologiczna', price: '200 zł' },
      { name: 'Cytologia', price: '80 zł' },
      { name: 'Kolposkopia', price: '200 zł' },
      { name: 'USG ginekologiczne', price: '120 zł' },
      { name: 'Założenie/usunięcie IUD', price: 'od 300 zł' },
    ],
  },
  {
    id: 5,
    title: 'Gastroenterologia',
    items: [
      { name: 'Konsultacja gastroenterologiczna', price: '200 zł' },
      { name: 'Gastroskopia diagnostyczna', price: '400 zł' },
      { name: 'Gastroskopia z biopsją', price: '450 zł' },
      { name: 'Kolonoskopia diagnostyczna', price: '500 zł' },
    ],
  },
  {
    id: 6,
    title: 'Endokrynologia i Diabetologia',
    items: [
      { name: 'Konsultacja endokrynologiczna', price: '200 zł' },
      { name: 'Konsultacja diabetologiczna', price: '200 zł' },
      { name: 'Holter glikemiczny', price: '200 zł' },
    ],
  },
  {
    id: 7,
    title: 'Psychiatria i Psychologia',
    items: [
      { name: 'Konsultacja psychiatryczna', price: '250 zł' },
      { name: 'Konsultacja psychologiczna', price: '180 zł' },
      { name: 'Sesja psychoterapeutyczna', price: '180 zł' },
      { name: 'Diagnoza psychologiczna (ADHD/ASD)', price: 'od 600 zł' },
    ],
  },
  {
    id: 8,
    title: 'Rehabilitacja i Fizjoterapia',
    items: [
      { name: 'Konsultacja fizjoterapeutyczna', price: '120 zł' },
      { name: 'Kinezyterapia (1 sesja)', price: '80 zł' },
      { name: 'Masaż leczniczy', price: '100 zł' },
      { name: 'Kinesiotaping', price: '60 zł' },
      { name: 'Ultradźwięki', price: '40 zł' },
      { name: 'Elektroterapia', price: '40 zł' },
      { name: 'Laser terapeutyczny', price: '50 zł' },
      { name: 'Magnetoterapia', price: '35 zł' },
    ],
  },
  {
    id: 9,
    title: 'USG',
    items: [
      { name: 'USG jamy brzusznej', price: '120 zł' },
      { name: 'USG tarczycy', price: '100 zł' },
      { name: 'USG piersi', price: '120 zł' },
      { name: 'USG układu moczowego', price: '100 zł' },
      { name: 'USG stawów', price: '120 zł' },
      { name: 'USG Doppler naczyń', price: '180 zł' },
      { name: 'Biopsja pod kontrolą USG', price: 'od 350 zł' },
    ],
  },
  {
    id: 10,
    title: 'Medycyna Estetyczna',
    items: [
      { name: 'Konsultacja (bezpłatna przy zabiegu)', price: '0 / 100 zł' },
      { name: 'Botoks (1 obszar)', price: 'od 400 zł' },
      { name: 'Kwas hialuronowy', price: 'od 600 zł' },
      { name: 'Mezoterapia igłowa', price: 'od 350 zł' },
      { name: 'Osocze bogatopłytkowe (PRP)', price: 'od 500 zł' },
      { name: 'Peeling chemiczny', price: 'od 250 zł' },
    ],
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
    photo: '',
    bio: 'Profesor nadzwyczajny i specjalista chorób wewnętrznych z tytułem doktora habilitowanego nauk medycznych. Współzałożyciel Poradni Vitalis w 2014 roku. Posiada wieloletnie doświadczenie w kardiologii klinicznej i diagnostycznej.',
    isFounder: true,
  },
  {
    id: 2,
    slug: 'jacek-nowak',
    titlePrefix: 'dr n. med.',
    name: 'Jacek Nowak',
    role: 'Specjalista chorób wewnętrznych - kardiolog',
    specializationSlug: 'kardiologia',
    photo: '',
    bio: 'Doktor nauk medycznych, specjalista chorób wewnętrznych i kardiologii. Współzałożyciel Poradni Vitalis. Specjalizuje się w diagnostyce i leczeniu arytmii oraz niewydolności serca.',
    isFounder: true,
  },
]
