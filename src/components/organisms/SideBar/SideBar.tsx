import * as React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';

// MUI components
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

// Custom components
import SideBarNav from 'src/components/molecules/SideBarNav';

// Types
import { IProps } from './type';

// Styles
import useSideBarStyles from './SideBar.style';

// Constants
import { PAGES } from 'src/utils/constants/sideBarLinks';

const SideBar: React.FC<IProps> = ({
  open,
  variant,
  onClose,
  className,
  ...rest
}: IProps) => {
  const classes = useSideBarStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
      {...rest}
    >
      <div className={clsx(classes.root, className)}>
        <Divider className={classes.divider} />
        <PerfectScrollbar>
          <SideBarNav className={classes.nav} pages={PAGES} />
        </PerfectScrollbar>
      </div>
    </Drawer>
  );
};

export default SideBar;
