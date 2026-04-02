import styles from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  onClick?: () => void
  href?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  disabled = false,
  type = 'button',
  className = '',
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
