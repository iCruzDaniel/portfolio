export default function PortfolioItem({ title, image, links, fit, bg }) {
  const imgStyle = { ...(fit ? { objectFit: fit } : {}), ...(bg ? { background: bg } : {}) };
  return (
    <div className="portfolio-item">
      <div className="image">
        <img src={image} alt={title} style={imgStyle} />
      </div>
      <div className="hover-items">
        <h3>{title}</h3>
        <div className="icons">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
