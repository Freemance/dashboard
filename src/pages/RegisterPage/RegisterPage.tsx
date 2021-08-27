import React, { useState } from 'react';
import {
  OutlinedInput,
  Container,
  InputLabel,
  makeStyles,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Box,
} from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import GitHub from '@material-ui/icons/GitHub';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControlLabel-root': {
      marginRight: '0',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
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

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });
  const classes = useStyles();
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <div>
            <InputLabel className={classes.labelSpace} htmlFor="email">
              Username
            </InputLabel>
            <OutlinedInput
              className={classes.inputSpace}
              required
              fullWidth
              id="username"
              name="username"
              autoComplete="username"
              placeholder="Enter your username"
              autoFocus
              value={formValues.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <InputLabel className={classes.labelSpace} htmlFor="email">
              Email
            </InputLabel>
            <OutlinedInput
              className={classes.inputSpace}
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              autoFocus
              value={formValues.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              required
              fullWidth
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleInput}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {true ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="I agree to "
          />
          <Link className={classes.link} to="/terms">
            privacy policy & terms
          </Link>
          <Button
            // isLoading={loading}
            variant="contained"
            color="primary"
            fullWidth
          >
            Sign up
          </Button>
        </form>
        <p className={classes.registerLink}>
          Already have an account?{' '}
          <Link className={classes.link} to="/signup">
            Sign in instead
          </Link>
        </p>
        <div className={classes.divider}>
          <p className={classes.dividerPara}>
            <span className={classes.dividerSpan}>or</span>
          </p>
        </div>
        <Box mt={1}>
          <Facebook color="primary" className={classes.icon} />
          <Twitter color="primary" className={classes.icon} />
          <EmailOutlined color="primary" className={classes.icon} />
          <GitHub color="primary" className={classes.icon} />
        </Box>
      </div>
    </Container>
  );
};

export default RegisterPage;
