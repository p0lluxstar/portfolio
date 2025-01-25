import styles from './index.module.scss';

export default function Contact(): JSX.Element {
  return (
    <section
      className={`${styles.section} ${styles.contact} ${styles.center}`}
      id="contact"
    >
      <h2 className={styles.sectionTitle}>Contact</h2>
      <a href="mailto:rjshekhar.official@gmail.com">
        <span className={`${styles.btn} ${styles.btnOutline} ${styles.center}`}>
          Email me
        </span>
      </a>
    </section>
  );
}
