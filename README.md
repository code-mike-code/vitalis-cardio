# Vitalis — Strona Gabinetu Stomatologicznego

Strona internetowa prywatnego gabinetu stomatologicznego zbudowana w React + TypeScript + SCSS.

## Stos technologiczny

| Warstwa | Technologia |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Bundler | Vite 5 |
| Style | SCSS Modules + globalne zmienne/mixiny |
| Routing | React Router DOM v7 |
| Testy | Jest 29 + Testing Library |
| i18n | Własny kontekst (PL / EN / UA) |

## Struktura projektu

```
src/
├── components/
│   ├── common/        # Button, Logo, SectionHeader, LanguageSwitcher
│   ├── layout/        # Header, NavigationMenu, Footer, PageLayout
│   ├── sections/      # Hero, Features, Services, About, Team, Contact
│   └── ui/            # WaveText, Reveal, MapPopover
├── features/
│   └── calendar/      # CalendarSlot — placeholder widgetu rezerwacji
├── hooks/
│   └── useLanguage    # LanguageProvider + hook + funkcja t()
├── i18n/              # Słowniki: pl.ts, en.ts, ua.ts
├── data/              # Dane statyczne (specjalizacje, konfiguracja kalendarza)
├── pages/             # HomePage, SpecializationsPage, SpecializationPage, BookingPage
├── styles/            # Zmienne SCSS, reset, typografia, mixiny
└── types/             # Typy globalne
```

## Podstrony (routing)

| Ścieżka | Strona |
|---|---|
| `/` | Strona główna (Hero → Features → Services → About → Team → Contact) |
| `/specjalizacje` | Lista specjalizacji |
| `/specjalizacje/:slug` | Szczegóły specjalizacji |
| `/specjalizacje/:slug/umow-wizyte` | Formularz rezerwacji (lazy-loaded) |

## Uruchomienie

```bash
npm install
npm run dev        # dev server: http://localhost:5173
npm run build      # produkcja → dist/
npm run preview    # podgląd buildu
npm test           # testy jednostkowe
npm run test:coverage
```

## Internacjonalizacja

Język przechowywany w `localStorage` (klucz: `vitalis-lang`). Domyślnie wykrywany z przeglądarki — ukraiński (`uk`) → `ua`, angielski → `en`, reszta → `pl`.

Tłumaczenia: `src/i18n/pl.ts` | `src/i18n/en.ts` | `src/i18n/ua.ts`

## Rezerwacja wizyt

`CalendarSlot` (`src/features/calendar/`) to placeholder pod widget medycynaPraktyczna. Szczegóły integracji opisane są w komentarzach komponentu.

## Paleta kolorów

| Zmienna | Wartość | Użycie |
|---|---|---|
| `$color-primary` | `#C41E3A` | Akcent główny (czerwień medyczna) |
| `$color-secondary` | `#1B4965` | Nagłówki, tła akcentowe |
| `$color-bg` | `#F8F8FA` | Tło sekcji |
| `$color-bg-dark` | `#1A2332` | Footer |
