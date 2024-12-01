// Form to rate a pie
import { useState } from 'react'

const RatingForm = () => {
  const [rating, setRating] = useState(0)

  const handleClick = (star) => {
    setRating(star)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Rating submitted:', rating)
  }

  const handleKeyDown = (star, e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick(star)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginTop: '30px' }}>
        <label className="rating-label">
          Rate this pie:
          <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleClick(star)}
                onKeyDown={(e) => handleKeyDown(star, e)}
                tabIndex={0}
                className={`star ${star <= rating ? 'filled' : ''}`}
                role="button"
                aria-label={`${star} stars`}
                style={{
                  cursor: 'pointer',
                  fontSize: '24px',
                  padding: '0 5px',
                }}
              >
                &#9733; {/* Unicode star symbol */}
              </span>
            ))}
          </div>
        </label>
      </div>
      <button type="submit" tabIndex={0}>
        Submit
      </button>{' '}
    </form>
  )
}

export default RatingForm
