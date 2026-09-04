import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import ProjectCarousel from '../shared/ProjectCarousel';
import ContactButton from '../shared/ContactButton';
import { projects, projectCategories } from '../../data/projects';

export default function PortfolioSection({ isActive, onNavigate }) {
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
          <div key={cat.id} className="prog-block">
            <h4 className="prog-title">{cat.title}</h4>
            <ProjectCarousel projects={catProjects} />
          </div>
        );
      })}

      <div className="section-cta">
        <h3>Like what you see? Let's build something together.</h3>
        <ContactButton onNavigate={onNavigate} label="Contact me" />
      </div>
    </Section>
  );
}
