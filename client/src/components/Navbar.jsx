import { navLinks, imgSearch } from '../data/movieData'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState(navLinks[0])
  return (
    
    <header className="topbar">
      <div className="nav-left">
        <div className="brand-group">
          <div className="brand-badge">CINE</div>
          <div className="brand-text">Match</div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Movies
          </NavLink>
        </nav>
      </div>

      <div className="search-bar" role="search">
        <span className="search-icon-wrap">
          <img src={imgSearch} alt="" className="search-icon" />
        </span>
        <input
          className='search-input'
          type="text"
          placeholder="Search movies and TV shows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <span className="sign-in">Sign In</span>
        <button type="button" className="join-btn">
          Join CineMatch
        </button>
      </div>
    </header>
  )
}
