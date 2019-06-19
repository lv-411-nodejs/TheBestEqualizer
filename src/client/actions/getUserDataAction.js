import {GET_USER_DATA} from './types';
import axios from 'axios';

const connect = () => mongoose
  .connect('mongodb://uners31:ERiDrjNxksyBcT5@ds135217.mlab.com:35217/heroku_m9256xgz',
    { useNewUrlParser: true })
  .then(result => {
  })
  .catch(err => { console.log(err) });


export const getUserData = () => dispatch => {
   var c = connect.getCollection('db_of_users')
        console.log(c);
}