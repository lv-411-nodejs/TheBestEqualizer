import User from '../models/user';
import bcrypt from 'bcrypt';
import { response } from '../helpers/errorHandler';

export default class ApiController {
  static index (req, res) {
    res.json({ version: '0.0.1' });
  }
  static postRegistrationHandler (req, res, next) {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    User
      .findOne({ email })
      .then(foundUser => foundUser
        ? response(res, 'User already exists!', 404)
        : saveUserInDB(res, user))
      .catch(err => response(res, err.message, 404));
  };
  static postLoginHandler (req, res, next) {
    const { email, password: receivedPassword } = req.body;
    User
      .findOne({ email })
      .then(foundUser => foundUser
        ? passwordComparison(res, foundUser, receivedPassword)
        : response(res, 'Login failed', 404))
      .catch(err => response(res, err.message, 401));
  };
}

const passwordComparison = (res, foundUser, receivedPassword) => (
  bcrypt.compare(receivedPassword, foundUser.password)
    .then(comparisonResult => comparisonResult
      ? res.status(200).json({ result: 'Logged in' })
      : response(res, 'Login failed', 404))
    .catch(err => response(res, err.message, 404))
);

const saveUserInDB = (res, user) => (
  user
    .save()
    .then(() => res.status(201).json({ result: 'User created' }))
    .catch(err => response(res, err.message, 422))
);
