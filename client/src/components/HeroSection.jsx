import { useState, useEffect } from 'react'
import { imgStar, imgEllipse, imgPlay, imgInfo } from '../data/movieData'

export default function HeroSection({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const activeItem = items[activeIndex] || null

  // Auto-play interval (6 seconds)
  useEffect(() => {
    if (!items.length || isPaused) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [items.length, isPaused])

  if (!items.length || !activeItem) {
    return (
      <section className="hero-banner hero-loading">
        <div style={{ padding: '4rem', color: 'white' }}>Trending adatok betöltése...</div>
      </section>
    )
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  // Up Next items (next 3 items in queue)
  const upNextItems = Array.from({ length: 3 }).map((_, i) => {
    const idx = (activeIndex + 1 + i) % items.length
    return { ...items[idx], originalIndex: idx }
  })

  const backdropUrl = activeItem.backdrop || activeItem.image

  return (
    <section
      className="imdb-hero-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Backdrop Image */}
      <div
        className="hero-backdrop"
        style={{ backgroundImage: `url('${backdropUrl}')` }}
      >
        <div className="hero-gradient-overlay" />
      </div>

      {/* Main Hero Grid Layout */}
      <div className="hero-grid-layout">
        {/* Left Side: Active Featured Content */}
        <div className="hero-main-content">
          <div className="hero-featured-flex">
            {/* Featured Poster Card */}
            <div className="hero-poster-wrap">
              <img src={activeItem.image} alt={activeItem.title} className="hero-poster-img" />
              <div className="hero-poster-play-badge">
                <img src={imgPlay} alt="" />
              </div>
            </div>

            {/* Details Column */}
            <div className="hero-details-column">
              <div className="hero-meta">
                <div className="hero-badge-row">
                  <span className="featured-tag">TRENDING #{activeIndex + 1}</span>
                  <span className="media-type-badge">
                    {activeItem.media_type === 'tv' ? 'TV SHOW' : 'MOVIE'}
                  </span>
                  <span className="meta-copy">{activeItem.year}</span>
                </div>

                <h1 className="hero-title">{activeItem.title}</h1>

                <div className="hero-stats">
                  <div className="rating-inline">
                    <img src={imgStar} alt="" className="star-icon" />
                    <span className="rating-value">{activeItem.rating}</span>
                    {activeItem.vote_count && (
                      <span className="vote-copy">({activeItem.vote_count} votes)</span>
                    )}
                  </div>

                  <img src={imgEllipse} alt="" className="dot-separator" />
                  <span className="meta-copy">Released: {activeItem.year}</span>
                </div>
              </div>

              <p className="hero-description">{activeItem.overview}</p>

              <div className="hero-actions">
                <button type="button" className="primary-btn">
                  <img src={imgPlay} alt="" className="action-icon" />
                  Watch Trailer
                </button>

                <button type="button" className="secondary-btn">
                  <img src={imgInfo} alt="" className="action-icon" />
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: IMDb Style "Up Next" Sidebar */}
        <div className="hero-up-next-sidebar">
          <div className="up-next-header">
            <h3>Up Next</h3>
            <div className="carousel-nav-buttons">
              <button onClick={handlePrev} className="nav-arrow-btn" aria-label="Previous slide">
                ◀
              </button>
              <button onClick={handleNext} className="nav-arrow-btn" aria-label="Next slide">
                ▶
              </button>
            </div>
          </div>

          <div className="up-next-list">
            {upNextItems.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="up-next-card"
                onClick={() => setActiveIndex(item.originalIndex)}
              >
                <div className="up-next-thumb">
                  <img src={item.image} alt={item.title} />
                  <span className="thumb-play-icon">▶</span>
                </div>
                <div className="up-next-info">
                  <div className="up-next-meta">
                    <span>{item.media_type === 'tv' ? 'TV' : 'Movie'}</span>
                    <span>⭐ {item.rating}</span>
                  </div>
                  <h4 className="up-next-title">{item.title}</h4>
                  <p className="up-next-desc">{item.overview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Pagination Indicator Dots */}
      <div className="hero-pagination-dots">
        {items.slice(0, 10).map((_, idx) => (
          <button
            key={idx}
            className={`dot-indicator ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
