// import React, { useState } from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPieById } from '../../apis/api' // Assuming you have the API function in an 'api' file
import RatingForm from './RatingForm'

const OnePie = () => {
  const { id } = useParams<{ id: string }>()

  // State variables
  const [pie, setPie] = useState<PieData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // Fetch pie data on component mount
  useEffect(() => {
    const fetchPie = async () => {
      try {
        const pieData = await getPieById(id)
        setPie(pieData)
      } catch (error) {
        setIsError(true)
        console.error('Error fetching pie:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPie()
  }, [id]) // Dependency array to re-fetch if 'id' changes

  // Show loading message
  if (isLoading) {
    return <div>Loading pie details...</div>
  }

  // Show error message
  if (isError) {
    return (
      <div>
        There was an error loading the pie details. Please try again later.
      </div>
    )
  }

  // Show message if no pie data is found
  if (!pie) {
    return <div>No pie data available</div>
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1', marginTop: '10%' }}></div>
      <div style={{ flex: '2', paddingLeft: '0px' }}>
        {/* Display the pie image */}
        <img
          src={pie.img || '/images/pie-cartoon.jpg'} // Fallback if no image provided
          alt={pie.flavor}
          style={{ width: '400px', height: 'auto' }}
        />
        {/* Display pie details */}
        <h2>{pie.flavor}</h2>
        <p>{pie.place}</p>
        <p>{pie.baker}</p>
        <p>{pie.bakery}</p>
        <p>{pie.address}</p>
        {/* Optionally show Rating form */}
        <RatingForm PieId={id} />
      </div>
    </div>
  )
}

export default OnePie

// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import RatingForm from './RatingForm'

// const OnePie = () => {
//   const { id } = useParams()

//   // Initializing the pie state with hardcoded data for simplicity
//   const [pie] = useState({
//     id: Number(id),
//     name: 'Pie',
//     description: 'Mince',
//     rating: '5',
//     img: '/images/pie-cartoon.jpg',
//   })

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: '1', marginTop: '10%' }}></div>
//       <div style={{ flex: '2', paddingLeft: '0px' }}>
//         <img
//           src={pie.img}
//           alt={pie.name}
//           style={{ width: '400px', height: 'auto' }}
//         />
//         <h2>{pie.name}</h2>
//         <p>{pie.description}</p>
//         <p>Current Rating: {pie.rating} stars</p>
//         <RatingForm PieId={pie.id} />
//       </div>
//     </div>
//   )
// }

// export default OnePie
