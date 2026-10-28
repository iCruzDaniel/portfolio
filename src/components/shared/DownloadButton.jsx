import Icon from './Icon';
import { useI18n } from '../../i18n';

export default function DownloadButton({ href = 'https://drive.google.com/file/d/117vvIiug_zX1cD_Ell7icEdbvzZTjAOJ/view?usp=sharing' }) {
  const { t } = useI18n();
  return (
    <div className="btn-con">
      <a href={href} target="_blank" rel="noopener noreferrer" className="main-btn">
        <span className="btn-text">{t('buttons.downloadCv')}</span>
        <span className="btn-icon"><Icon name="download" /></span>
      </a>
    </div>
  );
}

