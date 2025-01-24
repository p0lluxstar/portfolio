import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';

export default function About(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={`${styles.about} ${styles.center}`}>
      <h1>
        {t('greeting')}
        <span className={styles.aboutName}> {t('fullName')}</span>
      </h1>
      <h2 className={styles.aboutRole}>A Front end Developer.</h2>
      <p className={styles.aboutDesc}>
        Consectetur neque sed quam molestiae consectetur nesciunt sit alias
        Vitae libero perferendis reprehenderit optio veritatis Accusantium at
        voluptatum cumque temporibus et Explicabo iste porro quis numquam
        distinctio Repellendus adipisci nam perferendis amet eaque hic
        Voluptates
      </p>
      <div className={`${styles.aboutContact} ${styles.center}`}>
        <a href="https://example.com">
          <span className={`${styles.btn} ${styles.btnOutline}`}>Resume</span>
        </a>
      </div>
    </div>
  );
}
