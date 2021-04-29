const express = require('express');
const userController = require('./controllers/UserController');


const routes = express.Router();

routes.post('/user', userController.store);

module.exports = routes;