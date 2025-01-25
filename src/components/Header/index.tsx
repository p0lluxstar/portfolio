import { useTranslation } from 'react-i18next';
import { URL_GITHUB, NAV_LIST_ITEM } from '../../constants/components';
import i18n from '../../i18n';
import styles from './index.module.scss';

export default function Header(): JSX.Element {
  const { t } = useTranslation();

  const toggleLanguage = (): void => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className={`${styles.header} ${styles.center}`}>
      <h3>
        <a href={URL_GITHUB} className={styles.link}>
          RS.
        </a>
      </h3>
      <nav className={`${styles.nav} ${styles.center}`}>
        <ul className={`${styles.navList} ${styles.center}`}>
          {NAV_LIST_ITEM.map((item) => (
            <li className={styles.navListItem} key={item}>
              <a
                className={`${styles.link} ${styles.navLink}`}
                href={`#${item}`}
              >
                {t(`${item}`)}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.btnIconWrapper}>
          <button
            type="button"
            aria-label="toggle theme"
            className={`${styles.btn} ${styles.btnIcon}`}
          >
            <i aria-hidden="true" id="btn-theme" className="fa fa-moon-o"></i>
          </button>
          <button
            type="button"
            aria-label="toggle lang"
            className={`${styles.btn} ${styles.btnIcon}`}
            onClick={toggleLanguage}
          >
            <i className="fa fa-globe" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            aria-label="toggle navigation"
            className={`${styles.btn} ${styles.btnIcon} ${styles.navHamburger}`}
          >
            <i aria-hidden="true" className="fa fa-bars"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
