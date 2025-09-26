import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export default function About(): JSX.Element {
  const { t } = useTranslation();

  const arrWord = t('profession').split(' ');

  return (
    <div className={`${styles.about} ${styles.center}`}>
      <div>
        <h1 className={styles.aboutNameTitle}>
          {t('greeting')}
          <span className={styles.aboutName}> {t('fullName')}</span>
        </h1>
      </div>
      <h2 className={styles.aboutRole}>
        <span className={styles.underlineTitle}>
          {arrWord[0].toUpperCase()}
        </span>{' '}
        {arrWord.slice(1).join(' ').toUpperCase()}
      </h2>
      <p className={styles.aboutDesc}>{t('aboutMe')}</p>
      <div className={`${styles.aboutContact} ${styles.center}`}>
        <button
          onClick={() => window.open('assets/docs/resume.pdf', '_self')}
          className={`${styles.btn} ${styles.btnOutline}`}
        >
          {t('resume')}
        </button>
      </div>
    </div>
  );
}
