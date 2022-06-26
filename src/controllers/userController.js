const User = require('../models/Users');
const Validator = require('../validators/Validator');

class UserController {
  home(req, res) {
    res.json({ message: 'ok' });
  }

  async create(req, res) {
    const {
      name, email, password, confirmPassword,
    } = req.body;

    // Validate
    const isFormOk = await Validator.createUser(name, email, password, confirmPassword);
    if (isFormOk.errors) return res.status(400).json({ errors: isFormOk.errors });
    if (!Validator.isEmail(email)) return res.status(400).json({ errors: ['Email inválido'] });
    const hash = Validator.createHash(password);
    // create new user and return
    const user = User.create({ name, email, password: hash });
    return res.json({ errors: null, user });
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await Validator.loginUser(email, password);
    if (user.errors) return res.status(400).json({ errors: user.errors[0] });
    return res.json({ errors: null, user });
  }
}

module.exports = new UserController();
