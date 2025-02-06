import { useState } from 'react';
import styles from './index.module.scss';

interface NavHamburgerProps {
  toggleMenu: () => void;
}

export default function NavHamburger({
  toggleMenu,
}: NavHamburgerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
    toggleMenu();
  };

  return (
    <button
      type="button"
      aria-label="toggle navigation"
      onClick={handleClick}
      className={`${styles.btn} ${styles.btnIcon} ${styles.navHamburger} ${!isOpen ? '' : `${styles.btnActiveIcon}`}`}
    >
      <i
        aria-hidden="true"
        className={isOpen ? 'fa fa-times' : 'fa fa-bars'}
      ></i>
    </button>
  );
}
