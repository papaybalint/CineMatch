const express = require('express')
const router = express.Router()
const tvShowController = require('../controllers/tvShowController')

// GET /api/tv-shows
router.get('/', tvShowController.getTvShows)

module.exports = router
