import { navLinks, imgSearch } from '../data/movieData'

export default function Navbar() {
  return (
    <header className="topbar">
      <div className="nav-left">
        <div className="brand-group">
          <div className="brand-badge">CINE</div>
          <div className="brand-text">Match</div>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link, index) => (
            <span key={link} className={index === 0 ? 'nav-link active' : 'nav-link'}>
              {link}
            </span>
          ))}
        </nav>
      </div>

      <div className="search-bar" role="search">
        <span className="search-icon-wrap">
          <img src={imgSearch} alt="" className="search-icon" />
        </span>
        <span className="search-placeholder">Search movies and TV shows...</span>
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
