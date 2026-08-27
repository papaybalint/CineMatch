import { createBrowserRouter } from 'react-router-dom'
import App from './App' // Ez lesz a Root / Layout
import HeroSection from './components/HeroSection' // Pl. a kezdőlap tartalma (Home)
import Movies from './components/Movies'          // A filmek oldal
import Home from './components/Home'
import NewsSection from './components/NewsSection'
import TvShows from './components/TvShows'
import NewReleases from './components/NewReleases'
import Register from './components/Register'
import SignIn from './components/SingIn'
import NotFound from './components/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // A közös keret (Navbar + Outlet + Footer)
    children: [
      { index: true, element: <Home /> }, // Kezdőlap ( / )
      { path: 'movies', element: <Movies /> },
      { path: 'tv-shows', element: <TvShows /> },
      { path: 'new-releases', element: <NewReleases /> },
      { path: 'signin', element: <SignIn /> },
      { path: 'join', element: <Register /> },
      { path: 'register', element: <Register /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
