(function() {
  'use strict';

  var express = require('express');
  var controller = require('./customer.controller')    
    
  var router = express.Router();

  router.get('/', controller.get);
  router.get('/:customerID', controller.show);
  router.post('/', controller.create);
  router.post('/:customerID', controller.update);
  router.delete('/:customerID', controller.delete);

  module.exports = router;

})();