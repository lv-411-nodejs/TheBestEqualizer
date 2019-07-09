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

export const formFieldsInfo = [
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
    name: 'passwordConfirmation',
    label: 'Pasword confirmation',
    isMember: false,
  },
];
