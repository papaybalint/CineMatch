import './App.css'

const imgHeroBanner = 'https://www.figma.com/api/mcp/asset/b9dbd12b-55eb-48e1-a4b5-b6e1a71c4d54.png'
const imgPosterImage = 'https://www.figma.com/api/mcp/asset/3b30e259-effc-47f9-aa46-6285ee9edbfe.png'
const imgPosterImage1 = 'https://www.figma.com/api/mcp/asset/f2136fe2-93dc-4174-881e-9f630c0783db.png'
const imgPosterImage2 = 'https://www.figma.com/api/mcp/asset/58e9656f-acf4-4892-84e1-1d35ec632afb.png'
const imgPosterImage3 = 'https://www.figma.com/api/mcp/asset/af1a332f-9303-47c7-bde4-4541c68275bd.png'
const imgPosterImage4 = 'https://www.figma.com/api/mcp/asset/7187c854-27d4-46dd-a56b-705b835bda87.png'
const imgPosterImage5 = 'https://www.figma.com/api/mcp/asset/a9fc80e7-2905-4026-a53d-b2a447eeab36.png'
const imgPoster = 'https://www.figma.com/api/mcp/asset/65daa111-4cf6-4a4d-931a-479f21120bbf.png'
const imgPoster1 = 'https://www.figma.com/api/mcp/asset/a23c7379-080a-4dc7-bb32-6e1fa28de9b8.png'
const imgPoster2 = 'https://www.figma.com/api/mcp/asset/1f24489d-8a7a-4dbf-87cf-78c293e82d72.png'
const imgRectangle = 'https://www.figma.com/api/mcp/asset/574cb36c-4d1e-44b6-9d12-70dc3256c3b8.png'
const imgRectangle1 = 'https://www.figma.com/api/mcp/asset/005781e0-3e73-4696-8579-dc594f355dbb.png'
const imgRectangle2 = 'https://www.figma.com/api/mcp/asset/a1ad0960-60ad-4ced-b89f-9d7e8e918e47.png'
const imgThumbnail = 'https://www.figma.com/api/mcp/asset/e6976771-f9ce-4fd4-9dea-c36cbd20ed26.png'
const imgThumbnail1 = 'https://www.figma.com/api/mcp/asset/74c9b733-feaa-4224-94a9-c3d451e0ee7d.png'
const imgThumbnail2 = 'https://www.figma.com/api/mcp/asset/04354def-8e83-44cc-810e-142cdbda2742.png'
const imgSearch = 'https://www.figma.com/api/mcp/asset/a82cfff9-7d85-48e0-9db7-2a2e0d0ee5a2.svg'
const imgStar = 'https://www.figma.com/api/mcp/asset/c5e09c9f-f875-47de-9f4e-70db1177ea02.svg'
const imgEllipse = 'https://www.figma.com/api/mcp/asset/59737574-6145-44be-9e7c-7dda60bb41bb.svg'
const imgPlay = 'https://www.figma.com/api/mcp/asset/37afbd64-55af-4346-a785-2d9fa08c3a5f.svg'
const imgInfo = 'https://www.figma.com/api/mcp/asset/f752d25f-38c9-4856-ae2a-d772fcb834db.svg'
const imgArrowRight = 'https://www.figma.com/api/mcp/asset/3a52c71d-f437-4536-82ce-7191be104b1f.svg'
const imgEllipse1 = 'https://www.figma.com/api/mcp/asset/3998b6d9-8113-43fb-8a90-0eb9d73a7ea9.svg'
const imgInstagram = 'https://www.figma.com/api/mcp/asset/f133fe91-3c8c-4a4e-972b-27d7e9c07ce5.svg'
const imgTwitter = 'https://www.figma.com/api/mcp/asset/ac75c5e0-5f35-4e81-a8a1-504cd3dc37c4.svg'
const imgYoutube = 'https://www.figma.com/api/mcp/asset/15a34c36-4550-4a27-9b0f-8d4dc8f73cdf.svg'
const imgCircleX = 'https://www.figma.com/api/mcp/asset/b8891917-e43b-4bab-87b5-fc497cd76515.svg'

const navLinks = ['Movies', 'TV Shows', 'News']

const trendingMovies = [
  { title: 'Dune: Part Two', year: '2024', genre: 'Sci-Fi', rating: '8.6', image: imgPosterImage },
  { title: 'Oppenheimer', year: '2023', genre: 'Biography', rating: '8.4', image: imgPosterImage1 },
  { title: 'The Batman', year: '2022', genre: 'Action', rating: '7.8', image: imgPosterImage2 },
  { title: 'Interstellar', year: '2014', genre: 'Sci-Fi', rating: '8.7', image: imgPosterImage3 },
  { title: 'Blade Runner 2049', year: '2017', genre: 'Sci-Fi', rating: '8.0', image: imgPosterImage4 },
  { title: 'Everything Everywhere', year: '2022', genre: 'Comedy', rating: '7.8', image: imgPosterImage5 },
]

const topRatedMovies = [
  { rank: '1', title: 'The Shawshank Redemption', rating: '9.3', image: imgPoster },
  { rank: '2', title: 'The Godfather', rating: '9.2', image: imgPoster1 },
  { rank: '3', title: 'The Dark Knight', rating: '9.0', image: imgPoster2 },
  { rank: '4', title: 'The Godfather Part II', rating: '9.0', image: imgPoster2 },
]

const upcomingMovies = [
  { title: 'Killers of the Flower Moon', date: 'Oct 12', style: 'Crime, Drama', image: imgRectangle },
  { title: 'The Marvels', date: 'Nov 03', style: 'Action, Sci-Fi', image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?...' },
  { title: 'The Hunger Games: Songbirds', date: 'Nov 17', style: 'Action, Adventure', image: imgRectangle1 },
  { title: 'Wonka', date: 'Dec 15', style: 'Adventure, Family', image: imgRectangle2 },
]

const newsFeed = [
  {
    tag: 'Exclusives',
    title: "Denis Villeneuve Explains Why 'Dune: Part Two' Needed Scale",
    summary:
      'The director opens up about the architectural philosophies and massive camera rigs used to convey the immensity of Arrakis.',
    image: imgThumbnail,
  },
  {
    tag: 'Festivals',
    title: 'Venice Film Festival 2026: The Complete Selection',
    summary:
      'Discover the highly anticipated titles slated to debut on the Lido this year, including a brand new cyberpunk thriller.',
    image: imgThumbnail1,
  },
  {
    tag: 'Reviews',
    title: "Review: 'Neo-Tokyo 2099' is a Visually Stunning Tribute",
    summary:
      'While borrowing heavily from sci-fi pioneers, the film manages to establish its own hauntingly beautiful identity.',
    image: imgThumbnail2,
  },
]

function App() {
  return (
    <div className="cinematch-app">
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

      <main>
        <section className="hero-banner">
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

        <section className="content-section">
          <div className="section-header">
            <div>
              <h2>Trending Now</h2>
              <p>Most anticipated movies and TV shows this week</p>
            </div>

            <div className="view-all">
              <span>View All</span>
              <img src={imgArrowRight} alt="" className="arrow-right" />
            </div>
          </div>

          <div className="movie-grid trending-grid">
            {trendingMovies.map((movie) => (
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

        <section className="content-section low-contrast">
          <div className="section-header stacked-header">
            <h2>Top Rated Movies</h2>
            <p>All-time cinematic masterpieces according to user votes</p>
          </div>

          <div className="top-rated-grid">
            {topRatedMovies.map((movie) => (
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

        <section className="content-section low-contrast">
          <div className="section-header stacked-header">
            <h2>Coming Soon</h2>
            <p>Mark your calendars for these highly anticipated titles</p>
          </div>

          <div className="coming-soon-grid">
            {upcomingMovies.map((movie) => (
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

        <section className="content-section low-contrast news-section">
          <div className="section-header stacked-header">
            <h2>Latest News &amp; Reviews</h2>
            <p>Exclusive interviews, detailed breakdowns, and festival coverage</p>
          </div>

          <div className="news-grid">
            {newsFeed.map((item) => (
              <article key={item.title} className="news-card">
                <div className="news-thumb">
                  <img src={item.image} alt={item.title} className="poster-image" />
                </div>

                <div className="news-body">
                  <span className="news-tag">{item.tag}</span>

                  <div className="news-copy">
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-columns">
          <div className="footer-brand">
            <div className="brand-group">
              <div className="brand-badge small">CINE</div>
              <div className="brand-text">Match</div>
            </div>

            <p>
              Your ultimate movie and TV show discovery platform. Rate, review, explore cast
              information, and keep track of your most anticipated upcoming releases.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>
            <span>Top Movies</span>
            <span>TV Series</span>
            <span>Latest News</span>
            <span>Showtimes</span>
          </div>

          <div className="footer-links">
            <h4>Community</h4>
            <span>User Reviews</span>
            <span>Discussion Forums</span>
            <span>Lists &amp; Polls</span>
            <span>CineMatch Premium</span>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <span>About Us</span>
            <span>Contact</span>
            <span>Careers</span>
            <span>Advertise with Us</span>
          </div>

          <div className="social-links-wrap">
            <h4>Connect</h4>
            <div className="social-row">
              <span className="social-pill"><img src={imgInstagram} alt="Instagram" /></span>
              <span className="social-pill"><img src={imgTwitter} alt="Twitter" /></span>
              <span className="social-pill"><img src={imgYoutube} alt="YouTube" /></span>
              <span className="social-pill"><img src={imgCircleX} alt="X" /></span>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 CineMatch Entertainment, Inc. All rights reserved. Built for film lovers worldwide.</span>

          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
