import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './NavigationMenu.module.scss'
import { useLanguage } from '@/hooks/useLanguage'
import { specializations } from '@/data'
import { scrollToHash } from '@components/ui/ScrollToHash'
import logoNfz from '@/assets/logo/logo-nfz.webp'
import logoLuxmed from '@/assets/logo/logo-luxmed.png'

const MAPS_ADDRESS = 'ul. Kopernika 25, 32-540 Trzebinia'
const MAPS_LINK = `https://maps.google.com/?q=${encodeURIComponent(MAPS_ADDRESS)}`
const MAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_ADDRESS)}&output=embed&hl=pl`

interface Props {
  isOpen: boolean
  onClose: () => void
  isFooter?: boolean
}

const NavigationMenu = ({ isOpen, onClose, isFooter = false }: Props) => {
  const { t, language } = useLanguage()
  const langKey = language as 'en' | 'ua'
  const location = useLocation()
  const navigate = useNavigate()

  function handleHashLink(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault()
    onClose()
    if (location.pathname === '/') {
      scrollToHash(hash)
    } else {
      navigate(`/#${hash}`)
    }
  }
  const specLabel = (spec: (typeof specializations)[number]) =>
    spec.translations?.[langKey]?.menuLabel ?? spec.menuLabel

  return (
    <div className={`${styles.menuOverlay} ${isOpen ? styles.active : ''} ${isFooter ? styles.footerTheme : ''}`}>

      {/* ── MOBILE LAYOUT (order: siteNav → phones → CTA → specGrid) ── */}
      <div className={styles.mobileMenu}>
        <nav className={styles.mobileSiteNav}>
          <a href="/#about" onClick={e => handleHashLink(e, 'about')}>{t('nav.linkAbout')}</a>
          <a href="/#pricing" onClick={e => handleHashLink(e, 'pricing')}>{t('nav.linkPricing')}</a>
          <Link to="/zespol" onClick={onClose}>{t('nav.linkTeam')}</Link>
          <a href="/#reviews" onClick={e => handleHashLink(e, 'reviews')}>{t('nav.linkReviews')}</a>
        </nav>

        <div className={styles.mobilePhones}>
          <a href="tel:+48322109866">tel: 32 210 98 66</a>
          <a href="tel:+48326200293">tel: 32 620 02 93</a>
          <a href="tel:+48322109855">tel: 32 210 98 55</a>
          <a href="tel:+48322109865">tel: 32 210 98 65</a>
          <a href="tel:+48733433494">tel: 733 433 494</a>
          <a href="mailto:jnvitalis@wp.pl">jnvitalis@wp.pl</a>
        </div>

        <Link to="/specjalizacje" className={styles.mobileCta} onClick={onClose}>
          {t('header.bookAppointment')}
        </Link>

        <div className={styles.mobileSpecs}>
          <h2>{t('nav.specializations')}</h2>
          <div className={styles.mobileSpecGrid}>
            {specializations.filter(s => !s.hideFromMenu && !s.hidden).map(spec => (
              <Link
                key={spec.id}
                to={`/specjalizacje/${spec.slug}`}
                className={styles.specLink}
                onClick={onClose}
              >
                {specLabel(spec)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP ROW 2: KONTAKT / GODZINY / ADRES ──────────────── */}
      <div className={styles.row2}>
        <div className={styles.col}>
          <h2>{t('nav.contactInfo')}</h2>
          <p><a href="tel:+48322109866">tel: 32 210 98 66</a></p>
          <p><a href="tel:+48326200293">tel: 32 620 02 93</a></p>
          <p><a href="tel:+48322109855">tel: 32 210 98 55</a></p>
          <p><a href="tel:+48322109865">tel: 32 210 98 65</a></p>
          <p><a href="tel:+48733433494">tel: 733 433 494</a></p>
          <p><a href="mailto:jnvitalis@wp.pl">email: jnvitalis@wp.pl</a></p>
        </div>
        <div className={styles.col}>
          <h2>{t('nav.openingHours')}</h2>
          <p>{t('nav.weekdaysHours')}</p>
        </div>
        <div className={styles.col}>
          <h2>{t('nav.address')}</h2>
          <a
            className={styles.addressLink}
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
              title={t('common.mapDirections')}
              sandbox="allow-scripts allow-same-origin"
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

      {/* ── DESKTOP ROW 3: PORADNIE / USŁUGI / MENU ───────────────── */}
      <div className={styles.row3}>
        <div className={styles.col}>
          <h2>{t('nav.specializations')}</h2>
          <div className={styles.specializationGrid}>
            {specializations.filter(s => !s.hideFromMenu && !s.hidden).map(spec => (
              <Link
                key={spec.id}
                to={`/specjalizacje/${spec.slug}`}
                className={styles.specLink}
                onClick={onClose}
              >
                {specLabel(spec)}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.subRow}>
            <h2>{t('nav.services')}</h2>
            <ul className={styles.serviceList}>
              <li>
                <Link to="/specjalizacje/rehabilitacja" onClick={onClose}>
                  {t('nav.serviceRehab')}
                </Link>
              </li>
              <li>
                <Link to="/specjalizacje/diagnostyka-usg" onClick={onClose}>
                  {t('nav.serviceUsg')}
                </Link>
              </li>
              <li>
                <Link to="/specjalizacje/medycyna-estetyczna" onClick={onClose}>
                  {t('nav.serviceAesthetic')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.subRow}>
            <h2>{t('nav.partners')}</h2>
            <div className={styles.partnerLogos}>
              <div className={styles.partnerItem}>
                <Link to="/partnerzy/nfz" className={styles.partnerLink} onClick={onClose}>
                  <img src={logoNfz} alt="NFZ" className={styles.partnerLogoNfz} />
                </Link>
              </div>
              <div className={styles.partnerItem}>
                <Link to="/partnerzy/luxmed" className={styles.partnerLink} onClick={onClose}>
                  <img src={logoLuxmed} alt="LuxMed" className={styles.partnerLogoLux} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <h2>{t('nav.siteMenu')}</h2>
          <nav className={styles.siteNav}>
            <a href="/#about" onClick={e => handleHashLink(e, 'about')}>{t('nav.linkAbout')}</a>
            <a href="/#pricing" onClick={e => handleHashLink(e, 'pricing')}>{t('nav.linkPricing')}</a>
            <Link to="/zespol" onClick={onClose}>{t('nav.linkTeam')}</Link>
            <a href="/#reviews" onClick={e => handleHashLink(e, 'reviews')}>{t('nav.linkReviews')}</a>
            <hr className={styles.separator} />
            <Link to="/rodo" className={styles.legal} onClick={onClose}>{t('nav.linkRodo')}</Link>
            <Link to="/prywatnosc" className={styles.legal} onClick={onClose}>{t('nav.linkPrivacy')}</Link>
            <Link to="/regulamin" className={styles.legal} onClick={onClose}>{t('nav.linkTerms')}</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavigationMenu
