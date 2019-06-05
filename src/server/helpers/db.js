const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/equalizer', { useNewUrlParser: true })
  .then(() => console.log('MongoDb has started...'))
  .catch((err) => console.log(err));

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('error', err);
});
db.once('open', () => {
  console.log('we are connected');
});
