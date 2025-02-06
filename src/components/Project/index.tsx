import { useState } from 'react';
import { IProjectData } from '../../types/interfaces';
import styles from './index.module.scss';

interface ProjectProps {
  props: IProjectData;
}

export default function ProjectTest({ props }: ProjectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={props.imgSrc} />
      </div>
      <div className={`${styles.details} ${isOpen ? `${styles.open}` : ''}`}>
        <div className={styles.detailsData}>
          <h3 className={styles.projectTitle}>{props.name}</h3>
          <p className={styles.projectText}>
            Какой-то текст, какой-то текст, какой-то текст, какой-то текст.
          </p>
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
        <div className={styles.btnWrapper}>
          <button
            className={styles.btnDetails}
            onClick={() => setIsOpen(!isOpen)}
          >
            <i
              className={`${`fa fa-chevron-right`} ${isOpen ? `${styles.openArrow}` : ''}`}
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}
