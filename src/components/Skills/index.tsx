import { SKILLS } from '../../constants/components';
import styles from './index.module.scss';

export default function Skills(): JSX.Element {
  return (
    <section className={`${styles.section} ${styles.skills}`} id="skills">
      <h2 className={styles.sectionTitle}>Skills</h2>
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
