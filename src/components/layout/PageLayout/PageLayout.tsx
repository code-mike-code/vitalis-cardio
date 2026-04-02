import type { ReactNode } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'
import styles from './PageLayout.module.scss'

interface Props {
  children: ReactNode
}

function PageLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageLayout
