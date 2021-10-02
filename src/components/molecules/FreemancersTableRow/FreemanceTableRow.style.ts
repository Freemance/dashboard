import { makeStyles, createStyles } from '@material-ui/core/styles';

const useRowStyles = makeStyles(() =>
  createStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  })
);

export default useRowStyles;
