import { useState, useEffect } from 'react'

export default function TvShows() {
  const [tvShows, setTvShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  useEffect(() => {
    fetch(`http://localhost:3000/api/tv-shows?page=${page}&limit=18`)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setTvShows(data)
        } else {
          setTvShows((prevTvShows) => {
            const existingIds = new Set(prevTvShows.map((t) => t.id))
            const newUniqueShows = data.filter((t) => !existingIds.has(t.id))
            return [...prevTvShows, ...newUniqueShows]
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
      <h2>TV Shows</h2>

      {loading && <div style={{ color: 'white' }}>TV Showk töltése...</div>}
      {error && <div style={{ color: 'red' }}>Hiba történt a töltéskor.</div>}

      {!loading && !error && (
        <div className="movie-grid">
          {tvShows.map((tvShow) => (
            <article key={tvShow.id} className="poster-card">
              <div className="poster-image-wrap">
                <img src={tvShow.image} alt={tvShow.title} className="poster-image" />
              </div>

              <div className="card-body">
                <div className="card-rating">
                  <span>⭐ {tvShow.rating}</span>
                </div>
                <div className="card-meta-block">
                  <h3>{tvShow.title}</h3>
                  <div className="card-meta-row">
                    <span>{tvShow.year}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
        <button onClick={handleLoadMore} className="primary-btn">
          Több sorozat betöltése
        </button>
      </div>
    </section>
  )
}
