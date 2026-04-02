import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Obsługuje hash-scrolling w React Router (client-side navigation).
 * Montuj raz wewnątrz <BrowserRouter> — nasłuchuje każdej zmiany lokalizacji.
 *
 * Mechanizm: po zmianie route czeka aż DOM wyrenderuje docelową stronę
 * (retry co 50ms, max 20 prób = 1s), następnie płynnie scrolluje do elementu.
 */
function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      // brak hasha — przewiń na górę strony przy zmianie route
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.slice(1) // usuń '#'

    const tryScroll = (attempts: number) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (attempts < 20) {
        setTimeout(() => tryScroll(attempts + 1), 50)
      }
    }

    tryScroll(0)
  }, [hash, pathname])

  return null
}

export default ScrollToHash
