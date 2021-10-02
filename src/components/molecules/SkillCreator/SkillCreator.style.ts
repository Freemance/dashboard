import { makeStyles, createStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';

const useSkillCreatorStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      '& .MuiCardHeader-title': {
        fontSize: '1rem',
        fontWeight: 600,
        color: theme.palette.text.primary,
      },
    },
    skillList: {
      maxHeight: 360,
    },
    progress: {
      width: 18,
      height: 18,
      position: 'relative',
      marginLeft: 5,
      '& .MuiCircularProgress-root': {
        color: theme.palette.info.main,
      },
    },
    helpBtn: {},
  })
);
export default useSkillCreatorStyles;
