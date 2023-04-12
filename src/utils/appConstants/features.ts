import { BsSearch } from 'react-icons/bs';
import { FaCodeBranch, FaUsers, FaClipboard } from 'react-icons/fa';

export const features = [
  {
    Icon: BsSearch,
    name: 'Search Repositories',
    description: `Easily search through thousands of repositories with
    powerful filters and sorting options.`,
  },
  {
    Icon: FaCodeBranch,
    name: 'Track Issues',
    description: `Get notified of new issues and pull requests, and keep
    track of your progress with milestones and labels.`,
  },
  {
    Icon: FaUsers,
    name: 'Manage Teams',
    description: `Collaborate with your team members and manage access to
    your repositories and issues.`,
  },
  {
    Icon: FaClipboard,
    name: 'Save Queries',
    description: `Save your favorite search queries and get alerts when
    new repositories or issues match your criteria.`,
  },
];
