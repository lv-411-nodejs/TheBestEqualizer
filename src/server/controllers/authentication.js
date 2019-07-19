/**
 * Autentication routes module
 * 
 * @request  {post} /login 
 * @request  {post} /registration 
 */

import User from '../models/user';
import { response } from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';

// internal helpers
const availableTokens = [];

const generateTokens = (user) => {
    const tokens = generateTokensPair(user);
    availableTokens.push({ ref: tokens.refresh, userId: user.userId });
    return tokens;
};

console.log('in auth...js');

// actions

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });

    try {
        const emailTaken = await User.findOne({ email });
        console.log(emailTaken);

        if (emailTaken) {
            throw new Error('User with this email already exists!');
        }

        const savedUser = await user.save();
        if (savedUser) {
            res.status(201).json({ result: 'User created' });
        }
    } catch (error) {
        response(res, error.message, 404);
    }
}

// Log in credentials
// {
//   "username": "Super",
//   "email":"super@emial.com",
//   "password":"1QWEq"
// }
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) throw new Error('User not exist');

        const verified = await user.verifyPassword(password);

        if (!verified) {
            return response(res, { password: 'Wrong password' }, 404);
        }

        return res.status(200).json({
            token: generateTokens({ userId: user._id })
        });

    } catch (error) {
        return response(res, error.message, 404);
    }
}
