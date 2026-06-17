import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import BlogCard from '../shared/BlogCard';
import blogs from '../../data/blogs';

export default function BlogSection({ isActive }) {
  return (
    <Section id="blogs" isActive={isActive}>
      <div className="blogs-content">
        <MainTitle prefix="My" highlighted="Blogs" bgText="My Blogs" />
        <div className="blogs">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </Section>
  );
}
