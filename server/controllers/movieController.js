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

// EZ a sima filmek vezérlője (Controller):
exports.getMovies = async (req, res) => {
  try {
    const movies = await tmdbService.fetchMovies()
    res.json(movies)
  } catch (error) {
    console.error('Hiba a getMovies-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a filmek lekérésekor' })
  }
}
