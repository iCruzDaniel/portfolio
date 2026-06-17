import Section from '../layout/Section';
import MainTitle from '../shared/MainTitle';
import ContactItem from '../shared/ContactItem';
import { contactInfo, socialLinks } from '../../data/contact';

export default function ContactSection({ isActive }) {
  return (
    <Section id="contact" isActive={isActive}>
      <div className="contact-container">
        <MainTitle prefix="Contact" highlighted="Me" bgText="Contact" />

        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>
              I'm always excited to hear from new people about their ideas, projects, and
              potential collaborations.
            </p>

            <div className="contact-info">
              {contactInfo.map((item, i) => (
                <ContactItem key={i} {...item} />
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
                    <i className={link.icon}></i>
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
