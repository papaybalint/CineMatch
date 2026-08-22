import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { TrendingMoviesSection, TopRatedMoviesSection, ComingSoonSection } from './components/MovieSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import { trendingMovies, topRatedMovies, upcomingMovies, newsFeed } from './data/movieData'

function App() {
  return (
    <div className="cinematch-app">
      <Navbar />

      <main>
        <HeroSection />
        <TrendingMoviesSection items={trendingMovies} />
        <TopRatedMoviesSection items={topRatedMovies} />
        <ComingSoonSection items={upcomingMovies} />
        <NewsSection items={newsFeed} />
      </main>

      <Footer />
    </div>
  )
}

export default App
