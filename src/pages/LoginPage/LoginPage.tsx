import React, { useState } from 'react';
import { Container, Box } from '@material-ui/core';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import GitHub from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import LoginForm from 'components/forms/LoginForm/LoginForm';
import { useStyles } from 'pages/LoginPage/LoginPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formState, setFormState] = useState({
    passwordVisible: false,
    checked: false,
  });

  const handleFormInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((stateValue) => ({
      ...stateValue,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormState((state) => ({
      ...state,
      passwordVisible: !formState.passwordVisible,
    }));
  };

  const toggleCheckboxState = () => {
    setFormState((state) => ({
      ...state,
      checked: !state.checked,
    }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <LoginForm
          formValues={formValues}
          formState={formState}
          handleFormInput={handleFormInput}
          togglePasswordVisibility={togglePasswordVisibility}
          toggleCheckboxState={toggleCheckboxState}
        />
        <p className={classes.registerLink}>
          New on our platform?{' '}
          <Link className={classes.link} to="/signup">
            Create an account
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

export default LoginPage;
