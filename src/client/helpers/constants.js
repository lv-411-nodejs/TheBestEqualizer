import { headsetIcon, rssIcon, thIcon, rocketIcon } from '../assets/icons/icons';
import Pizzicato from "pizzicato";

export const imageArray = [{
    img: rocketIcon,
    text: '3D' }, {
    img: headsetIcon ,
    text: 'HeadSet' }, {
    img: thIcon,
    text: 'Speaker' }, {
    img: rssIcon,
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

export const BLOCKS = [
    {
        name: 'Distortion',
        effects: {gain: 0},
        createEffect: new Pizzicato.Effects.Distortion({
            gain: 0
        })
    },
    {
        name: 'Reverb',
        effects: {
            time: 0,
            decay: 0,
            mix: 0
        },
        createEffect: new Pizzicato.Effects.Reverb({
            time: 0,
            decay: 0,
            mix: 0
        })
    },
    {
        name: 'Delay',
        effects: {
            feedback: 0,
            time: 0,
            mix: 0
        },
        createEffect: new Pizzicato.Effects.Delay({
            feedback: 0,
            time: 0,
            mix: 0
        })
    },
    {
        name: 'Flanger',
        effects: {
            time: 0,
            speed: 0,
            depth: 0,
            feedback: 0,
            mix: 0
        },
        createEffect: new Pizzicato.Effects.Flanger({
            time: 0,
            speed: 0,
            depth: 0,
            feedback: 0,
            mix: 0
        })
    },
    {
        name: 'Tremolo',
        effects: {
            speed: 0,
            depth: 0,
            mix: 0
        },
        createEffect: new Pizzicato.Effects.Tremolo({
            speed: 0,
            depth: 0,
            mix: 0
        })
    }
];
