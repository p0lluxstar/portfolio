import { useState } from 'react';
import { IProjectData } from '../../types/interfaces';
import styles from './index.module.scss';

interface ProjectProps {
  props: IProjectData;
}

export default function ProjectTest({ props }: ProjectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const getLangFromLS = localStorage.getItem('lang');

  return (
    <div className={styles.project}>
      <div className={styles.image}>
        <img src={props.imgSrc} />
      </div>
      <div className={`${styles.details} ${isOpen ? `${styles.open}` : ''}`}>
        <div className={styles.detailsData}>
          <p className={styles.projectDesc}>
            {getLangFromLS === 'ru'
              ? props.description.ru
              : props.description.en}
          </p>
          <div>
            <ul className={styles.projectStack}>
              {props.stack.map((item) => (
                <li className={styles.projectStackItem} key={item}>
                  {item}
                </li>
              ))}
            </ul>
            <div className={styles.linkWrapper}>
              {props.links.github && (
                <a
                  href={props.links.github}
                  aria-label="source code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.link} ${styles.linkIcon}`}
                >
                  <i aria-hidden="true" className="fa fa-github"></i>
                </a>
              )}
              {props.links.sait && (
                <a
                  href={props.links.sait}
                  aria-label="live preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.link} ${styles.linkIcon}`}
                >
                  <i aria-hidden="true" className="fa fa fa-external-link"></i>
                </a>
              )}
            </div>
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
