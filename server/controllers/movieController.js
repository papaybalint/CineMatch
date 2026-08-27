const tmdbService = require('../services/tmdbService')

exports.getTrendingMovies = async (req, res) => {
  try {
    const movies = await tmdbService.fetchTrendingMovies()
    res.json(movies)
  } catch (error) {
    console.error('Hiba a getTrendingMovies-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a filmek lekérésekor' })
  }
}
