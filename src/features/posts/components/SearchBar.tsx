import { useState } from 'react'
import { IconSearch } from '@tabler/icons-react'

interface SearchBarProps {
  onSearch: (query: string) => void
  value?: string
  placeholder?: string
}

export const SearchBar = ({
  onSearch,
  value,
  placeholder = 'Pesquisar posts...',
}: SearchBarProps) => {
  const [internal, setInternal] = useState('')
  const current = value ?? internal

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternal(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="relative w-full max-w-xl">
      <IconSearch
        size={18}
        stroke={1.5}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
      />
      <input
        type="search"
        value={current}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full pl-10 pr-4 py-2.5 rounded border border-green-light
          text-sm bg-cream text-text-primary placeholder:text-text-muted
          focus:outline-none focus:border-[1.5px] focus:border-green-primary
          transition-colors duration-150
        "
      />
    </div>
  )
}
