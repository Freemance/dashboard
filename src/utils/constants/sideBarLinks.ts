import { ISideBarLink } from '../types';

// Icons
import { Grid, Users, Shield, Settings } from 'react-feather';

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
    title: 'Freemancer',
    href: '/policys',
    icon: Shield,
  },
  {
    title: 'Settings',
    href: '/companys',
    icon: Settings,
  },
];
