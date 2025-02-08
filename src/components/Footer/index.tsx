import styles from './index.module.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/p0lluxstar/portfolio"
        target="blank"
        className={`${styles.link} ${styles.footerLink}`}
      >
        2025 AE
      </a>
    </footer>
  );
}
