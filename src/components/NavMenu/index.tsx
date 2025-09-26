import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NAV_LIST_ITEM } from '../../constants/components';
import NavHamburger from '../NavHamburger';
import ToggleLanguage from '../ToggleLanguage';
import ToggleTheme from '../ToggleTheme';
import styles from './index.module.scss';

export default function NavMenu(): JSX.Element {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.nav} ${styles.center}`}>
        <ul
          className={`${styles.navList} ${styles.center}  ${menuOpen ? styles.displayNavList : ''}`}
        >
          {NAV_LIST_ITEM.map((item) => (
            <li className={styles.navListItem} key={item}>
              <a
                className={`${styles.link} ${styles.navLink}`}
                href={item != 'resume' ? `#${item}` : 'assets/docs/resume.pdf'}
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
        <NavHamburger toggleMenu={() => setMenuOpen(!menuOpen)} />
      </div>
    </div>
  );
}
