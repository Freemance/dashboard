import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// Material UI core components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Custom components
import UserMenuButton from '../../molecules/UserMenuButton';
import ThemeSwitcher from 'src/components/atoms/ThemeSwitcher';

// Icons
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Divider from '@material-ui/core/Divider';

// Types
import { IProps } from './type';

// Styles
import useUserMenuStyles from './UserMenu.style';

// Context
import { GlobalContext } from 'src/context';
import { toggleTheme } from 'src/context/reducer';
import { LocalStorage } from 'src/services/LocalStorage/LocalStorage.service';

const UserMenu: React.FC<IProps> = ({ isOnline, onLogOut, user }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useUserMenuStyles();
  const history = useHistory();

  // Global Context
  const { state, dispatch } = React.useContext(GlobalContext);

  const handleClick = (event: React.FormEvent<EventTarget>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = (event: React.FormEvent<EventTarget>): void => {
    event.persist();
    LocalStorage.remove('auth-token');
    LocalStorage.remove('refresh-token');
    LocalStorage.remove('role');
    history.push('/login');
  };

  const handleThemeChange = (): void => {
    dispatch(
      toggleTheme(LocalStorage.get('theme') === 'dark' ? 'light' : 'dark')
    );

    console.log('Switchin theme');
  };

  return (
    <>
      <UserMenuButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="actions"
        online={isOnline}
        onClick={handleClick}
        // userAvatar={user && user.avatar}
        userName={user && user.username}
        userRole={user && user.role}
      />

      <Menu
        anchorEl={anchorEl}
        classes={{
          paper: classes.menu,
        }}
        id="simple-menu"
        keepMounted
        onClose={handleClose}
        open={Boolean(anchorEl)}
        getContentAnchorEl={null}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <ListItemIcon className={classes.icon}>
            <ThemeSwitcher onChange={handleThemeChange} />
          </ListItemIcon>

          <ListItemText
            className={classes.itemText}
            primary={state.system.theme}
          />
        </MenuItem>
        <Divider />
        <MenuItem component={NavLink} to={`/account`}>
          <ListItemIcon className={classes.icon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText className={classes.itemText} primary="Perfil" />
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon className={classes.icon}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText className={classes.itemText} primary="Salir" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
