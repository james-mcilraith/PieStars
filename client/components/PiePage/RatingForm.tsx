// Form to rate a pie
import { useState } from 'react'

const RatingForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0)

  // Handle when a star is clicked
  const handleClick = (starRating) => {
    setRating(starRating)
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(rating)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Rate this pie:</label>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleClick(star)}
            className={`star ${star <= rating ? 'filled' : ''}`}
            role="button"
            aria-label={`${star} stars`}
          >
            &#9733; {/* Unicode star symbol */}
          </span>
        ))}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default RatingForm
