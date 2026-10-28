import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import ContactItem from '../shared/ContactItem';
import Icon from '../shared/Icon';
import { useI18n } from '../../i18n';
import { contactInfo, socialLinks } from '../../data/contact';

export default function ContactSection({ isActive }) {
  const { t, tr, lang } = useI18n();
  return (
    <Section id="contact" isActive={isActive}>
      <div className="contact-container">
        <MainTitle
          prefix={t('sections.contact.prefix')}
          highlighted={t('sections.contact.highlighted')}
          bgText={t('sections.contact.bgText')}
          isActive={isActive}
        />

        <div className="contact-content-con">
          <div className="left-contact">
            <h4>{t('contact.title')}</h4>
            <p>{t('contact.subtitle')}</p>

            <div className="contact-info" key={`contact-active-${lang}`}>
              {contactInfo.map((item, i) => (
                <ContactItem
                  key={i}
                  icon={item.icon}
                  label={tr(item.label)}
                  value={tr(item.value)}
                  startDelay={i * 0.35}
                />
              ))}
            </div>

            <div className="contact-icons">
              <div className="contact-icon">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*
          <div className="right-contact">
            <form action="" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
              </div>
            </form>
          </div>
          */}
        </div>
      </div>
    </Section>
  );
}
