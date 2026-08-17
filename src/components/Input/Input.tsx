import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ label, error, id, className = '', ...rest }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label && (
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <input
      id={id}
      className={`
        w-full px-3 py-2.5 rounded-md border text-sm
        border-gray-300 bg-white text-gray-900
        placeholder:text-gray-400
        focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
        transition-shadow duration-150
        ${error ? 'border-red-500 focus:ring-red-500' : ''}
        ${className}
      `}
      {...rest}
    />
    {error && <span className="text-xs text-red-600">{error}</span>}
  </div>
)
