import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={`${styles.about} ${styles.center}`}>
      <div>
        <h1>
          {t('greeting')}
          <span className={styles.aboutName}> {t('fullName')}</span>
        </h1>
      </div>
      <h2 className={styles.aboutRole}>{t('profession')}</h2>
      <p className={styles.aboutDesc}>{t('aboutMe')}</p>
      <div className={`${styles.aboutContact} ${styles.center}`}>
        <button
          onClick={() => window.open('assets/docs/rezume.pdf', '_blank')}
          className={`${styles.btn} ${styles.btnOutline}`}
        >
          {t('rezume')}
        </button>
      </div>
    </div>
  );
}
