import User from '../models/user';
import response from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';

const availableTokens = [];

const generateTokens = (user) => {
  const tokens = generateTokensPair(user);
  availableTokens.push({ ref: tokens.refresh, userId: user.userId });
  return tokens;
};

const saveUserToDB = (res, data) => (
  data
    .save()
    .then(user => res.status(201).json({
      result: 'User created',
      username: user.username,
      token: generateTokens({ userId: user._id }),
    }))
    .catch(err => response(res, err.message, 422))
);

const passwordComparison = (res, foundUser, receivedPassword) => (
  foundUser.verifyPassword(receivedPassword)
    .then(comparisonResult => (comparisonResult
      ? res.status(200).json({
        username: foundUser.username,
        token: generateTokens({ userId: foundUser._id }),
      })
      : response(res, { password: 'Wrong password' }, 404)))
    .catch(err => response(res, err.message, 404))
);

const updateEffects = (error, data, res, message, status) => {
  if (error) {
    res.status(400).json({ message: error.message });
  } else if (data) {
    res.status(status).json({ success: message.success });
  } else {
    res.status(404).json({ error: message.error });
  }
};

export default class ApiController {
  static postRegistrationHandler(req, res) {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    User
      .findOne({ email })
      .then(foundUser => (foundUser
        ? response(res, { email: 'User with this email already exists!' }, 404)
        : saveUserToDB(res, user)))
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

  static deleteEffectsHandler(req, res) {
    const { title } = req.body;
    const { userId } = req;
    const messages = {
      success: 'The preset have been deleted',
      error: 'Effect with this title is not found',
    };
    User
      .findOneAndUpdate({ _id: userId, 'effects.title': { $in: title } },
        { $pull: { effects: { title } } },
        (err, data) => updateEffects(err, data, res, messages, 200));
  }

  static postEffectsHandler(req, res) {
    const { title, presets } = req.body;
    const { userId } = req;
    const messages = {
      success: 'The preset have been saved',
      error: 'Effect with this title already exists',
    };
    User
      .findOneAndUpdate({ _id: userId, 'effects.title': { $ne: title } },
        { $push: { effects: { title, presets } } },
        { new: true, runValidators: true },
        (err, data) => updateEffects(err, data, res, messages, 201));
  }

  static getEffectsHandler(req, res) {
    const { title } = req.body;
    const { userId } = req;
    User
      .findOne({ _id: userId })
      .then(({ effects }) => {
        const find = effects.find(effect => effect.title === title);
        if (find) {
          res.send(find);
        } else {
          response(res, 'Preset with this title is not found', 404);
        }
      })
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
