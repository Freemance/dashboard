import React, { FC } from 'react';
import {
  OutlinedInput,
  InputLabel,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStyles } from 'components/forms/LoginForm/LoginForm.styles';

interface IProps {
  formValues: {
    email: string;
    password: string;
  };
  formState: {
    passwordVisible: boolean;
    checked: boolean;
  };
  handleFormInput: React.ChangeEventHandler<HTMLInputElement>;
  togglePasswordVisibility: () => void;
  toggleCheckboxState: () => void;
}

const LoginForm: FC<IProps> = ({
  formValues,
  formState,
  handleFormInput,
  togglePasswordVisibility,
  toggleCheckboxState,
}: IProps) => {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate>
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
          onChange={handleFormInput}
        />
      </div>
      <div>
        <div className={classes.forgotPasswordDiv}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Link to="/forgot_password" className={classes.link}>
            Forgot Password?
          </Link>
        </div>
        <OutlinedInput
          required
          fullWidth
          name="password"
          type={formState.passwordVisible ? 'text' : 'password'}
          id="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          value={formValues.password}
          onChange={handleFormInput}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={togglePasswordVisibility}
              >
                {formState.passwordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </div>
      <FormControlLabel
        className={classes.checkbox}
        control={
          <Checkbox
            checked={formState.checked}
            onChange={toggleCheckboxState}
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />

      <Button variant="contained" color="primary" fullWidth>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
