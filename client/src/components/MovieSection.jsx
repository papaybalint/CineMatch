import { imgStar, imgEllipse1, imgArrowRight } from '../data/movieData'

function SectionHeader({ title, subtitle, showViewAll = false }) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {showViewAll && (
        <div className="view-all">
          <span>View All</span>
          <img src={imgArrowRight} alt="" className="arrow-right" />
        </div>
      )}
    </div>
  )
}

export function TrendingMoviesSection({ items }) {
  return (
    <section className="content-section">
      <SectionHeader
        title="Trending Now"
        subtitle="Most anticipated movies and TV shows this week"
        showViewAll
      />

      <div className="movie-grid trending-grid">
        {items.map((movie) => (
          <article key={movie.title} className="poster-card">
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
                  <img src={imgEllipse1} alt="" className="tiny-dot" />
                  <span>{movie.genre}</span>
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
  return (
    <section className="content-section low-contrast">
      <div className="section-header stacked-header">
        <h2>Top Rated Movies</h2>
        <p>All-time cinematic masterpieces according to user votes</p>
      </div>

      <div className="top-rated-grid">
        {items.map((movie) => (
          <div key={movie.rank} className="ranked-card">
            <span className="rank-number">{movie.rank}</span>

            <div className="ranked-poster">
              <div className="poster-image-wrap small">
                <img src={movie.image} alt={movie.title} className="poster-image" />
              </div>

              <div className="ranked-info">
                <h3>{movie.title}</h3>
                <div className="card-rating">
                  <img src={imgStar} alt="" className="star-icon" />
                  <span>{movie.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ComingSoonSection({ items }) {
  return (
    <section className="content-section low-contrast">
      <div className="section-header stacked-header">
        <h2>Coming Soon</h2>
        <p>Mark your calendars for these highly anticipated titles</p>
      </div>

      <div className="coming-soon-grid">
        {items.map((movie) => (
          <article key={movie.title} className="coming-soon-card">
            <div className="coming-soon-image">
              <img src={movie.image} alt={movie.title} className="poster-image" />
            </div>

            <div className="coming-soon-body">
              <span className="date-badge">{movie.date}</span>

              <div className="future-copy">
                <h3>{movie.title}</h3>
                <p>{movie.style}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
