import React from 'react';

// Material UI components
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

// Icons
import { User } from 'react-feather';

// Types
import { IdentityType } from './type';

// Styles
import useFreemancerItemStylesStyles from './FreemancerItem.style';

// import { config } from '../../config';

const CustomPeopleItem = ({ name, avatar }: IdentityType) => {
  const classes = useFreemancerItemStylesStyles();

  return (
    <ListItem component="div" className={classes.root}>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          // src={avatar && `${config.server_host}/avatars/${avatar}`}
        >
          <User />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default CustomPeopleItem;
