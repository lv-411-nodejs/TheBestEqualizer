import {
  headsetIcon, rssIcon, thIcon, podcastIcon,
} from '../assets/icons/icons';

export const imageArray = [
  {
    img: podcastIcon,
    text: '3D',
  }, {
    img: headsetIcon,
    text: 'HeadSet',
  }, {
    img: thIcon,
    text: 'Speaker',
  }, {
    img: rssIcon,
    text: 'Extra',
  },
];

export const fieldsInfo = [
  {
    type: 'text',
    name: 'username',
    label: 'Username',
    isMember: false,
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    isMember: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    isMember: true,
  },
  {
    type: 'password',
    name: 'confirmPassword',
    label: 'Pasword confirmation',
    isMember: false,
  },
];
