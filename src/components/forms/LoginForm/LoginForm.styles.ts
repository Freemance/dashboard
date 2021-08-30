import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  inputSpace: {
    marginBottom: '1rem',
  },
  labelSpace: {
    marginBottom: '1vh',
  },
  forgotPasswordDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  link: {
    margin: theme.spacing(0.5),
    textDecoration: 'none',
  },
  checkbox: {
    marginBottom: '0.5vh',
    marginTop: '0.5vh',
  },
}));
