import { MdDashboard, MdReport, MdLogout } from 'react-icons/md';
import { FiUsers, FiCode } from 'react-icons/fi';

export const publicMenu = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Features',
    href: '#features',
  },
  {
    name: 'Team',
    href: '#team',
  },
  {
    name: 'Blog',
    href: '#blog',
  },
  {
    name: 'FAQs',
    href: '#faqs',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

export const dashboardMenu = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    Icon: MdDashboard,
  },
  {
    name: 'Repositories',
    Icon: FiCode,
    href: '/repositories',
  },
  {
    name: 'Organizations',
    Icon: FiUsers,
    href: '/organizations',
  },
  {
    name: 'Report',
    Icon: MdReport,
    href: '/report',
  },
  {
    name: 'Logout',
    Icon: MdLogout,
    href: '/logout',
  },
];
