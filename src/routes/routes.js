const app = require('express');
const User = require('../controllers/userController');

const Router = app.Router();

// Users
Router.get('/', User.login);
Router.post('/user', User.create);

module.exports = Router;
