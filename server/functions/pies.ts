import db from '../db/connection'
// import { Pie, PieData } from '../../models/pies'

export async function getPies() {
  try {
    const allpies = await db('BakeryAwards')
    return allpies
  } catch (error) {
    console.error(error)
  }
}
export async function getPieById(id: number) {
  const result = await db('BakeryAwards').where({ id }).first()
  return result
}
export async function getPieByFlavor(flavor:string){
  const result = await db('BakeryAwards').where('flavor',flavor)
  return result
}
export async function getPieShops() {
  const result = await db('BakeryAwards').select('Bakery', 'Address')
  return result
}
export async function getPieShopByName(bakery: string) {
  const result = await db('BakeryAwards').where('Bakery', bakery)
  return result
}

// export asynce function addRating(bakery:string){ }
