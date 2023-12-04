import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()
const port = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  res.json(products.find((x) => x._id == req.params.id))
})

app.listen(port, () => console.log(`Server running on port ${port}`))
