/**
 * Redis module
 * 
 * this module created for easy work with tokens (store in redis && refresh)
 */

import redis from 'redis';
import dotenv from 'dotenv';
import { ClientError } from './error';

dotenv.config();

const DAY = 3600 * 24;

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    expire: DAY
});

redisClient.on("error", err => console.log("Redis error -> " + err));
redisClient.on("connect", () => process.env.DEV_MODE && console.log("redis connected "));

/**
 * return value (user id in this case) from redis storage finded by token (key)
 * @param {string} key
 * @return {Promise} with data (userId)
 * @throws {ClientError}
 */
export const getFromRedis = (key) => {

    if ((typeof key) !== 'string') {
        key = key.toString();
    }

    return new Promise((resolve, reject) => {

        redisClient.get(key, (err, replay) => {

            if (err) return reject(err);
            if (!replay) return reject(new ClientError('Refresh Token expired!'));
            if (replay) return resolve(replay);
        });
    });
};

/**
 * put token in redis storage key = refresh-token, value = userId
 * this methodology can work with multiple sessions (multi device)
 * @param {string} key
 * @param {string} value
 * @return {Promise} (boolean) true/false
 * @throws {ClientError}
 */
export const putInRedis = (key, value) => {

    if ((typeof value) !== 'string') {
        value = value.toString();
    }

    return new Promise((resolve, reject) => {

        redisClient.set(key, value, 'EX', DAY, (err, replay) => {

            if (err) return reject(err);
            if (!replay) return reject(new ClientError('Trobles with redis, cant insert'));
            if (replay == 'OK') return resolve(true);
        });
    });

};

/**
 * delete token (record) from redis storage
 * @param {string} key
 * @return {Promise} (boolean) true/false
 * @throws {ClientError}
 */
export const deleteFromRedis = (key) => {

    if ((typeof key) !== 'string') {
        key = key.toString();
    }

    return new Promise((resolve, reject) => {

        redisClient.del(key, (err, replay) => {

            if (err) return reject(err);
            if (!replay) return reject(new ClientError('Trobles with redis, cant delete item'));
            if (replay > 0) return resolve(true);
        });
    });

};

/**
 * default redis export - to work with redis directly if it need
 */
export default redisClient;
