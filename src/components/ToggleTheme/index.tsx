import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import styles from './index.module.scss';

export default function ToggleTheme(): JSX.Element {
  const themeContext = useContext(ThemeContext);

  return (
    <button
      type="button"
      aria-label="toggle theme"
      className={`${styles.btn} ${styles.btnIcon}`}
      onClick={themeContext.toggleTheme}
    >
      <i aria-hidden="true" id="btn-theme" className={'fa fa-moon-o'}></i>
    </button>
  );
}
