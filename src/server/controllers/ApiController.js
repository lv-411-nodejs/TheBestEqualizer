import User from '../models/user';
import { response } from '../helpers/errorHandler';
import bcrypt from 'bcrypt';

export default class ApiController {
  static index (req, res) {
    res.json({ version: '0.0.1' });
  }

  static postAddUser (req, res, next) {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    user
      .save()
      .then(() => res.status(201).json({ result: 'Created User' }))
      .catch(err => response(res, err.message, 422));
  };

  static postLogUser (req, res, next) {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => !user ? response(res, 'Login failed', 404)
        : bcrypt.compare(password, user.password)
          .then((result) => result ? res.status(200).json({ result: 'Logged in' })
            : response(res, 'Login failed', 404))
          .catch(err => response(res, err.message, 404))
      ).catch(err => response(res, err.message, 404));
  }
}
