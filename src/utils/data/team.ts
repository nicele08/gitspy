import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import photo from '@/assets/images/photo.png';

export const teamMembers = [
  {
    name: 'Celestin N',
    title: 'Lead Developer',
    bio: 'Celestin is a software engineer with over 4 years of experience developing web and mobile applications. He specializes in front-end development and has a passion for creating intuitive and user-friendly interfaces.',
    avatar: photo,
    social: [
      { icon: FaGithub, url: 'https://github.com/nicele08' },
      { icon: FaTwitter, url: 'https://twitter.com/cniyindagiriye' },
      { icon: MdEmail, url: 'mailto:nicelestin08@gmail.com' },
    ],
  },
  {
    name: 'Celestin Niy',
    title: 'Back-end Developer',
    bio: 'Celestin is a back-end developer with a focus on building scalable and secure server-side applications. He has experience working with a variety of programming languages and frameworks, and enjoys tackling complex problems and finding elegant solutions.',
    avatar: photo,
    social: [
      { icon: FaGithub, url: 'https://github.com/nicele08' },
      { icon: FaTwitter, url: 'https://twitter.com/cniyindagiriye' },
      { icon: MdEmail, url: 'mailto:nicelestin08@gmail.com' },
    ],
  },
  // Add more team members as needed
];
