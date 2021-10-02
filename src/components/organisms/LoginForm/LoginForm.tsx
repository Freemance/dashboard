import * as React from 'react';
import validate from 'validate.js';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// Mui Components
import {
  Card,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from '@material-ui/core';

// Icons
import coloredLogo from 'src/assets/images/settings.min.svg';

// Context
import { GlobalContext } from 'src/context';

// Graphql
import { LOGIN } from 'src/providers/graphql/user/user.mutation.gql';
import { useMutation } from '@apollo/client';

// Styles
import useLoginFormStyles from './LoginForm.style';

// Types
import { validateSchema, IState, ErrorType } from './type';
import { _saveUserData } from 'src/utils/helpers/auth.helper';
import { setAdminUser } from 'src/context/reducer';
import { AdminUserType } from 'src/context/state';

const LoginForm: React.FC = () => {
  const classes = useLoginFormStyles();
  const history = useHistory();

  // Global Context
  const { dispatch, state } = React.useContext(GlobalContext);

  //
  const { t } = useTranslation('common', { useSuspense: false });

  const [formState, setFormState] = React.useState<IState>({
    isValid: false,
    values: {
      email: '',
      password: '',
    },
    touched: {
      email: null,
      password: null,
    },
    errors: {
      email: null,
      password: null,
    },
  });

  let email: string = '';
  let password: string = '';

  const [signInMutation, { loading, error: mutationError }] = useMutation(
    LOGIN,
    {
      errorPolicy: 'all',
      onCompleted: (data) => {
        if (data) {
          const { loginDashboard } = data;
          if (loginDashboard) {
            const { user } = loginDashboard;

            _saveUserData(loginDashboard);
            const adminUser: AdminUserType = {
              id: user.id,
              username: user.username,
              email: user.email,
              role: user.role,
            };
            dispatch(setAdminUser(adminUser));
            history.push('/dashboard');
          }
        }
      },
    }
  );

  React.useEffect(() => {
    const errors = validate(formState.values, validateSchema);

    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
    email = event.target.name === 'email' ? event.target.value : email;
    password = event.target.name === 'password' ? event.target.value : password;
  };

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    if (!loading) {
      signInMutation({
        variables: {
          email: formState.values.email,
          password: formState.values.password,
        },
      });
    }
  };

  const hasError = (field: ErrorType) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <Card className={classes.root}>
      <form className={classes.form} onSubmit={handleSignIn}>
        <div className={classes.sugestion}>
          <div className={classes.formLogo}>
            <img
              alt="settings icon"
              height="150px"
              src={
                state && state.system.theme === 'dark'
                  ? coloredLogo
                  : coloredLogo
              }
              width="150px"
            />
          </div>
        </div>
        <div>
          <Typography align="center" color="error" variant="body1">
            {mutationError &&
              mutationError.networkError &&
              mutationError.networkError.message}
          </Typography>
          <Typography align="center" color="error" variant="body1">
            {mutationError &&
              mutationError.graphQLErrors &&
              mutationError.graphQLErrors.length > 0 &&
              mutationError.graphQLErrors[0].message}
          </Typography>
        </div>
        <TextField
          className={classes.textField}
          error={hasError('email')}
          fullWidth
          helperText={hasError('email') ? formState.errors.email[0] : null}
          label="Email address"
          name="email"
          onChange={handleChange}
          type="text"
          value={formState.values.email || ''}
          margin="dense"
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          error={hasError('password')}
          fullWidth
          helperText={
            hasError('password') ? formState.errors.password[0] : null
          }
          label="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={formState.values.password || ''}
          variant="outlined"
          margin="dense"
        />
        <Button
          className={classes.signInButton}
          color="primary"
          disabled={!formState.isValid}
          fullWidth
          // onClick= {mutation}
          size="large"
          type="submit"
          variant="contained"
        >
          {loading ? (
            <>
              {t('translation.buttons.Auth')}
              <CircularProgress
                className={classes.progress}
                size={12}
                variant="indeterminate"
              />
            </>
          ) : (
            t('translation.buttons.Login')
          )}
        </Button>
      </form>
    </Card>
  );
};

export default LoginForm;
