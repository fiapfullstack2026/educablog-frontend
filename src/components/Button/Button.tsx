import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  isLoading?: boolean
}

const variants = {
  primary:   'bg-accent text-white hover:opacity-90',
  secondary: 'bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100',
  danger:    'bg-red-600 text-white hover:opacity-90',
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
      px-5 py-2.5 rounded-md text-sm font-medium
      transition-all duration-150
      disabled:opacity-50 disabled:cursor-not-allowed
      ${variants[variant]} ${className}
    `}
    disabled={disabled || isLoading}
    {...rest}
  >
    {isLoading ? 'Carregando...' : children}
  </button>
)
