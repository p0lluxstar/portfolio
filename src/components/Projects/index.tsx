import styles from './index.module.scss';

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className={`${styles.section} ${styles.projects}`}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        <div className={styles.project}>
          <h3>Project 1</h3>
          <p className={styles.projectDescription}>
            Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
            sapiente debitis labore sed ipsam Mollitia repellat illum quod unde
            beatae Quis
          </p>
          <ul className={styles.projectStack}>
            <li className={styles.projectStackItem}>SASS</li>
            <li className={styles.projectStackItem}>TypeScript</li>
            <li className={styles.projectStackItem}>React</li>
          </ul>
          <a
            href="https://github.com"
            aria-label="source code"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa-github"></i>
          </a>
          <a
            href="https://example.com"
            aria-label="live preview"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa fa-external-link"></i>
          </a>
        </div>
        <div className={styles.project}>
          <h3>Project 1</h3>
          <p className={styles.projectDescription}>
            Ipsum accusamus ea excepturi aliquid eligendi amet. Explicabo
            sapiente debitis labore sed ipsam Mollitia repellat illum quod unde
            beatae Quis
          </p>
          <ul className={styles.projectStack}>
            <li className={styles.projectStackItem}>SASS</li>
            <li className={styles.projectStackItem}>TypeScript</li>
            <li className={styles.projectStackItem}>React</li>
          </ul>
          <a
            href="https://github.com"
            aria-label="source code"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa-github"></i>
          </a>
          <a
            href="https://example.com"
            aria-label="live preview"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa fa-external-link"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
