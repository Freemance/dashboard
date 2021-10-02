import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, CircularProgress } from '@material-ui/core';

// Styles
import useTablePlaceholderStyle from './TablePlaceholder.style';
interface IProps {
  loading?: boolean;
}
const TablePlaceholder = ({ loading = true }: IProps) => {
  const { t } = useTranslation('views', { useSuspense: false });
  const classes = useTablePlaceholderStyle();

  return (
    <>
      {loading ? (
        <Typography variant="h4" className={classes.placeholder}>
          {t('translation.freemancer.There is no freemances... yet.')}
        </Typography>
      ) : (
        <div className={classes.progress}>
          <CircularProgress variant="indeterminate" size={36} color="primary" />
        </div>
      )}
    </>
  );
};

export default TablePlaceholder;
