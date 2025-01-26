import { useTranslation } from 'react-i18next';
import { NAV_LIST_ITEM } from '../../constants/components';
import ToggleLanguage from '../ToggleLanguage';
import ToggleTheme from '../ToggleTheme';
import styles from './index.module.scss';

export default function NavMenu(): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={styles.navWrapper}>
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
      </nav>
      <div className={styles.btnIconWrapper}>
        <ToggleTheme />
        <ToggleLanguage />
        {/* <button
          type="button"
          aria-label="toggle navigation"
          className={`${styles.btn} ${styles.btnIcon} ${styles.navHamburger}`}
        >
          <i aria-hidden="true" className="fa fa-bars"></i>
        </button> */}
      </div>
    </div>
  );
}
