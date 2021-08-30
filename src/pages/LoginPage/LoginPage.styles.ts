import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    margin: theme.spacing(0.5),
    textDecoration: 'none',
  },
  divider: {
    margin: theme.spacing(0, 0),
    width: '100%',
    textAlign: 'center',
    color: 'black',
  },
  dividerPara: {
    borderBottom: `1px solid grey`,
    lineHeight: '0.1em',
    margin: '0.5rem 0 1rem 0',
    padding: '0',
  },
  dividerSpan: {
    backgroundColor: 'white',
    padding: '0 5px 0 5px',
  },
  icon: {
    cursor: 'pointer',
    margin: theme.spacing(0, 2),
  },
  registerLink: {
    margin: '1rem 0',
  },
}));
