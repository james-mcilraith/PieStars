// Custom hook to manage pie rating logic
// useHooks.ts
import { useState } from 'react'
import { useParams } from 'react-router-dom'

// Custom hook for managing rating state
export const useRating = (initialRating: number | null = null) => {
  const [rating, setRating] = useState<number | null>(initialRating)

  const updateRating = (newRating: number) => {
    setRating(newRating)
  }

  return { rating, updateRating }
}

// Custom hook for getting the pie ID from the URL parameters
export const usePieId = () => {
  const { id } = useParams<{ id: string }>()
  return id
}
