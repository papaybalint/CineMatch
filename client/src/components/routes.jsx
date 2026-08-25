import { createBrowserRouter } from 'react-router-dom'
import App from '../App' // Ez lesz a Root / Layout
import HeroSection from './HeroSection' // Pl. a kezdőlap tartalma (Home)
import Movies from './Movies'          // A filmek oldal
import Home from './Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // A közös keret (Navbar + Outlet + Footer)
    children: [
      { index: true, element: <Home /> }, // Kezdőlap ( / )
      { path: 'movies', element: <Movies /> },
    ],
  },
])
