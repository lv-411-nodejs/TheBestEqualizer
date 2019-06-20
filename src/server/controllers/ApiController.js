import User from '../models/user';

export default class ApiController {
  static index (req, res) {
    res.json({ version: '0.0.1' });
  }

  static postAddUser (req, res, next) {
    const { firstname, email, lastname, password } = req.body;
    const user = new User({ firstname, lastname, email, password });
    user
      .save()
      .then(result => {
        res.status(200)
          .json({
            result: 'Created User'
          });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
