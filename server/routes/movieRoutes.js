const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.getMovies)
router.get('/trending', movieController.getTrendingMovies)
router.get('/toprated', movieController.getTopRatedMovies)
router.get('/upcoming', movieController.getUpcomingMovies)

module.exports = router
