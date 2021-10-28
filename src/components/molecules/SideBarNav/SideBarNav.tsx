/* eslint-disable react/display-name */
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// MUI Components
import { List, ListItem, Button, Badge } from '@material-ui/core';

// Custom atoms
import WrappIcon from 'src/components/atoms/WrappIcon';

// Styles
import useSideBarNavStyles from './SideBarNav.style';

// Types
import { IProps } from './type';
import { ISideBarLink } from 'src/utils/types';

const SideBarNav: React.FC<IProps> = ({
  pages,
  className,
  ...rest
}: IProps) => {
  const classes = useSideBarNavStyles();
  const { t } = useTranslation('layout', { useSuspense: false });
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map(({ title, icon, href }: ISideBarLink) => (
        <ListItem className={classes.item} disableGutters key={title}>
          <Button
            disabled={title === 'Clients'}
            activeClassName={classes.active}
            className={classes.button}
            component={NavLink}
            to={href}
          >
            <Badge
              color="secondary"
              invisible={title !== 'Clients'}
              badgeContent="soon"
              style={{ marginLeft: 10 }}
              classes={{ badge: classes.newsNotif }}
            >
              <div className={classes.icon}>
                <WrappIcon icon={icon} />
              </div>
              {t`translation.sidebar.${title}`}
            </Badge>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SideBarNav;
