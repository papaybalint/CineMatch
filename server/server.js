require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('CineMatch API is running!')
})

app.get('/api/movies/trending', async (req, res) => {
  try {
    const apiKey = process.env.TMDB_API_KEY

    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
    const data = await response.json()

    const formattedMovies = (data.results || []).map((movie) => ({
      id: movie.id,
      title: movie.title || movie.name,
      rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
      year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
      image: movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : 'https://via.placeholder.com/500x750'
    }))
    
    res.json(formattedMovies)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Szerver hiba a TMDB API hívásakor' })
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
