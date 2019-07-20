/**
 * Autentication routes module
 * 
 * @request  {post} /login 
 * @request  {post} /registration
 * @request  {post} /token/refresh
 */

import User from '../models/user';
import response from '../helpers/errorHandler';
import { generateTokensPair } from '../helpers/token';
import { ClientError, TeapotError } from '../helpers/error';
import redisClient, { putInStorage, getFromStorage } from '../helpers/redis';

// internal helpers
const availableTokens = [];

const generateTokens = (user) => {
    const tokens = generateTokensPair(user);
    availableTokens.push({ ref: tokens.refresh, userId: user.userId });
    return tokens;
};

// actions

export const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });

    try {
        const emailTaken = await User.findOne({ email });

        if (emailTaken) {
            throw new ClientError('User with this email already exists!');
        }

        const savedUser = await user.save();
        if (savedUser) {
            res.status(201).json({ result: 'User created' });
        }
    } catch (error) {
        response(res, error.message, 404);
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) throw new ClientError('User not exist');

        const verified = await user.verifyPassword(password);

        if (!verified) {
            return response(res, { password: 'Wrong password' }, 404);
        }

        const tokens = generateTokens({ userId: user._id });
        const result = await putInStorage(user._id, tokens.refresh);

        if(!result) throw new TeapotError;
        
        return res.status(200).json({ token: tokens });

    } catch (error) {
        return response(res, error.message, 404);
    }
}

/**
 *
 * @param {string} refresh
 * @param {string} userId
 */
export const refreshToken = (req, res) => {
    const { refresh, userId } = req.body;

    // const findedRefreshToken = availableTokens
    //     .find(token => token.ref === refresh);

    // if (findedRefreshToken) {
    //     const index = availableTokens.indexOf(findedRefreshToken);
    //     availableTokens.splice(index, 1);

    //     return res.status(200).json({ token: generateTokens({ userId }) });
    // }

    // return response(res, 'Refresh expired', 403);

    
}

export const redis = async (req, res) => {
    // create tokens for user

    try {
        const { username } = req.body;
        const tokens = generateTokens({ userId: username });
        const result = await putInStorage(username, tokens.access);

        if(!result) throw new TeapotError;

        res.status(200).json({ token: tokens });
    }
    catch (err) {
        return response(res, err.message, err.code);
    }
    
}

export const getFromRedis = (req, res) => {
    // create tokens for user

    try {
        const { username } = req.body;

        getFromStorage(username);

        res.status(200).json({ token: tokens });
    }
    catch (err) {
        return response(res, err.message, err.code);
    }
    
}
