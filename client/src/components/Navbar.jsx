import { navLinks, imgSearch } from '../data/movieData'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState(navLinks[0])
  const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/movies', label: 'Movies' },
  { path: '/tv-shows', label: 'TV Shows' },
  { path: '/new-releases', label: 'New Releases' }
]
  return (
    
    <header className="topbar">
      <div className="nav-left">
        <div className="brand-group">
          <div className="brand-badge">CINE</div>
          <div className="brand-text">Match</div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
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
        <NavLink to='/signin' className="sign-in">Sign In</NavLink>
        <NavLink to='/join' className="join-btn">
          Join CineMatch
        </NavLink>
      </div>
    </header>
  )
}
