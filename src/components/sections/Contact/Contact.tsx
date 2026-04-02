import { contactInfo } from '@/data'
import Button from '@components/common/Button/Button'
import SectionHeader from '@components/common/SectionHeader/SectionHeader'
import styles from './Contact.module.scss'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <SectionHeader
          title="Umów wizytę"
          subtitle="Skontaktuj się z nami telefonicznie lub wypełnij formularz. Odpowiemy najszybciej jak to możliwe."
        />
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h4>Adres</h4>
                  <p>{contactInfo.address}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h4>Telefon</h4>
                  <p><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" fill="none"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" fill="currentColor"/></svg>
                </div>
                <div>
                  <h4>Godziny otwarcia</h4>
                  <p>{contactInfo.hours}</p>
                </div>
              </div>
            </div>

            <div className={styles.mapPlaceholder}>
              <div className={styles.mapContent}>
                <svg viewBox="0 0 24 24" fill="none" className={styles.mapIcon}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.3"/>
                  <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
                </svg>
                <p>Mapa zostanie dodana wkrótce</p>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={e => e.preventDefault()}>
            <h3 className={styles.formTitle}>Formularz kontaktowy</h3>
            <p className={styles.formSubtitle}>Wypełnij poniższy formularz, a nasz zespół skontaktuje się z Tobą w ciągu 24h.</p>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Imię i nazwisko</label>
                <input id="name" type="text" placeholder="Jan Kowalski" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">Telefon</label>
                <input id="phone" type="tel" placeholder="+48 123 456 789" />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="jan@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="specialty">Wybierz poradnię</label>
              <select id="specialty" defaultValue="">
                <option value="" disabled>Wybierz specjalizację...</option>
                <option value="cardiology">Kardiologia</option>
                <option value="orthopedics">Ortopedia</option>
                <option value="neurology">Neurologia</option>
                <option value="rehabilitation">Rehabilitacja</option>
                <option value="internal">Internista</option>
                <option value="physiotherapy">Fizjoterapia</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" rows={4} placeholder="Opisz swoje potrzeby..." />
            </div>
            <Button type="submit" size="lg" className={styles.submitBtn}>
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
