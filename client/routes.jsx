import { createBrowserRouter } from 'react-router-dom'
import App from './src/App' // Ez lesz a Root / Layout
import HeroSection from './src/components/HeroSection' // Pl. a kezdőlap tartalma (Home)
import Movies from './src/components/Movies'          // A filmek oldal
import Home from './src/components/Home'

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
