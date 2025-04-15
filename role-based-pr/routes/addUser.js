const express = require('express');
const routes = express.Router();
const ctl = require('../controllers/addUserCtl');

routes.post('/addUser',ctl.addUser);
routes.get('/getUsers',ctl.getUsers);

module.exports = routes;