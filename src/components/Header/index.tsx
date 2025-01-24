import { URL_GITHUB, NAV_LIST_ITEM } from '../../constants/components';
import styles from './index.module.scss';

export default function Header(): JSX.Element {
  
  console.log('a');
  return (
    <header className={`${styles.header} ${styles.center}`}>
      <h3>
        <a href={URL_GITHUB} className={styles.link}>
          RS.
        </a>
      </h3>
      <nav className={`${styles.nav} ${styles.center}`}>
        <ul className={`${styles.nav__list} ${styles.center}`}>
          {NAV_LIST_ITEM.map((item) => (
            <li className={styles['nav__list-item']} key={item}>
              <a
                className={`${styles.link} ${styles['link--nav']}`}
                href={`#${item}`}
              >
                {item}
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
