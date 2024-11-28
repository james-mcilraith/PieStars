// Form to rate a pie
import { useState } from 'react'

const RatingForm = ({ pieId }: { pieId: number }) => {
  const [rating, setRating] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Pie ${pieId} rated ${rating} stars!`)
    // Save rating to backend here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Rate this pie:</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default RatingForm
