import { resources, defaultNS } from './utils/locales/i18n';

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  export interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof resources['en'];
  }
}
