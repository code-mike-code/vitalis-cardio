import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { specializations } from '@/data'
import styles from './Footer.module.scss'
import logoNfz from '@/assets/logo/logo-nfz.webp'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'

const MAPS_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const MAPS_LINK = `https://maps.google.com/?q=${encodeURIComponent(MAPS_ADDRESS)}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_ADDRESS)}&output=embed&hl=pl`

function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      {/* NAV ROWS */}
      <div className={styles.nav}>
        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t('nav.contactInfo')}</h3>
            <p><a href="tel:+48221234567">tel: 22 123 45 67</a></p>
            <p><a href="tel:+48500100200">tel: 500 100 200</a></p>
            <p><a href="tel:+48500100300">tel: 500 100 300</a></p>
            <p><a href="tel:+48500100400">tel: 500 100 400</a></p>
            <p><a href="tel:+48500100500">tel: 500 100 500</a></p>
            <p><a href="mailto:kontakt@vitalis.pl">email: kontakt@vitalis.pl</a></p>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t('nav.openingHours')}</h3>
            <p>{t('nav.weekdaysHours')}</p>
            <p>{t('nav.saturdayHours')}</p>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t('nav.address')}</h3>
            <a
              className={styles.addressBtn}
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 {t('nav.addressValue')}
            </a>
            <div className={styles.mapThumb}>
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Mapa"
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapOverlay}
                aria-label={t('common.openInMaps')}
              />
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t('nav.specializations')}</h3>
            <div className={styles.specGrid}>
              {specializations.filter(s => !s.hideFromMenu).map(spec => (
                <Link key={spec.id} to={`/specjalizacje/${spec.slug}`} className={styles.specLink}>
                  {spec.menuLabel}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.subRow}>
              <h3 className={styles.colTitle}>{t('nav.services')}</h3>
              <ul className={styles.serviceList}>
                <li>
                  <Link to="/specjalizacje/rehabilitacja">
                    {t('nav.serviceRehab')}
                  </Link>
                </li>
                <li>
                  <Link to="/specjalizacje/diagnostyka-usg">
                    {t('nav.serviceUsg')}
                  </Link>
                </li>
                <li>
                  <Link to="/specjalizacje/medycyna-estetyczna">
                    {t('nav.serviceAesthetic')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.subRow}>
              <h3 className={styles.colTitle}>{t('nav.partners')}</h3>
              <div className={styles.partners}>
                <div className={styles.partnerItem}>
                  <Link to="/partnerzy/nfz" className={styles.partnerLink}>
                    <img src={logoNfz} alt="NFZ" className={styles.partnerLogoNfz} />
                  </Link>
                </div>
                <div className={styles.partnerItem}>
                  <Link to="/partnerzy/luxmed" className={styles.partnerLink}>
                    <img src={logoLuxmed} alt="LuxMed" className={styles.partnerLogoLux} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t('nav.siteMenu')}</h3>
            <nav className={styles.siteNav}>
              <Link to="/#about">{t('nav.linkAbout')}</Link>
              <Link to="/#offer">{t('nav.linkPricing')}</Link>
              <Link to="/#team">{t('nav.linkTeam')}</Link>
              <Link to="/#reviews">{t('nav.linkReviews')}</Link>
              <hr className={styles.separator} />
              <Link to="/rodo" className={styles.legal}>{t('nav.linkRodo')}</Link>
              <Link to="/prywatnosc" className={styles.legal}>{t('nav.linkPrivacy')}</Link>
              <Link to="/regulamin" className={styles.legal}>{t('nav.linkTerms')}</Link>
            </nav>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className={styles.bottom}>
        <span>©</span>
        <p>{currentYear} {t('footer.copyright')}</p>
      </div>

    </footer>
  )
}

export default Footer
