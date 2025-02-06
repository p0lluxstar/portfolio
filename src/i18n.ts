import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';

// Конфигурация i18next
i18n
  .use(LanguageDetector) // Определение языка пользователя (на основе браузера)
  .use(initReactI18next) // Интеграция с React
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: 'ru', // Язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
