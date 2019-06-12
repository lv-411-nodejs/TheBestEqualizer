export default class ApiController {
  static index (req, res) {
    res.json({ version: '0.0.1' });
  }
}
