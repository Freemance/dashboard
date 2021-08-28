import * as React from 'react';

// Material UI core components
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icons
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Types
import { IProps } from './type';

// Styles
import useUserMenuStyles from './UserMenu.style';

// Custom components
// import CustomRouterLink from '../../atoms/CustomRouterLink';
import UserMenuButton from '../../molecules/UserMenuButton';
import { NavLink } from 'react-router-dom';

/* const CustomMenuItem: React.FC<IMenuItem> = (props: IMenuItem) => (
  <MenuItem {...props} />
); */

const UserMenu: React.FC<IProps> = ({ isOnline, onLogOut, user }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useUserMenuStyles();

  const handleClick = (event: React.FormEvent<EventTarget>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = (event: React.FormEvent<EventTarget>): void => {
    event.persist();
    onLogOut();
  };
  return (
    <>
      <UserMenuButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        aria-label="actions"
        online={isOnline}
        onClick={handleClick}
        userAvatar={user && user.avatar}
        userName={user && user.firstName}
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
        <MenuItem component={NavLink} to={`/account`}>
          <ListItemIcon className={classes.icon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </MenuItem>
        <MenuItem onClick={handleLogOut}>
          <ListItemIcon className={classes.icon}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Salir" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
