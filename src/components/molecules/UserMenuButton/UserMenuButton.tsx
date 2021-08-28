import React from 'react';

// Material UI components
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';

// Icons
import PeopleIcon from '@material-ui/icons/People';

// Types
import { IProps } from './type';

// Styles
import useUserMenuButtonStyle from './UserMenuButton.styles';

// Config
// import { config } from '../../config';

const UserMenuButton: React.FC<IProps> = ({
  online,
  userRole,
  userAvatar,
  userName,
  ...rest
}: IProps) => {
  const classes = useUserMenuButtonStyle();

  return (
    <Button {...rest} disableRipple className={classes.button}>
      <ListItem component="div" className={classes.infoItem}>
        <ListItemText
          primary={userName}
          secondary={userRole}
          className={classes.infoText}
        />
      </ListItem>
      <Badge
        className={classes.badge}
        overlap="circular"
        classes={{
          badge: online ? 'online' : 'offline',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar
          alt={userName}
          className={classes.avatar}
          // src={userAvatar && `${config.server_host}/avatars/${userAvatar}`}
        >
          <PeopleIcon />
        </Avatar>
      </Badge>
    </Button>
  );
};

export default UserMenuButton;
