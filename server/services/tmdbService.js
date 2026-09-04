const NO_POSTER_IMAGE = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22500%22%20height%3D%22750%22%20viewBox%3D%220%200%20500%20750%22%3E%3Crect%20fill%3D%22%231a1b23%22%20width%3D%22500%22%20height%3D%22750%22%2F%3E%3Ctext%20fill%3D%22%239ca3af%22%20font-family%3D%22sans-serif%22%20font-size%3D%2228%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3ENo%20Poster%3C%2Ftext%3E%3C%2Fsvg%3E'

exports.fetchTrendingMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }

  const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
  const data = await response.json()

  return (data.results || []).map((item) => ({
    id: item.id,
    title: item.title || item.name,
    media_type: item.media_type || (item.title ? 'movie' : 'tv'),
    rating: item.vote_average ? item.vote_average.toFixed(1) : 'N/A',
    vote_count: item.vote_count ? (item.vote_count >= 1000 ? `${(item.vote_count / 1000).toFixed(0)}K` : item.vote_count) : null,
    year: (item.release_date || item.first_air_date || '').split('-')[0] || 'N/A',
    overview: item.overview || '',
    backdrop: item.backdrop_path 
      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}` 
      : (item.poster_path ? `https://image.tmdb.org/t/p/original${item.poster_path}` : null),
    image: item.poster_path 
      ? `https://image.tmdb.org/t/p/w500${item.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.fetchMovies = async (page = 1, limit = 20) => {
  const apiKey = process.env.TMDB_API_KEY
  // Movies kulonallo oldal
  const [res1, res2] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page + 1}`).then(r => r.json())
  ])
  const combined = [...(res1.results || []), ...(res2.results || [])]
  // Kivágjuk a Frontend által kért pontos darabszámot (limit):
  return combined.slice(0, limit).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.fetchTvShows = async (page = 1, limit = 20) => {
  const apiKey = process.env.TMDB_API_KEY
  
  // TV kulonallo oldal
  const [res1, res2] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${apiKey}&page=${page}`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=${apiKey}&page=${page + 1}`).then(r => r.json())
  ])
  const combined = [...(res1.results || []), ...(res2.results || [])]
  return combined.slice(0, limit).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: (movie.first_air_date || movie.release_date || '').split('-')[0] || 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.fetchTopRatedMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
  const data = await response.json()
  return (data.results || []).map((movie,index) => ({
    id: movie.id,
    rank: `#${index + 1}`,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1): 'N/A',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.fetchUpcomingMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }

  const today = new Date().toISOString().split('T')[0]
  
  const pagesData = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=1`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=2`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=3`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=4`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=5`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=6`).then(r => r.json())
  ])

  const combined = pagesData.flatMap(p => p.results || [])
  const futureMovies = combined.filter((movie) => movie.release_date && movie.release_date > today)

  const uniqueMap = new Map()
  futureMovies.forEach((movie) => {
    if (!uniqueMap.has(movie.id)) {
      uniqueMap.set(movie.id, movie)
    }
  })

  return Array.from(uniqueMap.values()).slice(0, 20).map((movie, index) => ({
    id: movie.id,
    rank: `Soon - #${index + 1}`,
    title: movie.title || movie.name,
    date: movie.release_date || 'Coming Soon',
    style: movie.overview ? (movie.overview.substring(0, 60) + '...') : 'Hamarosan a mozikban!',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.fetchComingSoonMovies = async (page = 1, limit = 18) => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }

  const today = new Date().toISOString().split('T')[0]
  const startTmdbPage = (page - 1) * 5 + 1
  const tmdbPages = [startTmdbPage, startTmdbPage + 1, startTmdbPage + 2, startTmdbPage + 3, startTmdbPage + 4]

  const pagesData = await Promise.all(
    tmdbPages.map((p) => fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${p}`).then((r) => r.json()))
  )

  const combined = pagesData.flatMap((p) => p.results || [])
  const futureMovies = combined.filter((movie) => movie.release_date && movie.release_date > today)

  const uniqueMap = new Map()
  futureMovies.forEach((movie) => {
    if (!uniqueMap.has(movie.id)) {
      uniqueMap.set(movie.id, movie)
    }
  })

  return Array.from(uniqueMap.values()).slice(0, limit).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    date: movie.release_date,
    year: (movie.release_date || '').split('-')[0] || 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}

exports.trendingNow = async (page = 1, limit = 20) => {
  const apiKey = process.env.TMDB_API_KEY
  // Movies kulonallo oldal
  const [res1, res2] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page}`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=${page + 1}`).then(r => r.json())
  ])
  const combined = [...(res1.results || []), ...(res2.results || [])]
  // Kivágjuk a Frontend által kért pontos darabszámot (limit):
  return combined.slice(0, limit).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : NO_POSTER_IMAGE
  }))
}


exports.fetchNewReleaseMovies = exports.fetchComingSoonMovies

