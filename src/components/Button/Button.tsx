import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline-green'
  | 'outline-blue'
  | 'ghost'
  | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isLoading?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-green-primary text-white hover:opacity-90',
  secondary: 'bg-blue-primary text-white hover:opacity-90',
  'outline-green':
    'bg-transparent border border-green-mid text-green-primary hover:bg-green-pale',
  'outline-blue':
    'bg-transparent border border-blue-mid text-blue-primary hover:bg-blue-pale',
  ghost: 'bg-green-pale text-green-primary hover:opacity-90',
  danger: 'bg-danger text-white hover:opacity-90',
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className = '',
  ...rest
}: ButtonProps) => (
  <button
    className={`
      inline-flex items-center justify-center gap-2
      px-5 py-2.5 rounded text-sm font-medium
      transition-all duration-150
      disabled:opacity-50 disabled:cursor-not-allowed
      ${isLoading && variant === 'primary' ? 'bg-green-loading text-white' : variants[variant]}
      ${className}
    `}
    disabled={disabled || isLoading}
    {...rest}
  >
    {isLoading ? 'Carregando...' : children}
  </button>
)
