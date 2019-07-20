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
import redisClient, { putInRedis, getFromRedis } from '../helpers/redis';

// internal helpers

const generateTokens = async (user) => {
    const tokens = generateTokensPair(user);
    const result = await putInRedis(user._id, tokens.refresh);

    if (!result) throw new TeapotError;

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
            const tokens = generateTokens({ userId: user._id });
            res.status(201).json({ token: tokens });
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
            throw new ClientError('Wrong password', 404);
        }

        const tokens = generateTokens({ userId: user._id });

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
export const refreshToken = async (req, res) => {
    const { refresh, userId } = req.body;

    try {
        const refreshToken = await getFromRedis(userId);
        
        if (refresh === refreshToken) {
            const newTokensPair = await generateTokens(userId);
            const replaced = putInRedis(userId, newTokensPair.refresh);

            if (!replaced) throw new ClientError('Problem with refresh token action', 401);

            return res.status(200).json({ token: newTokensPair });
        }

        throw new ClientError('Tokens not matched', 401);
    } catch (err) {
        return response(res, err.message, err.code);
    }

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
        const result = await putInRedis(username, tokens.refresh);

        if (!result) throw new TeapotError;

        res.status(200).json({ token: tokens });
    }
    catch (err) {
        return response(res, err.message, err.code);
    }

}

export const getDataRedis = async (req, res) => {
    // create tokens for user

    try {
        const { username } = req.body;

        const token = await getFromRedis(username);

        res.status(200).json({ token: token });
    }
    catch (err) {
        return response(res, err.message, err.code);
    }

}

export const client = (req, res) => {
    console.log(redisClient);
}
