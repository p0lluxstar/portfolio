import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm';
import styles from './index.module.scss';

export default function Contact(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section
      className={`${styles.section} ${styles.contact} ${styles.center}`}
      id="contacts"
    >
      <h2 className={styles.sectionTitle}>
        <span className={styles.underlineTitle}>{t('contacts')}</span>
      </h2>
      <ContactForm />
    </section>
  );
}
