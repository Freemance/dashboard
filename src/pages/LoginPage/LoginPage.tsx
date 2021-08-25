import React, { useState } from 'react';
import {
  OutlinedInput,
  Container,
  // CssBaseline,
  InputLabel,
  // Checkbox,
  makeStyles,
  // Grid,
  Button,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
// import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import { auth } from 'store/actions'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputSpace: {
    marginBottom: '5vh',
  },
  labelSpace: {
    marginBottom: '1vh',
  },
  forgotPasswordDiv: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    margin: '0 0 1vh, 0',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
}));

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
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
  // const history = useHistory()
  // const dispatch = useDispatch()
  // const { isAuthenticated, loading, error } = useSelector((state) => state.auth)

  // const authUser = (event) => {
  //     event.preventDefault()
  //     dispatch(auth(email, password, history))
  // }

  // useEffect(() => {
  //     if (isAuthenticated) {
  //         history.push("/dashboard")
  //     }
  // }, [isAuthenticated, history])

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <form
          className={classes.form}
          noValidate
          // onSubmit={login}
        >
          <div>
            <InputLabel className={classes.labelSpace} htmlFor="email">
              Email
            </InputLabel>
            <OutlinedInput
              className={classes.inputSpace}
              required
              fullWidth
              id="email"
              // label="Email Address"
              name="email"
              autoComplete="email"
              placeholder="Enter your email"
              autoFocus
              value={formValues.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <div className={classes.forgotPasswordDiv}>
              <InputLabel className={classes.labelSpace} htmlFor="password">
                Password
              </InputLabel>
              <a className={classes.forgotPassword}>Forgot Password?</a>
            </div>
            <OutlinedInput
              required
              fullWidth
              name="password"
              // label="Password"
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
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {true ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>
          <FormControlLabel
            control={
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Remember Me"
          />
          {/* <Grid>
                        <Checkbox/>
                    </Grid> */}
          <Button
            // isLoading={loading}
            variant="contained"
            color="primary"
            // caption="SignIn"
            fullWidth
          >
            Sign In
          </Button>
        </form>
      </div>
      {/* <Box mt={4}>
                <Copyright />
            </Box> */}
    </Container>
  );
};

export default LoginPage;
