import * as React from 'react';
import Switch from '@material-ui/core/Switch';

// Styles
import useThemeSwitcherStyles from './ThemeSwitcher,style';

// types
import { IProps } from './type';

const ThemeSwitcher = (props: IProps) => {
  const classes = useThemeSwitcherStyles();
  const [state, setState] = React.useState({
    checked: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      onChange={handleChange}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
};

export default ThemeSwitcher;
