export default function NewsSection({ items }) {
  return (
    <section className="content-section low-contrast news-section">
      <div className="section-header stacked-header">
        <h2>Latest News &amp; Reviews</h2>
        <p>Exclusive interviews, detailed breakdowns, and festival coverage</p>
      </div>

      <div className="news-grid">
        {items.map((item) => (
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
  )
}
