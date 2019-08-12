import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => mongoose
  .connect('mongodb://uners31:ERiDrjNxksyBcT5@ds135217.mlab.com:35217/heroku_m9256xgz',
    { useNewUrlParser: true, useFindAndModify: false })
  .catch((err) => { console.error(err); });

export default connect;
