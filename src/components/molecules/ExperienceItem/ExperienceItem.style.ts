import { makeStyles, createStyles } from '@material-ui/styles';
import { ITheme } from 'src/utils/types';

interface SProp {
  index: number;
}

const useExperienceItemStyles = makeStyles((theme: ITheme) =>
  createStyles({
    root: {},
    card: {},
    icon: {
      color: ({ index }: SProp) =>
        index % 2 !== 0
          ? theme.palette.primary.main
          : theme.palette.primary.contrastText,
    },
  })
);

export default useExperienceItemStyles;
