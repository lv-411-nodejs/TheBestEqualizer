/**
 * Common routes module
 * 
 * @request  {post} /protected 
 * @request  {post} / 
 */

import Effects from '../models/effects';
import { response } from '../helpers/errorHandler';


export const effects = async (req, res) => {

    const { title } = req.body;

    try {
        const preset = await Effects.findOne({ title });  

        if (!preset) {
            throw new Error('Preset with this title not found');
        }

    } catch (error) {
        response(res, error.message, 404);
    }
}
