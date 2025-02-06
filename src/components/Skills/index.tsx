import { useTranslation } from 'react-i18next';
import { SKILLS } from '../../constants/components';
import styles from './index.module.scss';

export default function Skills(): JSX.Element {
  const { t } = useTranslation();

  return (
    <section className={`${styles.section} ${styles.center}`} id="skills">
      <h2 className={styles.sectionTitle}>{t('skills')}</h2>
      <ul className={styles.skillsList}>
        {SKILLS.map((item) => (
          <li
            className={`${styles.skillsListItem} ${styles.btn} ${styles.btnPlain}`}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
