import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const DAY = 3600 * 24;

// const redisClient = redis.createClient({
//     host: process.env.REDIS_ENDPOINT,
//     port: process.env.REDIS_PORT,
//     expire: DAY
// });

const redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    expire: DAY
});

redisClient.on("error", err => console.log("Redis error -> " + err));
redisClient.on("connect", () => console.log("redis connected "));

export const getFromRedis = (key) => {

    if ((typeof key) !== 'string') {
        key = key.toString();
    }

    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, replay) => {
            if (err) return reject(err);

            if (!replay) return reject('Trobles with redis, can not get value by key');

            if (replay) return resolve(replay);
        });
    });
};

export const putInRedis = (key, value) => {

    if ((typeof value) !== 'string') {
        value = value.toString();
    }

    return new Promise((resolve, reject) => {
        redisClient.set(key, value, 'EX', DAY, (err, replay) => {
            if (err) return reject(err);

            if (!replay) return reject('Trobles with redis, cant insert');

            if (replay == 'OK') return resolve(true);
        });
    });

};

// export const updateInStorage = (key, value) => {

//     if ( (typeof value) !== 'string') {
//         value = value.toString();
//     }

//     return new Promise((resolve, reject) => {
//         redisClient.set(key, value, 'EX', DAY, (err, replay) => {
//             if(err) return reject(err);

//             if(!replay) return reject('Trobles with redis, cant insert');

//             if(replay == 'OK') return resolve(true);
//         });
//     });

// };

// export const deleteFromStorage = (key) => {

//     if ( (typeof value) !== 'string') {
//         value = value.toString();
//     }

//     return new Promise((resolve, reject) => {
//         redisClient.set(key, value, 'EX', DAY, (err, replay) => {
//             if(err) return reject(err);

//             if(!replay) return reject('Trobles with redis, cant insert');

//             if(replay == 'OK') return resolve(true);
//         });
//     });

// };



export default redisClient;
