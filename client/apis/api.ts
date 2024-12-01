// API utility to handle API endpoints and requests
import request from 'superagent'
import { Pie } from '../../models/pies'

const baseUrl = '/api/v1/pies'

// Fetch all pies
export async function getPies(): Promise<Pie[]> {
  try {
    const result = await request.get(`${baseUrl}`)
    return result.body as Pie[]
  } catch (error) {
    console.error('Error fetching pies:', error)
    throw new Error('Failed to fetch pies')
  }
}

// Fetch pie by ID
export async function getPieById(id: string) {
  try {
    const response = await fetch(`${baseUrl}/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch pie')
    }
    const pie = await response.json()
    return pie
  } catch (error) {
    console.error('Error fetching pie:', error)
    throw error
  }
}

// Fetch pies by flavor (multiple pies)
export async function getPiesByFlavor(flavor: string): Promise<Pie[]> {
  try {
    console.log('Fetching pies with flavor:', flavor)
    const result = await request.get(`${baseUrl}/flavor/${flavor}`)
    console.log('Pies by flavor:', result.body)

    return result.body as Pie[]
  } catch (error) {
    console.error(`Error fetching pies by flavor ${flavor}:`, error)
    throw new Error(`Failed to fetch pies for flavor ${flavor}`)
  }
}

//----

// Will this one work?
// Fetch a single pie by flavor
// export async function getPieByFlavor(flavor: string): Promise<Pie | null> {
//   try {
//     console.log('Fetching a single pie with flavor:', flavor)
//     const result = await request.get(`${baseUrl}/flavor/${flavor}`)
//     console.log('Single pie by flavor:', result.body)

//     if (result.body.length > 0) {
//       // Return the first pie, with a fallback image if not present
//       return {
//         ...result.body[0],
//         img: result.body[0].img || '/images/pie-cartoon.jpg', // Default image if none exists
//       }
//     } else {
//       return null // No pie found for this flavor
//     }
//   } catch (error) {
//     console.error(`Error fetching single pie by flavor ${flavor}:`, error)
//     throw new Error(`Failed to fetch pie for flavor ${flavor}`)
//   }
// }
