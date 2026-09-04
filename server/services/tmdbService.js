exports.fetchTrendingMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }

  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`)
  const data = await response.json()

  return (data.results || []).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : 'https://via.placeholder.com/500x750'
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
      : 'https://via.placeholder.com/500x750'
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
      : 'https://via.placeholder.com/500x750'
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
      : 'https://via.placeholder.com/500x750'
  }))
}

exports.fetchUpcomingMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  if (!apiKey) {
    throw new Error('TMDB API kulcs nem található az környezeti változókban!')
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
  const data = await response.json()

  return (data.results || []).map((movie, index) => ({
    id: movie.id,
    rank: `Soon - #${index + 1}`,
    title: movie.title || movie.name,
    date: movie.release_date || 'Coming Soon',
    style: movie.overview ? (movie.overview.substring(0, 60) + '...') : 'Hamarosan a mozikban!',
    year: movie.release_date ? movie.release_date.split('-')[0] : 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : 'https://via.placeholder.com/500x750'
  }))
}

exports.fetchNewReleaseMovies = async (page = 1, limit = 20) => {
  const apiKey = process.env.TMDB_API_KEY
  
  const [res1, res2] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`).then(r => r.json()),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page + 1}`).then(r => r.json())
  ])

  const combined = [...(res1.results || []), ...(res2.results || [])]
  const uniqueMap = new Map()

  combined.forEach((movie) => {
    if (!uniqueMap.has(movie.id)) {
      uniqueMap.set(movie.id, movie)
    }
  })

  return Array.from(uniqueMap.values()).slice(0, limit).map((movie) => ({
    id: movie.id,
    title: movie.title || movie.name,
    rating: movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A',
    year: (movie.first_air_date || movie.release_date || '').split('-')[0] || 'N/A',
    image: movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : 'https://via.placeholder.com/500x750'
  }))
}