// import React, { useState } from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingForm from './RatingForm'

const OnePie = () => {
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
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', marginTop: '10%' }}></div>
      <div style={{ flex: '2', paddingLeft: '0px' }}>
        <img
          src={pie.img}
          alt={pie.name}
          style={{ width: '400px', height: 'auto' }}
        />
        <h2>{pie.name}</h2>
        <p>{pie.description}</p>
        <p>Current Rating: {pie.rating} stars</p>
        <RatingForm PieId={pie.id} />
      </div>
    </div>
  )
}

export default OnePie
