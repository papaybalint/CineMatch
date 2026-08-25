import HeroSection from './HeroSection'
import { TrendingMoviesSection, TopRatedMoviesSection, ComingSoonSection } from './MovieSection'
import NewsSection from './NewsSection'
import { trendingMovies, topRatedMovies, upcomingMovies, newsFeed } from '../data/movieData'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingMoviesSection items={trendingMovies} />
      <TopRatedMoviesSection items={topRatedMovies} />
      <ComingSoonSection items={upcomingMovies} />
      <NewsSection items={newsFeed} />
    </>
  )
}
