# Vitalis — Private Medical Clinic Website

Website for a private medical clinic built with React + TypeScript + SCSS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript 5 |
| Bundler | Vite 5 |
| Styles | SCSS Modules + global variables/mixins |
| Routing | React Router DOM v7 |
| Testing | Jest 29 + Testing Library |
| i18n | Custom context (PL / EN / UA) |

## Project Structure

```
src/
├── components/
│   ├── common/        # Button, Logo, SectionHeader, LanguageSwitcher
│   ├── layout/        # Header, NavigationMenu, Footer, PageLayout
│   ├── sections/      # Hero, Features, Services, About, Team, Contact
│   └── ui/            # WaveText, Reveal, MapPopover
├── features/
│   └── calendar/      # CalendarSlot — booking widget (e-rejestracja.mp.pl iframe)
├── hooks/
│   └── useLanguage    # LanguageProvider + hook + t() function
├── i18n/              # Dictionaries: pl.ts, en.ts, ua.ts
├── data/              # Static data (specializations, calendar config)
├── pages/             # HomePage, SpecializationsPage, SpecializationPage, BookingPage
├── styles/            # SCSS variables, reset, typography, mixins
└── types/             # Global types
```

## Routes

| Path | Page |
|---|---|
| `/` | Home (Hero → Features → Services → About → Team → Contact) |
| `/specjalizacje` | Specializations list |
| `/specjalizacje/:slug` | Specialization detail |
| `/specjalizacje/:slug/umow-wizyte` | Booking page (lazy-loaded) |

## Getting Started

```bash
npm install
npm run dev        # dev server: http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
npm test           # unit tests
npm run test:coverage
```

## Internationalisation

Language is stored in `localStorage` (key: `vitalis-lang`). Auto-detected from the browser — Ukrainian (`uk`) → `ua`, English → `en`, everything else → `pl`.

Translations: `src/i18n/pl.ts` | `src/i18n/en.ts` | `src/i18n/ua.ts`

## Online Booking

`CalendarSlot` (`src/features/calendar/`) embeds the e-rejestracja.mp.pl booking portal via iframe. Specializations without a calendar URL fall back to a phone contact screen. URL mappings are defined in `src/data/calendarConfig.ts`.

## Colour Palette

| Variable | Value | Usage |
|---|---|---|
| `$color-primary` | `#C41E3A` | Primary accent (medical red) |
| `$color-secondary` | `#1B4965` | Headings, accent backgrounds |
| `$color-bg` | `#F8F8FA` | Section backgrounds |
| `$color-bg-dark` | `#1A2332` | Footer |
