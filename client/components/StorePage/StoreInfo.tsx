// Bakery description, any history, and details
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const StoreInfo = () => {
  const { id } = useParams()

  // Initialising the store state with hardcoded data for simplicity
  const [store] = useState({
    id: Number(id),
    name: 'The Big Baker',
    description: 'A family-owned bakery specialising in delicious pies.',
    location: '123 Baker St, Wellyville',
    rating: 4.7,
    img: '/images/store-image.jpg', // Example store image
  })

  return (
    <div className="store-info">
      <img
        src={store.img}
        alt={store.name}
        style={{ width: '400px', height: 'auto', borderRadius: '8px' }}
      />

      <h2>{store.name}</h2>
      <p>{store.description}</p>
      <p>
        <strong>Location:</strong> {store.location}
      </p>
      <p>
        <strong>Current Rating:</strong> {store.rating} stars
      </p>
    </div>
  )
}

export default StoreInfo
