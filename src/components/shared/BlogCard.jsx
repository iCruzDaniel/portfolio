export default function BlogCard({ image, title, description }) {
  return (
    <div className="blog">
      <img src={image} alt={title} />
      <div className="blog-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
