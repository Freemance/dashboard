import { ISideBarLink } from '../types';

// Icons
import { Grid, Users, UserCheck, Settings } from 'react-feather';

export const PAGES: ISideBarLink[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Grid,
  },
  {
    title: 'Clients',
    href: '/clients',
    icon: Users,
  },
  {
    title: 'Freemancers',
    href: '/freemancers',
    icon: UserCheck,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];
