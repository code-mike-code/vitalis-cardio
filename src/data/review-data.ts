/**
 * Ręcznie zarządzane recenzje pacjentów (wyłącznie 4–5 gwiazdek).
 *
 * Dlaczego nie pobieramy automatycznie z Google?
 * ─────────────────────────────────────────────
 * • Google Places API (klient)  → zwraca max 5 najnowszych recenzji,
 *   bez możliwości filtrowania po gwiazdkach. Wymaga klucza API
 *   widocznego publicznie → ryzyko nadużycia.
 * • Google My Business API       → wymaga OAuth 2.0 po stronie backendu
 *   (serwer z tokenem odświeżającym). Nie nadaje się do front-end only.
 *
 * Jak dodawać recenzje:
 * ─────────────────────
 * Skopiuj obiekt z `reviews` i uzupełnij pola. Pamiętaj o unikalnym `id`.
 * Dodawaj tylko recenzje z oceną 4 lub 5 gwiazdek.
 */

export type StarRating = 4 | 5

export interface Review {
  id: number
  author: string
  /** Inicjały do awatara (gdy brak zdjęcia) */
  initials: string
  rating: StarRating
  /** Treść opinii */
  text: string
  /** Format: YYYY-MM-DD */
  date: string
  /** Opcjonalny URL zdjęcia profilowego */
  photo?: string
}

export const reviews: Review[] = [
  {
    id: 1,
    author: 'Katarzyna W.',
    initials: 'KW',
    rating: 5,
    text: 'Wizyta u kardiologa przebiegła sprawnie i profesjonalnie. Pan doktor poświęcił mi dużo czasu, dokładnie wyjaśnił wyniki badań i odpowiedział na wszystkie pytania. Miła obsługa w rejestracji. Zdecydowanie polecam.',
    date: '2025-11-03',
  },
  {
    id: 2,
    author: 'Marek T.',
    initials: 'MT',
    rating: 5,
    text: 'Korzystam z usług Vitalis od ponad roku – rehabilitacja po operacji kolana. Wyniki przeszły moje oczekiwania. Fizjoterapeuci są kompetentni i naprawdę zaangażowani. Wróciłem do pełnej sprawności dużo szybciej niż przewidywał ortopeda.',
    date: '2025-10-19',
  },
  {
    id: 3,
    author: 'Anna S.',
    initials: 'AS',
    rating: 5,
    text: 'Polecam całą poradnię. Korzystałam z ginekologii i USG – obie wizyty na najwyższym poziomie. Czysty, nowoczesny gabinet, rejestracja przez internet działa bez zarzutu. Wreszcie klinika, która szanuje czas pacjenta.',
    date: '2025-10-07',
  },
  {
    id: 4,
    author: 'Piotr K.',
    initials: 'PK',
    rating: 4,
    text: 'Dobra lokalizacja, krótki czas oczekiwania na wizytę. Neurolog bardzo kompetentny, diagnoza postawiona szybko. Jedyne zastrzeżenie – parking przed kliniką bywa zapełniony w godzinach szczytu. Ogólnie zdecydowanie warto.',
    date: '2025-09-22',
  },
  {
    id: 5,
    author: 'Joanna M.',
    initials: 'JM',
    rating: 5,
    text: 'Trafiłam na medycynę estetyczną i jestem zachwycona. Lekarka podeszła do tematu bardzo rzetelnie – nie sprzedawała na siłę zabiegów, doradziła dokładnie to, czego potrzebowałam. Wyniki naturalne i zgodne z oczekiwaniami. Na pewno wrócę.',
    date: '2025-09-10',
  },
  {
    id: 6,
    author: 'Tomasz R.',
    initials: 'TR',
    rating: 5,
    text: 'Syn korzystał z kardiologii dziecięcej. Pani doktor była niezwykle cierpliwa i spokojnie wyjaśniła nam wszystko. Dziecko absolutnie się nie bało. To rzadkość – specjalista, który potrafi rozmawiać zarówno z rodzicem, jak i z małym pacjentem.',
    date: '2025-08-28',
  },
  {
    id: 7,
    author: 'Monika L.',
    initials: 'ML',
    rating: 5,
    text: 'Kompleksowa diagnostyka USG w jednym dniu – jama brzuszna, tarczyca i badanie dopplerowskie. Sprzęt nowoczesny, wyniki od razu omówione z lekarzem. Bardzo sprawna organizacja, zero niepotrzebnego czekania.',
    date: '2025-08-14',
  },
  {
    id: 8,
    author: 'Dariusz B.',
    initials: 'DB',
    rating: 4,
    text: 'Psychiatra – w końcu trafiłem na kogoś, kto naprawdę słucha. Żadnego pośpiechu, szczera rozmowa, profesjonalne podejście. Wizyta trwała ponad godzinę. Cena uczciwa jak na prywatną opiekę psychiatryczną. Szczerze polecam.',
    date: '2025-07-30',
  },
]
