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
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20 // Dinamikus limit!
    const movies = await tmdbService.fetchMovies(page, limit)
    res.json(movies)
  } catch (error) {
    console.error('Hiba a getMovies-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a filmek lekérésekor' })
  }
}

exports.getTopRatedMovies = async (req, res) => {
  try {
    const topRatedMovies = await tmdbService.topRatedMovies()
    res.json(topRatedMovies)
  } catch (error) {
    console.error('Hiba a Top Rated movies-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a filmek lekérésekor' })
  }
}

exports.getUpcomingMovies = async (req, res) => {
  try {
    const upcomingMovies = await tmdbService.fetchUpcoming()
    res.json(upcomingMovies)
  } catch (error) {
    console.error('Hiba a getUpcomingMovies-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a filmek lekérésekor' })
  }
}