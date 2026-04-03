import { useRef, useEffect, type ReactNode } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import styles from './PageLayout.module.scss'

interface Props {
  children: ReactNode
  stickyStack?: boolean
}

function PageLayout({ children, stickyStack }: Props) {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!stickyStack) return
    const main = mainRef.current
    if (!main) return

    const sections = Array.from(main.children) as HTMLElement[]

    const update = () => {
      const threshold = window.innerHeight * 0.85
      sections.forEach(section => {
        const offset = Math.min(0, threshold - section.offsetHeight)
        section.style.setProperty('--sticky-top', `${offset}px`)
      })
    }

    update()
    const ro = new ResizeObserver(update)
    sections.forEach(s => ro.observe(s))
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [stickyStack])

  return (
    <div className={styles.layout}>
      <Header />
      <main ref={mainRef} className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
