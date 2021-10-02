import * as React from 'react';
// MUI component
import Typography from '@material-ui/core/Typography';
import NotFoundImg from 'src/assets/images/404.svg';
import { useTranslation } from 'react-i18next';
// Styles
import useCustom404Style from './Custom404.style';

const Custom404: React.FC = () => {
  const classes = useCustom404Style();

  const { t } = useTranslation('views', { useSuspense: false });

  return (
    <div className={classes.content}>
      <img src={NotFoundImg} alt="page not found" />
      <Typography className={classes.title} variant="h1">
        {t('translation.404.This page does not exist.')}
      </Typography>
      <Typography className={classes.subTitle} variant="subtitle2">
        {t(
          'translation.404.You either tried some shady route or you came here by mistake.'
        )}
      </Typography>
    </div>
  );
};

export default Custom404;
