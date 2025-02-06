import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm';
import styles from './index.module.scss';

export default function Contact(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      className={`${styles.section} ${styles.contact} ${styles.center}`}
      id="contact"
    >
      <h2 className={styles.sectionTitle}>{t('contact')}</h2>
      <ContactForm />
      {/* <a href="mailto:rjshekhar.official@gmail.com">
        <span className={`${styles.btn} ${styles.btnOutline} ${styles.center}`}>
          Email me
        </span>
      </a> */}
    </section>
  );
}
