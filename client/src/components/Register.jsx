import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('Register with:', { fullName, email, password, termsAccepted });
  };

  const handleGoogleRegister = () => {
    console.log('Google register');
  };

  return (
    <div className="login-container">
      {/* Left Side - Cinema Theme */}
      <div className="login-left">
        <div className="cinema-content">
          <div className="match-badge">
            <span className="match-label">Match</span>
          </div>

          <div className="tagline">
            <h1>
              Start your <span className="cinema-text">cinema</span> journey today.
            </h1>
            <p className="description">
              Search, rate and get personalised recommendations, based on your mood.
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">500K+</span>
              <span className="stat-label">Titles</span>
            </div>
            <div className="stat">
              <span className="stat-number">2M+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfied</span>
            </div>
          </div>

          {/* Decorative Neon Elements */}
          <div className="neon-circle neon-1"></div>
          <div className="neon-circle neon-2"></div>
          <div className="neon-circle neon-3"></div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2 className="welcome-title">Create an account</h2>

          {/* Google Register */}
          <button className="google-login-btn" onClick={handleGoogleRegister}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Sign up with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleRegister}>
            {error && (
              <div style={{ color: '#ff4d4d', marginBottom: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-input-wrapper">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            <div className="checkbox-group">
              <input
                id="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">I agree to the Terms of Service & Privacy Policy</label>
            </div>

            <button type="submit" className="sign-in-btn">
              Create Account
            </button>
          </form>

          <p className="signup-text">
            Already have an account? <Link to="/signin" className="signup-link">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}