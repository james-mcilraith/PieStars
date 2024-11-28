// API utility to handle API endpoints and requests
import request from 'superagent'
import { Pie, PieData } from '../../models/pies'
const baseUrl = '/api/v1/pies'

export async function getPies(): Promise<PieData[]> {
  const result= await request.get(`${baseUrl}`).then((res) => {
    console.log(res.body)
    return res.body
  })
  return result
}
