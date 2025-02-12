import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
const ENV = import.meta.env;

export default function ContactForm(): JSX.Element {
  const { t } = useTranslation();
  const [isLoding, setIsLoading] = useState(false);
  const [isCheckmark, setIsCheckmark] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const showCheckmark = (): void => {
    setTimeout(() => {
      setIsCheckmark(false);
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    // Отправка формы через EmailJS
    emailjs
      .sendForm(
        ENV.VITE_EMAILUS_SERVICE_ID,
        ENV.VITE_EMAILUS_TEMPLATE_ID,
        e.currentTarget, // Передаем форму
        ENV.VITE_EMAILUS_PUBLIC_KEY
      )
      .then(() => {
        formRef.current?.reset();
        setIsCheckmark(true);
        showCheckmark();
      })
      .catch(() => {
        setIsError(true);
        setErrorMessage('Ошибка при отправке формы');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.contactFormWrapper}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        action="#"
        className={styles.contacForm}
      >
        <div className={styles.contactFormField}>
          <label className={styles.contactFormLabel} htmlFor="name">
            {t('name')}
          </label>
          <input
            required
            placeholder={t('eyn')}
            type="text"
            className={styles.contactFormInput}
            name="name"
            id="name"
          />
        </div>
        <div className={styles.contactFormField}>
          <label className={styles.contactFormLabel} htmlFor="email">
            {t('email')}
          </label>
          <input
            required
            placeholder={t('eye')}
            type="text"
            className={styles.contactFormInput}
            name="email"
            id="email"
          />
        </div>
        <div className={styles.contactFormField}>
          <label className={styles.contactFormLabel} htmlFor="message">
            {t('message')}
          </label>
          <textarea
            required
            rows={10}
            className={styles.contactFormInput}
            placeholder={t('eym')}
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className={styles.btnWrapper}>
          <button
            type="submit"
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            {t('submit')}
          </button>
          {isLoding && (
            <div className={styles.loader}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {isCheckmark && (
            <div className={styles.checkmarkWrapper}>
              <div className={styles.checkmark}></div>
            </div>
          )}
          {isError && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
      </form>
    </div>
  );
}
