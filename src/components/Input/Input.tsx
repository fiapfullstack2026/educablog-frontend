import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ label, error, id, className = '', ...rest }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
    )}
    <input
      id={id}
      className={`
        w-full px-3 py-2.5 rounded border text-sm
        text-text-primary placeholder:text-text-muted
        focus:outline-none focus:border-[1.5px]
        transition-colors duration-150
        ${
          error
            ? 'border-danger bg-danger-bg focus:border-danger'
            : 'border-green-light bg-cream focus:border-green-primary'
        }
        ${className}
      `}
      {...rest}
    />
    {error && <span className="text-xs text-danger-text">{error}</span>}
  </div>
)
