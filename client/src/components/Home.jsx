import { useState, useEffect } from 'react'
import HeroSection from './HeroSection'
import { TrendingMoviesSection, TopRatedMoviesSection, ComingSoonSection } from './MovieSection'
import NewsSection from './NewsSection'
import { upcomingMovies, newsFeed } from '../data/movieData'

export default function Home() {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)
  const [topRated, setTopRated] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])


  useEffect(() => {
    // 1. Trending lekérés
    fetch('http://localhost:3000/api/movies/trending')
      .then((res) => res.json())
      .then((data) => setTrending(data.results || data))
      .catch((err) => console.error(err))

    // 2. Top Rated lekérés
    fetch('http://localhost:3000/api/movies/top-rated')
      .then((res) => res.json())
      .then((data) => setTopRated(data.results || data))
      .catch((err) => console.error(err))

    // 3. Upcoming lekérés (a useEffect BELSEJÉBEN!):
    fetch('http://localhost:3000/api/movies/upcoming')
      .then((res) => res.json())
      .then((data) => {
        setUpcomingMovies(data.results || data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Hiba az Upcoming API lekérésekor:', err)
        setLoading(false)
      })
  }, []) // <-- Az üres függőségi tömb szigorúan a useEffect LEGVÉGÉN van!




  return (
    <>
      <HeroSection items={trending} />
      
      {loading ? (
        <div style={{ color: 'white', padding: '2rem', textAlign: 'center' }}>Tartalom töltése...</div>
      ) : (
        <>
          <TopRatedMoviesSection items={topRated} />
          <ComingSoonSection items={upcomingMovies} />
          <NewsSection items={newsFeed} />
        </>
      )}
    </>
  )
}
