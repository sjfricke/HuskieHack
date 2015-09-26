(function() {
  'use strict';

  var express = require('express');
  var controller = require('./order.controller')    
    
  var router = express.Router();

  router.get('/get/:orderID', controller.get);
  router.get('/:customerID', controller.customer);
  
  router.post('/', controller.create);
  router.post('/:orderID', controller.update);
  router.delete('/:orderID', controller.delete);

  module.exports = router;

})();