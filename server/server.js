const path = require('path')
require('dotenv').config({ path: path.join(__dirname, 'config/.env') })

const express = require('express')
const cors = require('cors')
const movieRoutes = require('./routes/movieRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

// Gyökér ellenőrző útvonal
app.get('/', (req, res) => {
  res.send('CineMatch API is running!')
})

// Film útvonalak bekötése
app.use('/api/movies', movieRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
