class UserController {
  async login(req, res) {
    res.json({ message: 'ok' });
  }
}

module.exports = new UserController();
