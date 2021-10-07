import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useSkillItemStyles = makeStyles((theme: ITheme) =>
  createStyles({
    skillItem: {
      borderRadius: 10,
      cursor: 'pointer',
      transition: 'width .8s ease-in',
      '&:hover': {
        backgroundColor: theme.palette.primary.lightBg,
      },
      '&.deleting': {
        width: 'calc(100% - 50px)',
      },
      '& .MuiListItemText-primary': {
        color: theme.palette.text.primary,
        fontWeight: 500,
        fontSize: '1rem',
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.info.lightBg,
        '& .MuiListItemText-primary': {
          color: theme.palette.info.main,
        },
      },
    },
    progress: {
      position: 'relative',
      '& .MuiCircularProgress-root': {
        color: theme.palette.info.main,
      },
    },
    skillIcon: {},
    deleteButton: {
      '& svg': {
        stroke: theme.palette.error.main,
      },
    },
  })
);

export default useSkillItemStyles;
