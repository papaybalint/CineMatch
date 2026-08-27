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

exports.fetchMovies = async () => {
  const apiKey = process.env.TMDB_API_KEY
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
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
