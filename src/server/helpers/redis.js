import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const DAY = 3600 * 24;

const redisClient = redis.createClient({
    host: process.env.REDIS_ENDPOINT,
    port: process.env.REDIS_PORT,
    expire: DAY
});

redisClient.on("error", err => console.log("Redis error -> " + err));

const setCallback = (err, replay) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(replay);
};

const getCallback = (err, replay) => {
    if(err) {
        console.log(err);
        return;
    }
};

export const putInStorage = (key, value) => {
    redisClient.set(key, value, 'EX', DAY, setCallback);
};

export const getFromStorage = (key) => {
    redisClient.get(key, getCallback);
};

export default redisClient;
