import { useTranslation } from 'react-i18next';
import { URL_GITHUB, NAV_LIST_ITEM } from '../../constants/components';
import styles from './index.module.scss';

export default function Header(): JSX.Element {
  const { t } = useTranslation();

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
        {/* <button
          type="button"
          aria-label="toggle theme"
          className="btn btn--icon"
        >
          <i aria-hidden="true" id="btn-theme" className="fas fa-moon"></i>
        </button>
        <button
          type="button"
          aria-label="toggle navigation"
          className="btn btn--icon nav__hamburger"
        >
          <i aria-hidden="true" className="fas fa-bars"></i>
        </button> */}
      </nav>
    </header>
  );
}
