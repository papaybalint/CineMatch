import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      color: 'white',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '4rem', margin: '0 0 0.5rem 0', color: '#18f562', fontFamily: 'Outfit, sans-serif' }}>404</h1>
      <h2 style={{ margin: '0 0 1rem 0', fontFamily: 'Outfit, sans-serif' }}>Az oldal nem található</h2>
      <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '400px' }}>
        A kért oldal nem létezik, törölve lett vagy hibás az URL címsor.
      </p>
      <Link to="/" className="primary-btn" style={{ borderRadius: '6px', fontWeight: '600' }}>
        Vissza a kezdőlapra
      </Link>
    </div>
  )
}
