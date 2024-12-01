import db from '../db/connection'
import { Pie } from '../../models/pies'

// Fetch all pies
export async function getPies(): Promise<Pie[]> {
  try {
    const allPies = await db('BakeryAwards')
    console.log('Backend Pies:', allPies) // Log the raw data returned from the database
    return allPies.map((pie) => ({
      ...pie, // Spread all the properties directly
      img: pie.img || '/images/pie-cartoon.jpg', // Ensure img is null if missing
    }))
  } catch (error) {
    console.error('Error fetching pies:', error)
    throw new Error('Failed to fetch pies')
  }
}

// Fetch a single pie by its ID
export async function getPieById(id: number) {
  try {
    const result = await db('BakeryAwards').where({ id }).first()
    return result || null
  } catch (error) {
    console.error(`Error fetching pie by ID ${id}:`, error)
    throw new Error('Database query failed')
  }
}

// Fetch all pie shops (with 'Bakery' and 'Address' fields)
export async function getPieStores(): Promise<
  { bakery: string; address: string }[]
> {
  try {
    const result = await db('BakeryAwards').select('Bakery', 'Address')
    return result || [] // Return the result directly or an empty array
  } catch (error) {
    console.error('Error fetching pie shops:', error)
    throw new Error('Failed to fetch pie shops')
  }
}

// Fetch a pie shop by its name
export async function getPieStoreByName(
  bakery: string,
): Promise<{ bakery: string; address: string } | null> {
  try {
    const result = await db('BakeryAwards').where('Bakery', bakery).first()

    return result || null // Return the result directly, or null if not found
  } catch (error) {
    console.error(`Error fetching pie shop with name ${bakery}:`, error)
    throw new Error('Failed to fetch pie shop')
  }
}

// Fetch pies by flavor (returns an array of pies)
export async function getPiesByFlavor(flavor: string): Promise<Pie[]> {
  try {
    const result = await db('BakeryAwards').where('flavor', flavor)

    return result || [] // Return the result directly, or an empty array if no pies are found
  } catch (error) {
    console.error(`Error fetching pies by flavor ${flavor}:`, error)
    throw new Error(`Failed to fetch pies by flavor ${flavor}`)
  }
}

// export async function addRating(bakery: string, rating: number): Promise<void> {
//   try {
//     // Assuming you have a "Ratings" table or a "Ratings" field in your "BakeryAwards" table
//     await db('BakeryAwards')
//       .where('Bakery', bakery)
//       .update({ rating }); // Update the rating for the given bakery

//     console.log(`Rating for bakery ${bakery} updated to ${rating}`);
//   } catch (error) {
//     console.error(`Error adding rating for bakery ${bakery}:`, error);
//     throw new Error('Failed to add rating');
//   }
// }
