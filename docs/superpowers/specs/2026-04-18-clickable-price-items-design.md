# Design: Klikalne pozycje cennika → kalendarz rezerwacji

**Data:** 2026-04-18  
**Status:** Zatwierdzone

## Problem

Pozycje cennika w sekcji Offer (akordeon na stronie głównej) są statycznym tekstem. Użytkownik nie może z nich bezpośrednio przejść do rezerwacji wizyty dla danej usługi/specjalizacji.

## Cel

Każda pozycja `li.priceItem` w cenniku, której sekcja ma przypisaną specjalizację, staje się klikalnym linkiem prowadzącym do strony rezerwacji (`/specjalizacje/{slug}/umow-wizyte`). Strona rezerwacji pokazuje kalendarz lub fallback z numerem telefonu — zależnie od `calendarConfig.ts`.

## Zakres

- Tylko cennik w `Offer.tsx` (akordeon na stronie głównej)
- Sekcje bez sluga pozostają niezmienione (statyczne `<li>`)
- Nie zmieniamy istniejących przycisków CTA

## Decyzje projektowe

| Pytanie | Decyzja |
|---|---|
| Brak kalendarza w calendarConfig? | Link nadal aktywny — prowadzi do BookingPage z fallbackiem (nr telefonu) |
| Mapowanie subtitle → slug | Ręczne pole `slug?` w `PricingSection` (nie automatyczna normalizacja) |
| Implementacja linku | `<Link>` wewnątrz `<li>`, owijający pełną zawartość (priceName + priceValue) |

## Zmiany

### 1. `src/types/index.ts`

Dodać `slug?: string` do `PricingSection`:

```ts
export interface PricingSection {
  subtitle: string
  slug?: string   // slug specjalizacji, np. 'kardiologia'
  items: PricingItem[]
}
```

`LocalizedPricingSection` — bez zmian (slug nie podlega tłumaczeniu).

### 2. `src/data/index.ts`

Dla każdej sekcji cennika odpowiadającej specjalizacji z routingu dodać pole `slug`. Sekcje bez odpowiednika w `/specjalizacje` — pole pominięte.

Przykłady mapowania:
- `'Kardiologia'` → `slug: 'kardiologia'`
- `'Poradnia neurologiczna'` → `slug: 'neurologia'`
- `'Poradnia neurochirurgiczna'` → `slug: 'neurochirurgia'`
- `'Poradnia psychiatryczna'` → `slug: 'psychiatria'`
- `'Poradnia endokrynologiczna'` → `slug: 'endokrynologia'`
- `'Poradnia urologiczna'` → `slug: 'urologia'`
- `'Poradnia diabetologiczna'` → `slug: 'diabetologia'`
- `'Poradnia gastroenterologiczna'` → `slug: 'gastroenterologia'`
- i pozostałe sekcje — po weryfikacji z listą `specializations` w danych

### 3. `src/components/sections/Offer/Offer.tsx`

W pętli renderującej `section.items` — warunek na `section.slug`:

```tsx
<ul className={styles.priceList}>
  {section.items.map((item, i) => (
    <li key={i} className={styles.priceItem}>
      {section.slug ? (
        <Link to={`/specjalizacje/${section.slug}/umow-wizyte`}>
          <span className={styles.priceName}>{item.name}</span>
          <span className={styles.priceValue}>{item.price}</span>
        </Link>
      ) : (
        <>
          <span className={styles.priceName}>{item.name}</span>
          <span className={styles.priceValue}>{item.price}</span>
        </>
      )}
    </li>
  ))}
</ul>
```

### 4. `src/components/sections/Offer/Offer.module.scss`

Dla `.priceItem` zawierającego `<a>`:
- `cursor: pointer` na hover
- Brak `text-decoration` na linku
- Subtelny hover state (np. zmiana koloru `priceName` lub tła wiersza)
- Kolor i układ spójne z obecnym wyglądem statycznych wierszy

## Co NIE wchodzi w zakres

- Zmiany w `SpecializationPage` (serviceGroups)
- Nowe przyciski CTA
- Zmiany w `calendarConfig.ts` (konfiguracja kalendarzy to osobne zadanie)
- Tłumaczenia sluga (slug jest invariantem języka)
