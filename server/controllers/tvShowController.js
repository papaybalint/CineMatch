const tmdbService = require('../services/tmdbService')

exports.getTvShows = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const tvShows = await tmdbService.fetchTvShows(page, limit)
    res.json(tvShows)
  } catch (error) {
    console.error('Hiba a getTvShows-ben:', error)
    res.status(500).json({ message: 'Szerver hiba a sorozatok lekérésekor' })
  }
}
