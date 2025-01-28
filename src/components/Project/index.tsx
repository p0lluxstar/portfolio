import { IProjectData } from '../../types/interfaces';
import styles from './index.module.scss';

interface ProjectProps {
  props: IProjectData;
}

export default function Project({ props }: ProjectProps): JSX.Element {
  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={props.imgSrc} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.projectTitle}>{props.name}</h3>
        <ul className={styles.projectStack}>
          {props.stack.map((item) => (
            <li className={styles.projectStackItem} key={item}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.linkWrapper}>
          <a
            href={props.links.github}
            aria-label="source code"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa-github"></i>
          </a>
          <a
            href={props.links.sait}
            aria-label="live preview"
            className={`${styles.link} ${styles.linkIcon}`}
          >
            <i aria-hidden="true" className="fa fa fa-external-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
