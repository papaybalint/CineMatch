import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { imgStar, imgEllipse1 } from '../data/movieData'

export function TrendingMoviesSection({ items }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <h2>Trending Now</h2>
          <p>Most anticipated movies and TV shows this week</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => scroll('left')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>◀</button>
          <button onClick={() => scroll('right')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>▶</button>
        </div>
      </div>

      <div ref={scrollRef} className="movie-grid trending-grid">
        {items.map((movie) => (
          <article key={movie.id || movie.title} className="poster-card">
            <div className="poster-image-wrap">
              <img src={movie.image} alt={movie.title} className="poster-image" />
            </div>

            <div className="card-body">
              <div className="card-rating">
                <img src={imgStar} alt="" className="star-icon" />
                <span>{movie.rating}</span>
              </div>

              <div className="card-meta-block">
                <h3>{movie.title}</h3>
                <div className="card-meta-row">
                  <span>{movie.year}</span>
                  {movie.genre && <img src={imgEllipse1} alt="" className="tiny-dot" />}
                  {movie.genre && <span>{movie.genre}</span>}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function TopRatedMoviesSection({ items }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="content-section low-contrast">
      <div className="section-header">
        <div>
          <h2>Top Rated Movies</h2>
          <p>All-time cinematic masterpieces according to user votes</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => scroll('left')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>◀</button>
          <button onClick={() => scroll('right')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>▶</button>
        </div>
      </div>

      <div ref={scrollRef} className="top-rated-grid">
        {items.map((movie) => (
          <article key={movie.id || movie.rank} className="poster-card">
            <div className="poster-image-wrap">
              <span className="rank-badge">{movie.rank}</span>
              <img src={movie.image} alt={movie.title} className="poster-image" />
            </div>

            <div className="card-body">
              <div className="card-rating">
                <img src={imgStar} alt="" className="star-icon" />
                <span>{movie.rating}</span>
              </div>

              <div className="card-meta-block">
                <h3>{movie.title}</h3>
                <div className="card-meta-row">
                  <span>{movie.year}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ComingSoonSection({ items }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="content-section low-contrast">
      <div className="section-header">
        <div>
          <h2>Coming Soon</h2>
          <p>Mark your calendars for these highly anticipated titles</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => scroll('left')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>◀</button>
          <button onClick={() => scroll('right')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>▶</button>
        </div>
      </div>

      <div ref={scrollRef} className="coming-soon-grid">
        {items.map((movie) => (
          <article key={movie.id || movie.title} className="coming-soon-card">
            <div className="coming-soon-image">
              <img src={movie.image} alt={movie.title} className="poster-image" />
            </div>

            <div className="coming-soon-body">
              <span className="date-badge">📅 {movie.date || movie.year}</span>

              <div className="future-copy">
                <h3>{movie.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <Link to="/coming-soon" className="primary-btn" style={{ padding: '12px 28px', textDecoration: 'none', display: 'inline-block' }}>
          Összes hamarosan érkező film megtekintése →
        </Link>
      </div>
    </section>
  )
}

export function TrendingPeopleSection({ items }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="content-section">
      <div className="section-header">
        <div>
          <h2>Trending People</h2>
          <p>Most popular actors and actresses of the week</p>
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button onClick={() => scroll('left')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>◀</button>
          <button onClick={() => scroll('right')} className="secondary-btn" style={{ padding: '8px 14px', borderRadius: '6px' }}>▶</button>
        </div>
      </div>

      <div ref={scrollRef} className="movie-grid trending-grid">
        {(items || []).map((person) => (
          <article key={person.id || person.name} className="poster-card">
            <div className="poster-image-wrap">
              <img src={person.image} alt={person.name} className="poster-image" />
            </div>

            <div className="card-body">
              <div className="card-rating">
                <span>🌟 {person.popularity || 'N/A'}</span>
              </div>

              <div className="card-meta-block">
                <h3>{person.name}</h3>
                <div className="card-meta-row">
                  <span>{person.knownFor || person.department}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}