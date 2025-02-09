import { useState, useEffect } from 'react';
import styles from './index.module.scss';

export default function Scroll(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      // Проверяем, если пользователь проскроллил больше 200px тогда появляется компонент
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.scrollTop}>
      {isVisible && (
        <a aria-label="Scroll up" href="#top">
          <i aria-hidden="true" className="fa fa-arrow-up"></i>
        </a>
      )}
    </div>
  );
}
