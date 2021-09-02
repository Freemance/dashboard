import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

/**
 * Light colors palette
 */
export const lightPalette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#0c0540',
    main: '#000c83',
    light: '#4674FF',
    lightBg: 'rgba(51,102,255,.12)!important',
    gradient: 'linear-gradient(47deg,#3366ff,#4674FF)',
    boxShadow: '0 0 3px 1px rgb(51 102 255 / 70%)',
  },
  secondary: {
    contrastText: white,
    dark: '#122744',
    main: '#283B54',
    light: '#49596C',
    lightBg: 'rgba(18,39,68,.12)',
    gradient: 'linear-gradient(47deg,#283B54,#49596C)',
    boxShadow: '0 0px 3px 1px #283B54',
  },
  success: {
    contrastText: white,
    dark: '#2AA549',
    main: '#33C758',
    light: '#57D175',
    lightBg: 'rgba(51,199,88,.12)',
    gradient: 'linear-gradient(47deg,#33C758,#57D175)',
    boxShadow: '0 8px 3px 1px #33C758',
  },
  info: {
    contrastText: white,
    dark: '#00A1B5',
    main: '#00CFE8',
    light: '#1CE7FF',
    lightBg: 'rgba(0,207,232,.12)',
    gradient: 'linear-gradient(47deg,#00CFE8,#1CE7FF)',
    boxShadow: '0 8px 3px 1px #00CFE8',
  },
  warning: {
    contrastText: white,
    dark: '#FEB856',
    main: '#FFC16C',
    light: '#FFCA81',
    lightBg: 'rgba(255,193,108,.12)',
    gradient: 'linear-gradient(47deg,#FFC16C,#FFCA81)',
    boxShadow: '0 8px 3px 1px #FFC16C',
  },
  error: {
    contrastText: white,
    dark: '#e42728',
    main: '#ea5455',
    light: '#f08182',
    lightBg: 'rgba(234,84,85,.12)',
    gradient: 'linear-gradient(47deg,#ea5455,#f08182)',
    boxShadow: '0 8px 3px 1px #ea5455',
  },
  text: {
    primary: '#122744',
    secondary: '#414ca5',
  },
  background: {
    default: '#F7FBFE',
    paper: white,
    gradient:
      'linear-gradient(90deg, hsla(206, 78%, 98%, 1) 0%, hsla(204, 87%, 94%, 1) 0.2%, hsla(208, 88%, 97%, 1) 0.4%, hsla(200, 86%, 97%, 1) 0.6%, hsla(206, 78%, 98%, 1) 0.8%)',
  },
  shadows: {
    card: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};

/**
 * Dark colors palette
 */
export const darkPalette = {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#0c0540',
    main: '#000c83',
    light: '#4674FF',
    lightBg: 'rgba(51,102,255,.12)!important',
    gradient: 'linear-gradient(47deg,#3366ff,#4674FF)',
    boxShadow: '0 0 3px 1px rgb(51 102 255 / 70%)',
  },
  secondary: {
    contrastText: white,
    dark: '#122744',
    main: '#283B54',
    light: '#49596C',
    lightBg: 'rgba(18,39,68,.12)',
    gradient: 'linear-gradient(47deg,#283B54,#49596C)',
    boxShadow: '0 0px 3px 1px #283B54',
  },
  success: {
    contrastText: white,
    dark: '#2AA549',
    main: '#33C758',
    light: '#57D175',
    lightBg: 'rgba(51,199,88,.12)',
    gradient: 'linear-gradient(47deg,#33C758,#57D175)',
    boxShadow: '0 8px 3px 1px #33C758',
  },
  info: {
    contrastText: white,
    dark: '#00A1B5',
    main: '#00CFE8',
    light: '#1CE7FF',
    lightBg: 'rgba(0,207,232,.12)',
    gradient: 'linear-gradient(47deg,#00CFE8,#1CE7FF)',
    boxShadow: '0 8px 3px 1px #00CFE8',
  },
  warning: {
    contrastText: white,
    dark: '#FEB856',
    main: '#FFC16C',
    light: '#FFCA81',
    lightBg: 'rgba(255,193,108,.12)',
    gradient: 'linear-gradient(47deg,#FFC16C,#FFCA81)',
    boxShadow: '0 8px 3px 1px #FFC16C',
  },
  error: {
    contrastText: white,
    dark: '#e42728',
    main: '#ea5455',
    light: '#f08182',
    lightBg: 'rgba(234,84,85,.12)',
    gradient: 'linear-gradient(47deg,#ea5455,#f08182)',
    boxShadow: '0 8px 3px 1px #ea5455',
  },
  text: {
    primary: '#122744',
    secondary: '#414ca5',
  },
  background: {
    default: '#F7FBFE',
    paper: white,
    gradient:
      'linear-gradient(90deg, hsla(206, 78%, 98%, 1) 0%, hsla(204, 87%, 94%, 1) 0.2%, hsla(208, 88%, 97%, 1) 0.4%, hsla(200, 86%, 97%, 1) 0.6%, hsla(206, 78%, 98%, 1) 0.8%)',
  },
  shadows: {
    card: '0 4px 24px 0 rgb(34 41 47 / 10%)',
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200],
};
