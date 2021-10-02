import { makeStyles } from '@material-ui/core';
import { ITheme } from 'src/utils/types';
import { Dimension } from './type';

const useUploaderStyles = makeStyles((theme: ITheme) => ({
  root: {
    width: ({ width }: Dimension) => width,
    height: ({ height }: Dimension) => height,
    margin: 'auto',
    position: 'relative',
    border: `1px solid ${theme.palette.info.main}`,
    borderRadius: '.6rem',
  },
  image: {
    width: '60%',
    height: '60%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    zIndex: 2,
  },

  fileIcon: {
    width: '50%',
    height: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -35px)',
    position: 'absolute',
    color: theme.palette.info.main,
    zIndex: 2,
    strokeWidth: 1.5,
  },
  addIcon: {
    width: '48%',
    height: '48%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -35px)',
    position: 'absolute',
    color: theme.palette.secondary.main,
    zIndex: 2,
  },
  label: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    backgroundColor: theme.palette.secondary.lightBg,
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    transition: `all 1s ${theme.transitions.easing.easeInOut}`,
    zIndex: 3,
    '&:hover': {
      opacity: 1,
    },
  },
}));

export default useUploaderStyles;
