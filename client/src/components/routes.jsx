import { createBrowserRouter } from 'react-router-dom'
import App from '../App' // Ez lesz a Root / Layout
import HeroSection from './HeroSection' // Pl. a kezdőlap tartalma (Home)
import Movies from './Movies'          // A filmek oldal
import Home from './Home'
import NewsSection from './NewsSection'
import TvShows from './TvShows'
import NewReleases from './NewReleases'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // A közös keret (Navbar + Outlet + Footer)
    children: [
      { index: true, element: <Home /> }, // Kezdőlap ( / )
      { path: 'movies', element: <Movies /> },
      { path: 'tv-shows', element: <TvShows /> },
      { path: 'new-releases', element: <NewReleases /> },
    ],
  },
])
