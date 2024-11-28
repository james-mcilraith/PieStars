// API utility to handle API endpoints and requests
import request from 'superagent'
import { Pie } from '../../models/pies'

const baseUrl = '/api/v1/pies'

export async function getPies(): Promise<Pie[]> {
  const result = await request.get(`${baseUrl}`).then((res) => {
    console.log(res.body)
    return res.body
  })
  return result
}

export async function getPieByFlavor(flavor: string): Promise<Pie> {
  const result = await request
    .get(`${baseUrl}?flavor=${flavor}`)
    .then((res) => {
      console.log(res.body)
      return res.body.length > 0 ? res.body[0] : null
    })
  return result
}
