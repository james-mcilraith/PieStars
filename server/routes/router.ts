import * as db from '../../server/functions/pies.ts'
import express from 'express'

const router = express.Router()

// GET /api/v1/pies
router.get('/', async (req, res) => {
  try {
    const pies = await db.getPies()
    res.status(200).json(pies)
  } catch (e) {
    console.error('Error fetching pies:', e)
    res.status(500).json({ error: 'Failed to fetch pies' })
  }
})

// GET /api/v1/pies/:id
router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const pie = await db.getPieById(id)

    if (!pie) {
      return res.status(404).json({ message: `Pie with ID ${id} not found` })
    }

    res.status(200).json(pie)
  } catch (error) {
    console.error('Error fetching pie by ID:', error)
    res.status(500).json({
      error: `Failed to fetch pie with ID ${req.params.id}`,
    })
  }
})

// GET /api/v1/pies/shops
router.get('/shops', async (req, res) => {
  try {
    const pies = await db.getPieShops()

    if (pies.length === 0) {
      return res.status(404).json({ message: 'No pie shops found' })
    }

    res.status(200).json(pies)
  } catch (error) {
    console.error('Error fetching pie shops:', error)
    res.status(500).json({ error: 'Failed to retrieve pie shops' })
  }
})

// GET /api/v1/pies/shops/:bakery
router.get('/shops/:bakery', async (req, res) => {
  try {
    const bakery = req.params.bakery
    const shop = await db.getPieShopByName(bakery)

    if (!shop) {
      return res.status(404).json({ message: `Pie shop "${bakery}" not found` })
    }

    res.status(200).json(shop)
  } catch (error) {
    console.error('Error fetching pie shop by name:', error)
    res.status(500).json({ error: 'Failed to fetch pie shop by name' })
  }
})

// GET /api/v1/pies/flavor/:flavor
router.get('/flavor/:flavor', async (req, res) => {
  try {
    const flavor = req.params.flavor
    const pies = await db.getPiesByFlavor(flavor)

    if (pies.length === 0) {
      return res
        .status(404)
        .json({ message: `No pies found for flavor: ${flavor}` })
    }

    res.status(200).json(pies)
  } catch (error) {
    console.error('Error fetching pies by flavor:', error)
    res
      .status(500)
      .json({ error: `Failed to fetch pies for flavor: ${flavor}` })
  }
})

export default router
