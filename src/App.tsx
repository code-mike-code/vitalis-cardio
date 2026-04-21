import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider, useLanguage } from '@/hooks/useLanguage'
import ScrollToHash from '@components/ui/ScrollToHash'
import CookieConsent from '@components/ui/CookieConsent/CookieConsent'
import HomePage from '@/pages/HomePage'
import SpecializationsPage from '@/pages/SpecializationsPage'
import SpecializationPage from '@/pages/SpecializationPage'
import RodoPage from '@/pages/RodoPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'
import PartnerNfzPage from '@/pages/PartnerNfzPage'
import PartnerLuxmedPage from '@/pages/PartnerLuxmedPage'
import TeamPage from '@/pages/TeamPage'

// Lazy-loaded: calendar code is fetched only when the user navigates to the booking page
const BookingPage = lazy(() => import('@/pages/BookingPage'))

function BookingFallback() {
  const { t } = useLanguage()
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#8A8A8A', fontSize: '14px' }}>{t('common.loadingBooking')}</p>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToHash />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/specjalizacje" element={<SpecializationsPage />} />
          <Route path="/specjalizacje/:slug" element={<SpecializationPage />} />
          <Route
            path="/specjalizacje/:slug/umow-wizyte"
            element={
              <Suspense fallback={<BookingFallback />}>
                <BookingPage />
              </Suspense>
            }
          />
          <Route path="/zespol" element={<TeamPage />} />
          <Route path="/rodo" element={<RodoPage />} />
          <Route path="/prywatnosc" element={<PrivacyPage />} />
          <Route path="/regulamin" element={<TermsPage />} />
          <Route path="/partnerzy/nfz" element={<PartnerNfzPage />} />
          <Route path="/partnerzy/luxmed" element={<PartnerLuxmedPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
