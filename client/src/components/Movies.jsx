import { useState, useEffect } from 'react'
export default function Movies() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/movies?page=${page}&limit=22`)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setMovies(data)
        } else {
          setMovies((prevMovies) => {
            const existingIds = new Set(prevMovies.map((m) => m.id))
            const newUniqueMovies = data.filter((m) => !existingIds.has(m.id))
            return [...prevMovies, ...newUniqueMovies]
          })
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }, [page])


  return (
    <section className="content-section">
      <h2>Explore Movies</h2>

      {loading && <div style={{ color: 'white' }}>Filmek töltése...</div>}
      {error && <div style={{ color: 'red' }}>Hiba történt a töltéskor.</div>}

      {!loading && !error && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <article key={movie.id} className="poster-card">
              <div className="poster-image-wrap">
                <img src={movie.image} alt={movie.title} className="poster-image" />
              </div>

              <div className="card-body">
                <div className="card-rating">
                  <span>⭐ {movie.rating}</span>
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
      )}
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <button onClick={handleLoadMore} className="primary-btn">
          Több film betöltése
        </button>
      </div>
    </section>
  )

}
