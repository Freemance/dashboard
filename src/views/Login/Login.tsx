import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

// Custom Components
import LoginForm from 'src/components/organisms/LoginForm';

// Styles
import useLoginStyle from './Login.style';

const Login: React.FC = () => {
  const classes = useLoginStyle();
  const { t } = useTranslation('views', { useSuspense: false });

  return (
    <section className={classes.root}>
      <Typography variant="h3" component="h1" className={classes.title}>
        {t('translation.Login.Freemance backoffice')}
      </Typography>
      <LoginForm />
    </section>
  );
};

export default Login;
