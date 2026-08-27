import { useState } from 'react';
import '../styles/Login.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with:', { email, password, rememberMe });
  };

  const handleGoogleLogin = () => {
    console.log('Google login');
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
              Your world of <span className="cinema-text">cinema,</span> curated.
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

      {/* Right Side - Login Form */}
      <div className="login-right">
        <div className="login-form-container">
          <h2 className="welcome-title">Welcome back</h2>

          {/* Google Login */}
          <button className="google-login-btn" onClick={handleGoogleLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
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
              <div className="password-header">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
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

            <div className="checkbox-group">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me for 30 days</label>
            </div>

            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <a href="/join" className="signup-link">Create a new account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
