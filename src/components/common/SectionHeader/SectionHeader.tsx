import styles from './SectionHeader.module.scss'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}

export default SectionHeader
