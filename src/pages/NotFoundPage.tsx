import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'
import styles from './NotFoundPage.module.scss'

function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <PageLayout>
      <div className={styles.container}>
        <h1 className={styles.code}>404</h1>
        <p>{t('notFound.message')}</p>
        <Link to="/">{t('notFound.backHome')}</Link>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
