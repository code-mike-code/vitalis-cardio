/**
 * Mapa slug specjalizacji → serviceId w systemie medycynaPraktyczna.
 *
 * Jak uzupełnić:
 *  1. Zaloguj się do panelu medycynaPraktyczna
 *  2. Wejdź w Ustawienia → Widget → wybierz specjalizację/lekarza
 *  3. Skopiuj ID usługi i wklej jako wartość dla odpowiedniego klucza
 *
 * Specjalizacje bez serviceId pokażą fallback z numerem telefonu.
 */
export const calendarConfig: Record<string, string> = {
  // kardiologia:             'MP_SERVICE_ID_HERE',
  // 'kardiologia-dziecieca': 'MP_SERVICE_ID_HERE',
  // ginekologia:             'MP_SERVICE_ID_HERE',
  // gastroenterologia:       'MP_SERVICE_ID_HERE',
  // endokrynologia:          'MP_SERVICE_ID_HERE',
  // ortopedia:               'MP_SERVICE_ID_HERE',
  // neurochirurgia:          'MP_SERVICE_ID_HERE',
  // neurologia:              'MP_SERVICE_ID_HERE',
  // psychiatria:             'MP_SERVICE_ID_HERE',
  // psychologia:             'MP_SERVICE_ID_HERE',
  // urologia:                'MP_SERVICE_ID_HERE',
  // dietetyka:               'MP_SERVICE_ID_HERE',
  // diabetologia:            'MP_SERVICE_ID_HERE',
  // 'medycyna-estetyczna':   'MP_SERVICE_ID_HERE',
  // biopsja:                 'MP_SERVICE_ID_HERE',
}
