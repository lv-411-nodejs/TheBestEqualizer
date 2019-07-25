/**
 * Effects routes module
 *
 * @request  {post} /protected
 * @request  {post} /
 */

import User from '../models/user';
import response from '../helpers/errorHandler';
import { NotFoundError, ClientError } from '../helpers/error';

export const getEffect = async (req, res) => {
  const { title } = req.body;
  const { userId } = req;

  try {
    const effects = await User.findOne({ _id: userId }, 'effects');
    const findedEffect = effects.find(effect => effect.title === title);
    if (!findedEffect) {
      throw new NotFoundError('Preset with this title is not found');
    }

    return res.status(200).json({
      preset: findedEffect,
    });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};


export const updateEffect = async (req, res) => {
  const { title, presets } = req.body;
  const { userId } = req;

  try {
    const filterExpression = { _id: userId, 'effects.title': { $ne: title } };
    const updateExpression = { $addToSet: { effects: { title, presets } } };
    const config = { new: true, runValidators: true };

    const result = User.findOneAndUpdate(filterExpression, updateExpression, config);
    if (!result) {
      throw new ClientError('Effect with this title already exists', 404);
    }

    return res.status(201).json({ message: 'The preset have been saved' });
  } catch (error) {
    return response(res, error.message, error.code);
  }
};
