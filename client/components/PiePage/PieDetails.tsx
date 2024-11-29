// import React, { useState } from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingForm from './RatingForm'
import Leaderboard from './Leaderboard'
import { getPieByFlavor, getPies } from '../../apis/api'
import { useQuery } from '@tanstack/react-query'
import { Pie } from '../../../models/pies'

const PieDetails = () => {
  const { flavor } = useParams()
  const {
    data: pie,
    isError,
    isPending,
  } = useQuery({
    queryKey: ['flavor', 0],
    queryFn: () => getPieByFlavor(flavor as string),
  })

  console.log(pie)

  // Initializing the pie state with hardcoded data for simplicity
  if (isPending) {
    return <div>Loading pies...</div>
  }

  if (isError) {
    return (
      <div>There was an error loading the pies. Please try again later.</div>
    )
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', marginTop: '5%' }}>
        <Leaderboard pieflavor={flavor as string} />
      </div>
      <div style={{ flex: '2', paddingLeft: '2px' }}>
        {/* Display the pie image */}
        <img
          src={pie.img}
          alt={pie.name}
          style={{ width: '200px', height: 'auto' }}
        />
        <h2>{pie.name}</h2>
        <p>{pie.description}</p>
        <p>Current Rating: {pie.rating} stars</p>
        <RatingForm PieId={pie.id} />
      </div>
    </div>
  )
}
export default PieDetails

/*

// import React, { useState } from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingForm from './RatingForm'
import Leaderboard from './Leaderboard'


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
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', marginTop: '10%' }}>
        <Leaderboard />
      </div>
      <div style={{ flex: '2', paddingLeft: '0px' }}>
        { Display the pie image }
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

export default PieDetails
*/
