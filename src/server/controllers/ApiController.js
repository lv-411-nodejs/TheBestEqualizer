import User from '../models/user';
import { response } from '../helpers/errorHandler';
import { generate } from '../helpers/token';

const availableTokens = [];

export default class ApiController {
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

  /**
   *
   * @param {string} refresh
   * @param {string} userId
   */
  static refreshTokenHandler (req, res) {
    const { refresh, userId } = req.body;

    const findedRefreshToken = availableTokens
      .find((token, index) => token.ref === refresh);

    if (findedRefreshToken) {
      let index = availableTokens.indexOf(findedRefreshToken);
      availableTokens.splice(index, 1);

      return res.status(200).json({ token: generateTokens({ userId }) });
    } else {
      return response(res, { err: 'Refresh expired' }, 403);
    }
  }
}

const passwordComparison = (res, foundUser, receivedPassword) => (
  foundUser.verifyPassword(receivedPassword)
    .then(comparisonResult => comparisonResult
      ? res.status(200).json({ token: generateTokens({ userId: foundUser._id }) })
      : response(res, 'Login failed', 404))
    .catch(err => response(res, err.message, 404))
);

const saveUserInDB = (res, user) => (
  user
    .save()
    .then(() => res.status(201).json({ result: 'User created' }))
    .catch(err => response(res, err.message, 422))
);

const generateTokens = (user) => {
  const tokens = generate(user);
  availableTokens.push({ ref: tokens.refresh, userId: user.userId });
  return tokens;
};
