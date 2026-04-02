import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './TermsPage.module.scss'

const LAST_UPDATED = '1 kwietnia 2026 r.'
const ADMIN_NAME = 'Vitalis Nowak i Żurakowski Sp. z o.o.'
const ADMIN_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const SERVICE_EMAIL = 'kontakt@vitalis.pl'

function TermsPage() {
  return (
    <PageLayout>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.label}>Dokument prawny</span>
          <h1 className={styles.title}>Regulamin Serwisu</h1>
          <p className={styles.meta}>Ostatnia aktualizacja: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className={styles.article}>
        <div className={styles.container}>

          <section className={styles.section}>
            <h2>§ 1. Postanowienia ogólne</h2>
            <ol>
              <li>Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem <strong>klinika-vitalis.pl</strong> (dalej: „Serwis").</li>
              <li>Właścicielem i operatorem Serwisu jest <strong>{ADMIN_NAME}</strong>, {ADMIN_ADDRESS} (dalej: „Usługodawca").</li>
              <li>Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</li>
              <li>Regulamin jest dostępny nieodpłatnie pod adresem klinika-vitalis.pl/regulamin, umożliwiającym jego pobranie, utrwalenie i wydrukowanie.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 2. Definicje</h2>
            <ul>
              <li><strong>Serwis</strong> — serwis internetowy Vitalis dostępny pod adresem klinika-vitalis.pl,</li>
              <li><strong>Użytkownik</strong> — każda osoba fizyczna korzystająca z Serwisu,</li>
              <li><strong>Usługodawca</strong> — {ADMIN_NAME},</li>
              <li><strong>Rejestracja online</strong> — usługa umożliwiająca umówienie wizyty w Poradni za pośrednictwem Serwisu,</li>
              <li><strong>Treści</strong> — wszelkie materiały dostępne w Serwisie (teksty, zdjęcia, grafiki, filmy, logotypy).</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>§ 3. Rodzaj i zakres usług</h2>
            <ol>
              <li>Serwis świadczy następujące usługi drogą elektroniczną:
                <ul>
                  <li>udostępnianie informacji o Poradni, jej specjalistach i ofercie medycznej,</li>
                  <li>rejestracja wizyt online,</li>
                  <li>udostępnianie dokumentów i informacji prawnych (RODO, regulamin, polityka prywatności).</li>
                </ul>
              </li>
              <li>Usługi świadczone są nieodpłatnie, z zastrzeżeniem, że skorzystanie z usług medycznych wiąże się z cennikiem Poradni.</li>
              <li>Wymagania techniczne: dostęp do Internetu, przeglądarka internetowa obsługująca HTML5 i CSS3, włączona obsługa JavaScript.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 4. Rejestracja wizyt online</h2>
            <ol>
              <li>Rejestracja online umożliwia umówienie wizyty w Poradni Vitalis za pośrednictwem Serwisu lub systemu zewnętrznego obsługiwanego przez partnera Usługodawcy.</li>
              <li>Rejestrując wizytę, Użytkownik zobowiązuje się do podania prawdziwych danych osobowych.</li>
              <li>Usługodawca potwierdza wizytę telefonicznie lub za pośrednictwem wiadomości SMS/e-mail.</li>
              <li>Odwołanie wizyty powinno nastąpić najpóźniej na 24 godziny przed wyznaczonym terminem — telefonicznie lub poprzez Serwis.</li>
              <li>Usługodawca zastrzega sobie prawo do odwołania lub zmiany terminu wizyty z przyczyn niezależnych (choroba specjalisty, awaria systemu). W takim przypadku Użytkownik zostanie poinformowany niezwłocznie.</li>
              <li>Rejestracja online stanowi wyłącznie umówienie terminu wizyty i nie jest równoznaczna z udzieleniem świadczenia zdrowotnego.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 5. Obowiązki Użytkownika</h2>
            <ol>
              <li>Użytkownik zobowiązuje się do korzystania z Serwisu zgodnie z przepisami prawa, postanowieniami niniejszego Regulaminu oraz dobrymi obyczajami.</li>
              <li>Zabrania się w szczególności:
                <ul>
                  <li>podawania fałszywych danych osobowych,</li>
                  <li>działań mogących zakłócić prawidłowe funkcjonowanie Serwisu,</li>
                  <li>prób nieautoryzowanego dostępu do systemów Usługodawcy,</li>
                  <li>kopiowania, modyfikowania lub dystrybuowania treści Serwisu bez zgody Usługodawcy.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 6. Własność intelektualna</h2>
            <ol>
              <li>Wszystkie treści dostępne w Serwisie (teksty, grafiki, logotypy, zdjęcia, filmy) są własnością Usługodawcy lub zostały przez niego licencjonowane i podlegają ochronie prawa autorskiego.</li>
              <li>Jakiekolwiek kopiowanie, reprodukowanie, modyfikowanie lub inne korzystanie z treści Serwisu bez uprzedniej pisemnej zgody Usługodawcy jest zabronione.</li>
              <li>Zezwala się na drukowanie i pobieranie treści wyłącznie na własny użytek, niekomercyjny.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 7. Odpowiedzialność</h2>
            <ol>
              <li>Usługodawca nie ponosi odpowiedzialności za:
                <ul>
                  <li>przerwy w dostępie do Serwisu wynikające z przyczyn technicznych lub awarii,</li>
                  <li>treści zamieszczane przez użytkowników w formularzach,</li>
                  <li>skutki korzystania z Serwisu w sposób niezgodny z Regulaminem,</li>
                  <li>działania lub zaniechania podmiotów trzecich (w tym systemów rezerwacji).</li>
                </ul>
              </li>
              <li>Informacje medyczne zawarte w Serwisie mają wyłącznie charakter informacyjny i nie stanowią porady medycznej ani diagnozy. W sprawach zdrowotnych należy skonsultować się z lekarzem.</li>
              <li>Usługodawca dołoży wszelkich starań, aby Serwis działał nieprzerwanie, jednak nie gwarantuje braku przerw technicznych.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 8. Reklamacje</h2>
            <ol>
              <li>Reklamacje dotyczące świadczonych usług elektronicznych można składać:
                <ul>
                  <li>pocztą elektroniczną na adres: <a href={`mailto:${SERVICE_EMAIL}`}>{SERVICE_EMAIL}</a></li>
                  <li>pisemnie na adres: {ADMIN_ADDRESS}</li>
                </ul>
              </li>
              <li>Reklamacja powinna zawierać: dane kontaktowe, opis problemu, datę wystąpienia.</li>
              <li>Usługodawca rozpatruje reklamacje w terminie 14 dni roboczych od daty otrzymania.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 9. Zmiany Regulaminu</h2>
            <ol>
              <li>Usługodawca zastrzega sobie prawo do zmiany niniejszego Regulaminu.</li>
              <li>O zmianach Użytkownicy będą informowani poprzez zamieszczenie nowej wersji Regulaminu w Serwisie z aktualizacją daty.</li>
              <li>Zmiany wchodzą w życie z dniem opublikowania, chyba że Usługodawca postanowi inaczej.</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2>§ 10. Postanowienia końcowe</h2>
            <ol>
              <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu Cywilnego oraz ustawy z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną.</li>
              <li>Ewentualne spory wynikające ze świadczenia usług drogą elektroniczną rozstrzygane będą przez sąd właściwy dla siedziby Usługodawcy.</li>
              <li>Konsumenci mogą skorzystać z pozasądowych metod rozstrzygania sporów, w tym platformy ODR dostępnej pod adresem ec.europa.eu/consumers/odr.</li>
            </ol>
          </section>

        </div>
      </article>
    </PageLayout>
  )
}

export default TermsPage
