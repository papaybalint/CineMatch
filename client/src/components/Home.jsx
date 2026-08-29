import { useState, useEffect } from 'react'
import HeroSection from './HeroSection'
import { TrendingMoviesSection, TopRatedMoviesSection, ComingSoonSection } from './MovieSection'
import NewsSection from './NewsSection'
import { upcomingMovies, newsFeed } from '../data/movieData'

export default function Home() {
  const [trending, setTrending] = useState([])
  const [loading, setLoading] = useState(true)
  const [topRated, setTopRated] = useState([])


  useEffect(() => {
    // Lekérés a saját Dockerized backend szerverünktől!
    fetch('http://localhost:3000/api/movies/trending')
      .then((res) => res.json())
      .then((data) => {
        // Ha a valódi TMDB API válaszol, az adatok a data.results-ban vannak.
        // Ha a teszt válaszunk, akkor maga a data a tömb.
        setTrending(data.results || data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Hiba az API lekérésekor:', err)
        setLoading(false)
      })
    //top rated lekeres
    fetch('http://localhost:3000/api/movies/toprated')
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results || data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Hiba a Top Rated API lekérésekor:', err)
        setLoading(false)
      })
    //tv shows lekerese
    fetch('http://localhost:3000/api/movies/tv-show')
      .then((res) => res.json())
      .then((data) => {
        setTvShows(data.results || data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Hiba a Top Rated API lekérésekor:', err)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <HeroSection />
      
      {/* Ha még tölt, kiírjuk, különben átadjuk az API-ból jött filmeket */}
      {loading ? (
        <div style={{ color: 'white', padding: '2rem' }}>Filmek töltése...</div>
      ) : (
        <TrendingMoviesSection items={trending} />
      )}

      <TopRatedMoviesSection items={topRated} />
      <ComingSoonSection items={upcomingMovies} />
      <NewsSection items={newsFeed} />
    </>
  )
}
