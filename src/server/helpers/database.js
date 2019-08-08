import mongoose from 'mongoose';

const connect = () => mongoose
  .connect(process.env.MONGODB_URI,
    { useNewUrlParser: true })
  .catch((err) => { console.error(err); });

export default connect;
