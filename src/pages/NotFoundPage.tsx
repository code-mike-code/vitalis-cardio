import { Link } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import PageLayout from '@components/layout/PageLayout/PageLayout'

function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <PageLayout>
      <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 700, opacity: 0.15 }}>404</h1>
        <p>{t('notFound.message')}</p>
        <Link to="/">{t('notFound.backHome')}</Link>
      </div>
    </PageLayout>
  )
}

export default NotFoundPage
