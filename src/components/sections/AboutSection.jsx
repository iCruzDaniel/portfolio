import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import AboutStat from '../shared/AboutStat';
import TechGrid from '../shared/TechGrid';
import TimelineItem from '../shared/TimelineItem';
import DownloadButton from '../shared/DownloadButton';
import aboutStats from '../../data/aboutStats';
import { skillGroups } from '../../data/skills';
import timeline from '../../data/timeline';

export default function AboutSection({ isActive, onTechClick }) {
  return (
    <Section id="about" isActive={isActive}>
      <MainTitle prefix="About" highlighted="me" bgText="my stats" />

      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            Hi! I'm Daniel Cruz, a Mechatronics and Systems Engineering professional with hands-on
            experience in software development, microcontroller programming, and artificial
            intelligence. I'm passionate about designing innovative solutions that blend hardware
            and software to tackle real-world challenges.
            <br /><br />
            Over the years, I've worked on projects like Genercom.co and RobotSoccers, where
            I've refined my skills in software development, robotics, and automation. I'm
            especially motivated by the potential of technology to create a positive social
            impact—like with my YaperGoUTB application.
          </p>
          <DownloadButton />
        </div>

        <div className="right-about">
          {aboutStats.map((stat, i) => (
            <AboutStat key={i} number={stat.number} label={stat.label} />
          ))}
        </div>
      </div>

      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        {skillGroups.map((group) => (
          <TechGrid
            key={group.title}
            title={group.title}
            items={group.items}
            onTechClick={onTechClick}
          />
        ))}
      </div>

      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {timeline.map((item, i) => (
          <TimelineItem key={i} {...item} />
        ))}
      </div>
    </Section>
  );
}
