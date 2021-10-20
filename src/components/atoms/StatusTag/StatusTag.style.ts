import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ITheme } from 'src/utils/types';
import { ProfileStatus } from 'type/globalTypes';

interface SProp {
  status: ProfileStatus | string;
}
type ColorsListType = {
  APPROVED: 'success';
  DISAPPROVED: 'error';
  NEEDFIX: 'warning';
  PENDING: 'warning';
  REVIEWING: 'info';
};

const colors: ColorsListType = {
  APPROVED: 'success',
  DISAPPROVED: 'error',
  NEEDFIX: 'warning',
  PENDING: 'warning',
  REVIEWING: 'info',
};

const useStatusTagStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {
      width: 120,
      height: 120,
      borderRadius: 10,
      position: 'absolute',
      top: -60,
      left: -60,
      transform: 'rotate(135deg)',
      textAlign: 'center',
      paddingTop: 10,
      backgroundColor: ({ status }: SProp) =>
        status === undefined || status === null
          ? theme.palette.warning.main
          : theme.palette[colors[status as ProfileStatus]].main,
      '& svg': {
        color: theme.palette.primary.contrastText,
        transform: 'rotate(-135deg)',
      },
    },
  })
);

export default useStatusTagStyles;
