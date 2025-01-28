import { PROJECTS_DATA } from '../../constants/components';
import Project from '../Project';
import styles from './index.module.scss';

export default function Projects(): JSX.Element {
  return (
    <>
      <section id="projects" className={`${styles.section} ${styles.projects}`}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectsGrid}>
          {PROJECTS_DATA.map((item) => (
            <Project props={item} key={item.name} />
          ))}
        </div>
      </section>
    </>
  );
}
