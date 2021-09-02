/* eslint-disable react/display-name */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// MUI Components
import { List, ListItem, Button } from '@material-ui/core';

// Custom atoms
import WrappIcon from 'src/components/atoms/WrappIcon';

// Styles
import useSideBarNavStyles from './SideBarNav.style';

// Types
import { IProps } from './type';

const SideBarNav: React.FC<IProps> = ({
  pages,
  className,
  ...rest
}: IProps) => {
  const classes = useSideBarNavStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={NavLink}
            to={page.href}
          >
            <div className={classes.icon}>
              <WrappIcon icon={page.icon} />
            </div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarNav;
