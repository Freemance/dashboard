// .use(Backend)
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
//  .use(LanguageDetector)

import i18n from 'i18next';

// en
import common from './en/common.json';
import layout from './en/layout.json';
import views from './en/views.json';

import { initReactI18next } from 'react-i18next';

export const defaultNS = 'layout';
export const resources = {
  en: {
    common,
    layout,
    views,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'en',
  ns: ['layout', 'views', 'common'],
  defaultNS,
  resources,
});
