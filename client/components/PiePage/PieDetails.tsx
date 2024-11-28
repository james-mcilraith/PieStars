// import React, { useState } from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingForm from './RatingForm'

const PieDetails = () => {
  const { id } = useParams()

  // Initializing the pie state with hardcoded data for simplicity
  const [pie] = useState({
    id: Number(id),
    name: 'Pie',
    description: 'Mince',
    rating: '5',
    img: '/images/pie-cartoon.jpg',
  })

  return (
    <div>
      {/* Display the pie image */}
      <img
        src={pie.img}
        alt={pie.name}
        style={{ width: '400px', height: 'auto' }}
      />
      <h2>{pie.name}</h2>
      <p>{pie.description}</p>
      <p>Current Rating: {pie.rating} stars</p>
      <RatingForm pieId={pie.id} />
    </div>
  )
}

export default PieDetails
