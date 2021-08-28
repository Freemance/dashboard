import * as React from 'react';
import clsx from 'clsx';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// import { Sidebar, Topbar, Footer } from '@components';
// Orgaisms
import Topbar from 'src/components/organisms/Topbar';
import Footer from 'src/components/organisms/Footer';

// Styles
import useStyles from './MainLayout.style';

// types
import { ILayoutProps } from './types';

const MainLayout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  /* const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar: boolean = isDesktop ? true : openSidebar;
*/
  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <Topbar
      // onSidebarOpen={handleSidebarOpen}
      />
      <div className={classes.headerNavbarShadow} />
      {/* <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      /> */}

      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
