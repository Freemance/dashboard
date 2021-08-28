import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useUserMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      color: theme.palette.text.primary,
      minWidth: 20,
      marginRight: '1.1rem',
      '& svg': {
        width: 20,
        strokeWidth: 2,
      },
    },
    menu: {
      width: '12rem',
    },
  })
);

export default useUserMenuStyles;
