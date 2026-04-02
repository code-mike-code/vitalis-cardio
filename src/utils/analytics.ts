const CONSENT_KEY = 'vitalis_cookie_consent'

type ConsentValue = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

function gtag(...args: unknown[]) {
  if (typeof window.gtag === 'function') {
    window.gtag(...args)
  }
}

export function getStoredConsent(): 'accepted' | 'declined' | null {
  try {
    return localStorage.getItem(CONSENT_KEY) as 'accepted' | 'declined' | null
  } catch {
    return null
  }
}

export function applyConsent(accepted: boolean) {
  const value: ConsentValue = accepted ? 'granted' : 'denied'
  gtag('consent', 'update', {
    analytics_storage: value,
    ad_storage: value,
  })
  if (accepted) {
    gtag('event', 'page_view')
  }
  try {
    localStorage.setItem(CONSENT_KEY, accepted ? 'accepted' : 'declined')
  } catch {
    // localStorage unavailable
  }
}
