# Wytyczne dla Claude Code — Vitalis

## Kontekst projektu

Strona prywatnego gabinetu stomatologicznego. Stack: React 18 + TypeScript 5 + SCSS Modules + Vite 5 + Jest. Trzy języki: PL (domyślny), EN, UA.

## Zasady pracy z kodem

### Komponenty

- Każdy komponent w osobnym katalogu: `ComponentName/ComponentName.tsx` + `ComponentName.module.scss`.
- Testy obok komponentu: `ComponentName.test.tsx`.
- Style wyłącznie przez SCSS Modules — bez inline styles, bez Tailwind, bez CSS-in-JS.
- Wszystkie zmienne kolorów/spacingów/breakpointów z `src/styles/_variables.scss`.

### Typowanie

- Zawsze TypeScript — żadnych `any`, żadnych rzutowań bez uzasadnienia.
- Typy propsów jako `interface`, nie `type`, chyba że potrzebna unia.
- Eksportuj typy używane poza plikiem przez `src/types/`.

### Internacjonalizacja

- Każdy string widoczny dla użytkownika musi przechodzić przez `t()` z `useLanguage`.
- Dodając nowy klucz: aktualizuj wszystkie trzy pliki słowników (`pl.ts`, `en.ts`, `ua.ts`).
- Klucze płaskie z separatorem kropką, np. `hero.ctaPrimary`.

### Routing

- Ścieżki po polsku zgodnie z istniejącym schematem: `/specjalizacje`, `/specjalizacje/:slug`.
- Strony renderujące duże zewnętrzne biblioteki: lazy-load przez `React.lazy` + `Suspense`.

### Testy

- Testing Library — zawsze `getByRole` / `getByText` przed `getByTestId`.
- Nie mockuj SCSS Modules (skonfigurowany `identity-obj-proxy`).
- Testy jednostkowe tylko dla logiki i renderowania — nie testuj implementacji.

## Czego nie robić

- Nie instaluj zewnętrznych bibliotek UI (MUI, Chakra, Radix itp.) bez wyraźnej prośby.
- Nie zmieniaj palety kolorów ani typografii w `_variables.scss` bez uzgodnienia.
- Nie dodawaj animacji JS tam, gdzie wystarczy CSS transition/animation.
- Nie twórz pośrednich abstrakcji i helperów „na zapas" — tylko to, co jest aktualnie potrzebne.
- Nie usuwaj komentarzy `TODO` z `CalendarSlot` — oznaczają otwarte zadanie integracji.

## Struktura katalogów (skrót)

```
src/components/common/    # drobne elementy wielokrotnego użytku
src/components/layout/    # Header, Footer, PageLayout
src/components/sections/  # sekcje strony głównej
src/components/ui/        # animacje, popovery, efekty wizualne
src/features/calendar/    # widget rezerwacji (placeholder)
src/hooks/                # useLanguage
src/i18n/                 # słowniki pl / en / ua
src/data/                 # dane statyczne (specjalizacje, konfiguracja)
src/pages/                # komponenty stron (routing)
src/styles/               # globalne SCSS (zmienne, reset, typografia)
src/types/                # typy globalne
```

## Komendy

```bash
npm run dev            # dev server
npm run build          # produkcja
npm test               # testy
npm run test:coverage  # pokrycie
```
