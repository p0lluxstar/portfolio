import Logo from '../Logo';
import NavMenu from '../NavMenu';
import styles from './index.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={`${styles.header} ${styles.center}`}>
      <Logo />
      <NavMenu />
    </header>
  );
}
