import User from '../models/user';
import { response } from '../helpers/errorHandler';

const availableTokens = [];

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
  static refreshTokenHandler (req, res) {
    const { refresh } = req.body;

    const findedRefreshToken = availableTokens
      .find((token, index) => token.ref === refresh && token.valide === true);

    if(findedRefreshToken)  {
        let index = availableTokens.indexOf(findedRefreshToken);
        availableTokens.splice(index, 1);

        // find user by id and refresh token for him
        return responce(res, { token: generateTokens(User) }, 200);
    }
    else {
        return responce(res, { err: 'Refresh expired' }, 403);
    }
  }
}

const passwordComparison = (res, foundUser, receivedPassword) => (
  foundUser.verifyPassword(receivedPassword)
    .then(comparisonResult => comparisonResult
      ? response(res, { userId: foundUser._id }, 200)
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
  const tokens = token.generate( user );
  availableTokens.push({ ref: tokens.refresh, userId: user.userId });
  return tokens;
}
