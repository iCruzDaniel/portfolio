import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import PortfolioItem from '../shared/PortfolioItem';
import { projects, projectCategories } from '../../data/projects';

export default function PortfolioSection({ isActive }) {
  return (
    <Section id="portfolio" isActive={isActive}>
      <MainTitle prefix="My" highlighted="Portfolio" bgText="My Work" />

      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>

      {projectCategories.map((cat) => {
        const catProjects = projects.filter((p) => p.category === cat.id);
        if (catProjects.length === 0) return null;

        return (
          <div key={cat.id}>
            <br /><br /><br />
            <h4 className="prog-title">{cat.title}</h4>
            <div className="portfolios">
              {catProjects.map((project) => (
                <PortfolioItem key={project.id} {...project} />
              ))}
            </div>
          </div>
        );
      })}
    </Section>
  );
}
