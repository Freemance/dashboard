import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useProfileInfoCardStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      height: '100%',
    },
    infoItem: {
      padding: 0,
      margin: '1.5rem 0 0',
      '& .MuiListItemIcon-root': {
        minWidth: 16,
        marginRight: '1rem',
        width: 24,
        height: 24,
      },
      '& .MuiListItemText-root': {
        margin: 0,
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.text.primary,
        fontWeight: 500,
        marginBottom: '.65rem',
        fontSize: '1rem',
        lineHeight: 1.2,
      },
      '& .MuiListItemText-secondary': {
        color: theme.palette.text.secondary,
        fontSize: '.92rem',
        fontWeight: 400,
        lineHeight: 1.5,
        marginBottom: 0,
      },
    },
  })
);

export default useProfileInfoCardStyles;
