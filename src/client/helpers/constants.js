import {Image3d, ImageHeadSet, ImageSpeaker, ImageExtra} from 'src/images';

export const imageArray = [{
    img: Image3d,
    text: '3D'
}, {
    img: ImageHeadSet,
    text: 'HeadSet'
}, {
    img: ImageSpeaker,
    text: 'Speaker'
}, {
    img: ImageExtra,
    text: 'Extra'
}];

export const formFieldsInfo = [{
    type:'text',
    name:'username',
    label: 'Username',
    isMember: false
},
{
    type:'email',
    name:'email',
    label: 'Email',
    isMember: true
},
{
    type:'password',
    name:'password',
    label: 'Password',
    isMember: true
},
{
    type:'password',
    name:'passwordConfirmation',
    label: 'Pasword confirmation',
    isMember: false
}];
