import facebook from 'assets/images/icons/facebook.png';
import twitter from 'assets/images/icons/twitter.png';
import github from 'assets/images/icons/github.png';
import dribbble from 'assets/images/icons/dribbble.png';

export const menuItems = [
  {
    id: 2,
    title: 'Quick links',
    items: [
      {
        path: '/about',
        label: 'About Us',
      },
      {
        path: '/contact',
        label: 'Contact us',
      },
      {
        path: '/services',
        label: 'Our Services',
      }
     
    ],
  },
  {
    id: 3,
    title: 'Our Information',
    items: [
      {
        path: '/return-policy',
        label: 'Return Policy ',
      },
      {
        path: '/privacy-policy',
        label: 'Privacy Policy',
      },
      {
        path: '/terms-conditions',
        label: 'Terms & Conditions',
      }
    ],
  },
  {
    id: 4,
    title: 'Our Services',
    items: [
      {
        path: '/services/website-development',
        label: 'Website Development',
      },
      {
        path: '/services/virtual-assistant',
        label: 'Virtual Assistant',
      },
      {
        path: '/services/app-development',
        label: 'App Development',
      },
      {
        path: '/services/graphics-designing',
        label: 'Graphic Design',
      },
      {
        path: '/services/social-media-management',
        label: 'Social media management',
      },
    ],
  },
  {
    id: 5,
    title: 'Connect',
    items: [
      {
        path: '#!',
        icon: '/img/facebook.png',
        label: 'Facebook',
      },
      {
        path: '',
        icon: '/img/twitter.png',
        label: 'Twitter',
      },
      {
        path: '#!',
        icon: '/img/instagram.png',
        label: 'Instagram',
      }
    ],
  },
];

export const footerNav = [
  {
    path: '#!',
    label: 'Home',
  },
  {
    path: '#!',
    label: 'Advertise',
  },
  {
    path: '#!',
    label: 'Supports',
  },
  {
    path: '#!',
    label: 'Marketing',
  },
  {
    path: '#!',
    label: 'FAQ',
  },
];
