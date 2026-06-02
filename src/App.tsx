import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage'
import ScrollToHash from '@components/ui/ScrollToHash'
import CookieConsent from '@components/ui/CookieConsent/CookieConsent'
import FacebookWidget from '@components/ui/FacebookWidget/FacebookWidget'
import HomePage from '@/pages/HomePage'
import RodoPage from '@/pages/RodoPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import PartnerNfzPage from '@/pages/PartnerNfzPage'
import PartnerLuxmedPage from '@/pages/PartnerLuxmedPage'
import AccessibilityPage from '@/pages/AccessibilityPage'
import { ErrorBoundary } from '@components/common/ErrorBoundary/ErrorBoundary'
import NotFoundPage from '@/pages/NotFoundPage'

// Lazy-loaded: fetched only when user navigates to these routes
const BookingPage        = lazy(() => import('@/pages/BookingPage'))
const SpecializationsPage = lazy(() => import('@/pages/SpecializationsPage'))
const SpecializationPage  = lazy(() => import('@/pages/SpecializationPage'))
const TeamPage            = lazy(() => import('@/pages/TeamPage'))

function BookingFallback() {
  const { t } = useLanguage()
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#8A8A8A', fontSize: '14px' }}>{t('common.loadingBooking')}</p>
    </div>
  )
}

function BookingErrorFallback() {
  const { t } = useLanguage()
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#8A8A8A', fontSize: '14px' }}>{t('bookingPage.errorFallback')}</p>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <CookieConsent />
        <FacebookWidget />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/specjalizacje" element={<Suspense fallback={null}><SpecializationsPage /></Suspense>} />
          <Route path="/specjalizacje/:slug" element={<Suspense fallback={null}><SpecializationPage /></Suspense>} />
          <Route
            path="/specjalizacje/:slug/umow-wizyte"
            element={
              <ErrorBoundary fallback={<BookingErrorFallback />}>
                <Suspense fallback={<BookingFallback />}>
                  <BookingPage />
                </Suspense>
              </ErrorBoundary>
            }
          />
          <Route path="/zespol" element={<Suspense fallback={null}><TeamPage /></Suspense>} />
          <Route path="/rodo" element={<RodoPage />} />
          <Route path="/prywatnosc" element={<PrivacyPage />} />
          <Route path="/regulamin" element={<TermsPage />} />
          <Route path="/partnerzy/nfz" element={<PartnerNfzPage />} />
          <Route path="/partnerzy/luxmed" element={<PartnerLuxmedPage />} />
          <Route path="/deklaracja-dostepnosci" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
