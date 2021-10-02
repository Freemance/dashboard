import * as React from 'react';
import { Avatar, Typography } from '@material-ui/core';

// Types
import { IProps } from './type';

// Styles
import useTextIconStyles from './TextIcon.style';

const TextIcon: React.FC<IProps> = ({
  color = 'primary',
  icon: Icon,
  label,
  variant,
}: IProps) => {
  const classes = useTextIconStyles({ color });
  return (
    <div className={classes.root}>
      <Avatar variant={variant || 'circular'} className={classes.ItemIcon}>
        {Icon}
      </Avatar>
      <Typography variant="h3">{label}</Typography>
    </div>
  );
};

export default TextIcon;
