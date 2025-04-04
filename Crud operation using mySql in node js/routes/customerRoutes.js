const express = require('express');
const routes = express.Router();
const cusController = require('../controllers/customerController');
const fileMiddleware = require('../config/fileMiddleware')

routes.get('/customer', cusController.customer);

routes.post('/addCustomer',fileMiddleware.uploadImage ,cusController.addCustomer);

routes.get('/',fileMiddleware.uploadImage ,cusController.showCustomer);

routes.get('/deleteRecord/:id',cusController.deleteRecord);

routes.get('/updateRecord/:id',cusController.updateRecord);

routes.post('/editCustomer/:id',fileMiddleware.uploadImage ,cusController.editCustomer);


module.exports = routes;