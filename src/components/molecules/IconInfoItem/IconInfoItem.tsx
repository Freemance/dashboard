import {
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { Skeleton } from '@material-ui/lab';
import * as React from 'react';

// Types
import { IProps } from './type';
import useIconInfoItemStyles from './IconInfoItem.style';

const IconInfoItem: React.FC<IProps> = ({
  variant,
  color = 'primary',
  icon: Icon,
  label,
  data = null,
}: IProps) => {
  const classes = useIconInfoItemStyles({ color });
  return (
    <ListItem>
      {!data && data != 0 ? (
        <Skeleton variant="circle" width={48} height={48} />
      ) : (
        <ListItemAvatar>
          <Avatar
            variant={variant || 'circular'}
            className={clsx(classes.ItemIcon)}
          >
            {Icon}
          </Avatar>
        </ListItemAvatar>
      )}
      <ListItemText
        primary={
          !data ? (
            <Skeleton height={24} width="50%" />
          ) : (
            <Typography className={classes.dataText} variant="h4">
              {data}
            </Typography>
          )
        }
        secondary={
          !data && data != 0 ? <Skeleton height={16} width="40%" /> : label
        }
      />
    </ListItem>
  );
};

export default IconInfoItem;
