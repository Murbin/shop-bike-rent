import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translateEN from '../src/translation/en/index.json';
import translateES from '../src/translation/es/index.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translateEN
      },
      es: {
        translation: translateES
      }
    }
  });

i18n.changeLanguage('es');
