import { URL_GITHUB } from '../../constants/components';
import styles from './index.module.scss';

export default function Logo(): JSX.Element {
  return (
    <div className={styles.logoWrapper}>
      <div className={styles.logoImgWrapper}>
        <img src="/assets/img/profile.jpg" className={styles.logoImg}></img>
      </div>
      <h3>
        <a href={URL_GITHUB} target="blank" className={styles.link}>
          АE
        </a>
      </h3>
    </div>
  );
}
