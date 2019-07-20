import User from '../models/user';
import Effects from '../models/effects';
import response from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';

// const availableTokens = [];

const saveDataToDB = (res, data, message) => (
  data
    .save()
    .then(() => res.status(201).json({ result: message }))
    .catch(err => response(res, err.message, 422))
);

// const generateTokens = (user) => {
//   const tokens = generateTokensPair(user);
//   availableTokens.push({ ref: tokens.refresh, userId: user.userId });
//   return tokens;
// };

export default class ApiController {
  // static async postRegistrationHandler(req, res) {
  //   const { username, email, password } = req.body;
  //   const user = new User({ username, email, password });

  //   try {
  //     // check if email alredy taken
  //     const emailTaken = await User.findOne({ email });
  //     console.log(emailTaken);

  //     if (emailTaken) {
  //       throw new Error('User with this email already exists!');
  //     }

  //     const savedUser = await user.save();
  //     if (savedUser) {
  //       res.status(201).json({ result: 'User created' });
  //     }
  //   } catch (error) {
  //     response(res, error.message, 404);
  //   }
  // }

  // Log in credentials
  // {
  //   "username": "Super",
  //   "email":"super@emial.com",
  //   "password":"1QWEq"
  // }
  // static async postLoginHandler(req, res) {
  //   const { email, password } = req.body;

  //   try {
  //     const user = await User.findOne({ email });

  //     if (!user) throw new Error('User not exist');

  //     const verified = await user.verifyPassword(password);

  //     if (!verified) {
  //       return response(res, { password: 'Wrong password' }, 404);
  //     }

  //     return res.status(200).json({
  //       token: generateTokens({ userId: user._id })
  //     });

  //   } catch (error) {
  //     return response(res, error.message, 404);
  //   }
  // }

  static postEffectsHandler(req, res) {
    const { title, effects } = req.body;
    const saveEffects = new Effects({ title, effects });
    Effects
      .findOne({ title })
      .then(foundTitle => (foundTitle
        ? response(res, 'Effect with this title already exists', 404)
        : saveDataToDB(res, saveEffects, 'The preset have been saved')))
      .catch(err => response(res, err.message, 404));
  }

  // static getEffectsHandler(req, res) {
  //   const { title } = req.body;
  //   Effects
  //     .findOne({ title })
  //     .then(preset => (preset
  //       ? res.send(preset)
  //       : response(res, 'Preset with this title is not found', 404)))
  //     .catch(err => response(res, err.message, 404));
  // }

  // /**
  //  *
  //  * @param {string} refresh
  //  * @param {string} userId
  //  */
  // static refreshTokenHandler(req, res) {
  //   const { refresh, userId } = req.body;

  //   const findedRefreshToken = availableTokens
  //     .find(token => token.ref === refresh);

  //   if (findedRefreshToken) {
  //     const index = availableTokens.indexOf(findedRefreshToken);
  //     availableTokens.splice(index, 1);

  //     return res.status(200).json({ token: generateTokens({ userId }) });
  //   }

  //   return response(res, { err: 'Refresh expired' }, 403);
  // }
}
