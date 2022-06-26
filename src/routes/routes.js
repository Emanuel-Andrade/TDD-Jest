const app = require('express');
const User = require('../controllers/userController');

const Router = app.Router();

// Users
Router.get('/', User.home);
Router.post('/user', User.create);
Router.post('/login', User.login);

module.exports = Router;
