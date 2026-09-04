const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieController')

router.get('/', movieController.getMovies)
router.get('/trending', movieController.getTrendingMovies)
router.get('/top-rated', movieController.getTopRatedMovies)
router.get('/upcoming', movieController.getUpcomingMovies)
router.get('/new-releases', movieController.getNewReleaseMovies)
module.exports = router
