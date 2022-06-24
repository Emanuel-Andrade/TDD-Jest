const app = require('express');
const User = require('../controllers/userController');

const Router = app.Router();

Router.get('/', User.login);

module.exports = Router;
