import styles from './index.module.scss';

export default function Scroll(): JSX.Element {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollTop}>
        <a aria-label="Scroll up" href="#top">
          <i aria-hidden="true" className="fa fa-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}
