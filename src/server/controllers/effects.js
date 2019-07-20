/**
 * Common routes module
 * 
 * @request  {post} /protected 
 * @request  {post} / 
 */

import Effects from '../models/effects';
import { ClientError } from '../helpers/error';


export const getEffect = async (req, res) => {

    const { title } = req.body;

    try {
        const preset = await Effects.findOne({ title });  

        if (!preset) {
            throw new ClientError('Preset with this title not found', 401);
        }

    } catch (error) {
        return res.status(error.code || 500).json({ "error": error.message });
    }
}
