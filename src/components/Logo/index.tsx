import profileIMG from '../../../public/assets/img/profile.jpg';
import { URL_GITHUB } from '../../constants/components';
import styles from './index.module.scss';

export default function Logo(): JSX.Element {
  return (
    <div className={styles.logoWrapper}>
      <a href={URL_GITHUB} className={styles.link}></a>
      <div className={styles.logoImgWrapper}>
        <img src={profileIMG} className={styles.logoImg}></img>
      </div>
      <h3>
        <a href={URL_GITHUB} className={styles.link}>
          АE
        </a>
      </h3>
    </div>
  );
}
