import { imgHeroBanner, imgStar, imgEllipse, imgPlay, imgInfo } from '../data/movieData'

export default function HeroSection() {
  return (
    <section className="hero-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.78), rgba(0, 0, 0, 0.32)), url('${imgHeroBanner}')` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-meta">
          <div className="hero-badge-row">
            <span className="featured-tag">TRENDING #1</span>
            <span className="meta-copy">Action, Sci-Fi, Adventure · 2h 46m</span>
          </div>

          <h1>Dune: Part Two</h1>

          <div className="hero-stats">
            <div className="rating-inline">
              <img src={imgStar} alt="" className="star-icon" />
              <span className="rating-value">8.6</span>
              <span className="vote-copy">(142K votes)</span>
            </div>

            <img src={imgEllipse} alt="" className="dot-separator" />
            <span className="meta-copy">Released: Mar 2024</span>
          </div>
        </div>

        <p className="hero-description">
          Paul Atreides unites with Chani and the Fremen while seeking revenge against the
          conspirators who destroyed his family. Facing a choice between the love of his life and
          the fate of the universe, he endeavors to prevent a terrible future.
        </p>

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
    </section>
  )
}
