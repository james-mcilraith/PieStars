export interface PieData{
  flavor: string
  place: string
  baker: string
  bakery:string
  address:string
}

export interface Pie extends PieData{
  id: number 
}