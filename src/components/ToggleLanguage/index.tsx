import i18n from '../../i18n';
import styles from './index.module.scss';

export default function ToggleLanguage(): JSX.Element {
  const currentLanguage = i18n.language;
  localStorage.setItem('lang', currentLanguage);

  const toggleLanguage = (): void => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      type="button"
      aria-label="toggle lang"
      className={`${styles.btn} ${currentLanguage === 'ru' ? `${styles.btnIcon}` : `${styles.btnActiveIcon}`}`}
      onClick={toggleLanguage}
    >
      <i className="fa fa-globe" aria-hidden="true"></i>
    </button>
  );
}
