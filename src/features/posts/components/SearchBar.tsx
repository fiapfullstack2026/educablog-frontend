import { useState } from 'react'

interface SearchBarProps {
  onSearch: (query: string) => void
  placeholder?: string
}

export const SearchBar = ({ onSearch, placeholder = 'Buscar posts...' }: SearchBarProps) => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="relative w-full max-w-lg">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-300
          text-sm bg-white text-gray-900 placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
          transition-shadow duration-150
        "
      />
    </div>
  )
}
