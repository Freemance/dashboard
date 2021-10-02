import * as React from 'react';
import clsx from 'clsx';
import { useTheme, Theme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// Orgaisms
import Topbar from 'src/components/organisms/Topbar';
import Footer from 'src/components/organisms/Footer';
import SideBar from 'src/components/organisms/SideBar/SideBar';
// Styles
import useStyles from './MainLayout.style';

// types
import { ILayoutProps } from './types';
import Wrapper from '../Wrapper';

const MainLayout: React.FC<ILayoutProps> = ({ children }: ILayoutProps) => {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = React.useState<boolean>(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar: boolean = isDesktop ? true : openSidebar;

  return (
    <Wrapper>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        <Topbar onSidebarOpen={handleSidebarOpen} />
        <div className={classes.headerNavbarShadow} />
        <SideBar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? 'persistent' : 'temporary'}
        />

        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </div>
    </Wrapper>
  );
};

export default MainLayout;
