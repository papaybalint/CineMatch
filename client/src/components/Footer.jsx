import {
  imgInstagram,
  imgTwitter,
  imgYoutube,
  imgCircleX,
} from '../data/movieData'

export default function Footer() {
  return (
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
        <span>
          © 2026 CineMatch Entertainment, Inc. All rights reserved. Built for film lovers worldwide.
        </span>

        <div className="legal-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
