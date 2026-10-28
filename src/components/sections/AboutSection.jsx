import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import AboutStat from '../shared/AboutStat';
import TechGrid from '../shared/TechGrid';
import TimelineItem from '../shared/TimelineItem';
import DownloadButton from '../shared/DownloadButton';
import { useI18n } from '../../i18n';
import aboutStats from '../../data/aboutStats';
import { skillGroups } from '../../data/skills';
import timeline from '../../data/timeline';

export default function AboutSection({ isActive, onTechClick }) {
  const { t, tr, lang } = useI18n();
  return (
    <Section id="about" isActive={isActive}>
      <MainTitle
        prefix={t('sections.about.prefix')}
        highlighted={t('sections.about.highlighted')}
        bgText={t('sections.about.bgText')}
        isActive={isActive}
      />

      <div className="about-container">
        <div className="left-about">
          <h4>{t('about.infoTitle')}</h4>
          <p>
            {t('about.bio1')}
            <br /><br />
            {t('about.bio2')}
          </p>
          <DownloadButton />
        </div>

        <div className="right-about" key={`about-active-${lang}`}>
          {aboutStats.map((stat, i) => (
            <AboutStat key={i} number={stat.number} label={tr(stat.label)} />
          ))}
        </div>
      </div>

      <div className="about-stats">
        <h4 className="stat-title">{t('about.skillsTitle')}</h4>
        {skillGroups.map((group) => (
          <TechGrid
            key={group.title}
            title={tr(group.title)}
            items={group.items}
            onTechClick={onTechClick}
          />
        ))}
      </div>

      <h4 className="stat-title">{t('about.timelineTitle')}</h4>
      <div className="timeline">
        {timeline.map((item, i) => (
          <TimelineItem
            key={i}
            icon={item.icon}
            duration={item.duration}
            title={tr(item.title)}
            subtitle={tr(item.subtitle)}
            description={tr(item.description)}
          />
        ))}
      </div>
    </Section>
  );
}
