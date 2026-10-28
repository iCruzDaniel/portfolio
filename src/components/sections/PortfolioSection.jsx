import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import ProjectCarousel from '../shared/ProjectCarousel';
import ContactButton from '../shared/ContactButton';
import { useI18n } from '../../i18n';
import { projects, projectCategories } from '../../data/projects';

export default function PortfolioSection({ isActive, onNavigate }) {
  const { t, tr } = useI18n();
  return (
    <Section id="portfolio" isActive={isActive}>
      <MainTitle
        prefix={t('sections.portfolio.prefix')}
        highlighted={t('sections.portfolio.highlighted')}
        bgText={t('sections.portfolio.bgText')}
        isActive={isActive}
      />

      <p className="port-text">{t('portfolio.subtitle')}</p>

      {projectCategories.map((cat) => {
        const catProjects = projects.filter((p) => p.category === cat.id);
        if (catProjects.length === 0) return null;

        return (
          <div key={cat.id} className="prog-block">
            <h4 className="prog-title">{tr(cat.title)}</h4>
            <ProjectCarousel projects={catProjects} active={isActive} />
          </div>
        );
      })}

      <div className="section-cta">
        <h3>{t('portfolio.ctaTitle')}</h3>
        <ContactButton onNavigate={onNavigate} label={t('buttons.contact')} />
      </div>
    </Section>
  );
}
