const ctl = require('../controllers/addController');
const express = require('express');
const routes = express.Router();

routes.post('/addProduct',ctl.addProduct);
routes.get('/getProduct',ctl.getProduct);

module.exports = routes;