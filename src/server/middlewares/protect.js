import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../configs/token';

export function protect(req, res, next) {
    let pattern = /Bearer\s(.+)/;
    let token = req.headers.authorization  || 'Bearer not-valid!';
    
    try {
        token = token.match(pattern)[1];
        let decoded = jwt.verify(token, JWTSECRET);
        next();
    }
    catch(e) {
        res.status(403).send({'error': e});
    }
};