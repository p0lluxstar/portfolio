import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import styles from './index.module.scss';
const ENV = import.meta.env;

export default function ContactForm(): JSX.Element {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Отправка формы через EmailJS
    emailjs
      .sendForm(
        ENV.VITE_EMAILUS_SERVICE_ID,
        ENV.VITE_EMAILUS_TEMPLATE_ID,
        e.currentTarget, // Передаем форму
        ENV.VITE_EMAILUS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    e.currentTarget.reset(); // Очистка формы после отправки
  };
  return (
    <div className={styles.contactFormContainer}>
      <form onSubmit={handleSubmit} action="#" className={styles.contacForm}>
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
        <button type="submit" className={`${styles.btn} ${styles.btnOutline}`}>
          {t('submit')}
        </button>
      </form>
    </div>
  );
}
