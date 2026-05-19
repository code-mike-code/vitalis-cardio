import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import styles from './Breadcrumb.module.scss'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
}

function Breadcrumb({ items }: Props) {
  const { t } = useLanguage()

  return (
    <nav aria-label={t('common.breadcrumbNav')} className={styles.breadcrumb}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={i} className={styles.item}>
              {i > 0 && <span className={styles.sep} aria-hidden="true">›</span>}
              {!isLast && item.href ? (
                <Link to={item.href} className={styles.link}>{item.label}</Link>
              ) : (
                <span
                  aria-current={isLast ? 'page' : undefined}
                  className={isLast ? styles.current : styles.link}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
