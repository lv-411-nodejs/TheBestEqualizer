import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => mongoose
<<<<<<< HEAD
  .connect('mongodb://uners31:ERiDrjNxksyBcT5@ds135217.mlab.com:35217/heroku_m9256xgz',
    { useNewUrlParser: true, useFindAndModify: false })
=======
  .connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
>>>>>>> c6b3d4593cbd1f9ffdd467b68d323e90b77771c8
  .catch((err) => { console.error(err); });

export default connect;
