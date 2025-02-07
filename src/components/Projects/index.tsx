import { useTranslation } from 'react-i18next';
import { PROJECTS_DATA } from '../../constants/components';
import Project from '../Project';
import styles from './index.module.scss';

export default function Projects(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="projects"
        className={`${styles.section} ${styles.projects} ${styles.center}`}
      >
        <div>
          <h2 className={styles.sectionTitle}>{t('projects')}</h2>
        </div>
        <div className={styles.projectsGrid}>
          {PROJECTS_DATA.map((item) => (
            <Project props={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}
