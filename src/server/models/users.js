const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const user = new User({ name: 'Ostap' });
user.save((err, user) => {
  if (err) {
    console.log('err', err);
  }
  console.log('saved user', user);
});
