import User from '../models/user';
import Effects from '../models/effects';
import response from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';

const availableTokens = [];

const saveDataToDB = (res, data, message) => (
  data
    .save()
    .then(() => res.status(201).json({ result: message }))
    .catch(err => response(res, err.message, 422))
);

const generateTokens = (user) => {
  const tokens = generateTokensPair(user);
  availableTokens.push({ ref: tokens.refresh, userId: user.userId });
  return tokens;
};

const passwordComparison = (res, foundUser, receivedPassword) => (
  foundUser.verifyPassword(receivedPassword)
    .then(comparisonResult => (comparisonResult
      ? res.status(200).json({ token: generateTokens({ userId: foundUser._id }) })
      : response(res, { password: 'Wrong password' }, 404)))
    .catch(err => response(res, err.message, 404))
);

export default class ApiController {
  static postRegistrationHandler(req, res) {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    User
      .findOne({ email })
      .then(foundUser => (foundUser
        ? response(res, { email: 'User with this email already exists!' }, 404)
        : saveDataToDB(res, user, 'User created')))
      .catch(err => response(res, err.message, 404));
  }

  static postLoginHandler(req, res) {
    const { email, password: receivedPassword } = req.body;
    User
      .findOne({ email })
      .then(foundUser => (foundUser
        ? passwordComparison(res, foundUser, receivedPassword)
        : response(res, 'Login failed', 404)))
      .catch(err => response(res, err.message, 401));
  }

  static postEffectsHandler(req, res) {
    const { title, presets } = req.body;
    const saveEffects = new Effects({ title, presets });
    Effects
      .findOne({ title })
      .then(foundTitle => (foundTitle
        ? response(res, 'Effect with this title already exists', 404)
        : saveDataToDB(res, saveEffects, 'The preset have been saved')))
      .catch(err => response(res, err.message, 404));
  }

  static getEffectsHandler(req, res) {
    const { title } = req.query;

    Effects
      .findOne({ title })
      .then(preset => (preset
        ? res.send(preset)
        : response(res, 'Preset with this title is not found', 404)))
      .catch(err => response(res, err.message, 404));
  }

  /**
   *
   * @param {string} refresh
   * @param {string} userId
   */
  static refreshTokenHandler(req, res) {
    const { refresh, userId } = req.body;

    const findedRefreshToken = availableTokens
      .find(token => token.ref === refresh);

    if (findedRefreshToken) {
      const index = availableTokens.indexOf(findedRefreshToken);
      availableTokens.splice(index, 1);

      return res.status(200).json({ token: generateTokens({ userId }) });
    }

    return response(res, { err: 'Refresh expired' }, 403);
  }
}
