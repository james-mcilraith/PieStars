import * as db from '../../server/functions/pies.ts'
import express from 'express'

const pieRouter = express.Router()

// GET /api/v1/pies
pieRouter.get('/', async (req, res) => {
  try {
    console.log('hit')

    const pies = await db.getPies()
    res.json(pies)
  } catch (e) {
    res.sendStatus(500)
  }
})

// GET /api/v1/pies/:id/
pieRouter.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const pie = await db.getPieById(id)
    res.json(pie)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error when grabbing pet by id.')
    }
    res.status(500).json({
      error: `Something went wrong when grabbing pet by id.`,
    })
  }
})

// GET /api/pies/shop
pieRouter.get('/shop', async (req, res) => {
  try {
    // Call the database function to fetch pets by ownerId
    const pies = await db.getPieShops()

    // Handle cases where no pies are found
    if (pies.length === 0) {
      return res.status(404).json({ message: 'No pies found for this owner' })
    }

    // Return the list of pies
    res.status(200).json(pies)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error')
    }
    res.status(500).json({ error: 'Failed to retrieve pies' })
  }
})

// PATCH /api/v1/pie/
// adding pie
/*
pieRouter.patch('/pie', async (req, res) => {
  try {
    const { name, bio, imgUrl, ownerId } = req.body
    const pet = await db.addRating(name, bio, imgUrl, ownerId)

    res.status(201).json(pet[0])
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error('unknown error while adding Pet')
    }
    res.status(500).json({ error: 'Failed to add Pet' })
  }
})
*/

export default pieRouter
