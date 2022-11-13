import express from "express"
import { PORT } from "./database/configDB.js"
import cors from 'cors'
import product from './routes/product.js'
import category from './routes/category.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use('/products', product)
app.use('/categories', category)

app.listen(PORT)
console.log('Server on port', PORT);