/**
 * Manually managed patient reviews (4–5 stars only).
 *
 * Why not fetch automatically from Google?
 * ─────────────────────────────────────────────
 * • Google Places API (client)  → returns max 5 newest reviews,
 *   with no way to filter by star rating. Requires an API key
 *   exposed publicly → risk of abuse.
 * • Google My Business API       → requires OAuth 2.0 on the backend
 *   (server with a refresh token). Not suitable for front-end only.
 *
 * How to add reviews:
 * ─────────────────────
 * Copy an object from `reviews` and fill in the fields. Remember a unique `id`.
 * Only add reviews with a rating of 4 or 5 stars.
 */

export type StarRating = 4 | 5

export interface Review {
  id: number
  author: string
  /** Avatar initials (used when no photo is available) */
  initials: string
  rating: StarRating
  /** Review text */
  text: string
  /** Format: YYYY-MM-DD */
  date: string
  /** Optional profile photo URL */
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
