import * as React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Context
import { GlobalContext } from 'src/context';

// import NotificationMenu from '../../Molecules/NotificationMenu';
import UserMenu from '../../molecules/UserMenu';

// Styles
import useTopbarStyle from './Topbar.style';

// Types
import { ITopbarProps } from './type';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

const Topbar = ({ className, onSidebarOpen, ...rest }: ITopbarProps) => {
  const classes: ClassNameMap = useTopbarStyle();
  const { state } = React.useContext(GlobalContext);
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      classes={{
        root: classes.appBar,
      }}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon className={classes.btn} />
          </IconButton>
        </Hidden>

        <div className={classes.flexGrow} />

        {/* <NotificationMenu />  */}

        <UserMenu user={state.adminUser} isOnline={false} />
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
