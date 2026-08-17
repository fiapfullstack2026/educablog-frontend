import { useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`useLocalStorage: erro ao salvar "${key}"`, error)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(initialValue)
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`useLocalStorage: erro ao remover "${key}"`, error)
    }
  }

  return [storedValue, setValue, removeValue] as const
}
