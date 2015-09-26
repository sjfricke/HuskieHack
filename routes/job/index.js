(function() {
  'use strict';

  var express = require('express');
  var controller = require('./job.controller')    
    
  var router = express.Router();

  router.get('/', controller.get);
  router.get('/:orderID', controller.jobs);
  router.post('/', controller.create);
  router.post('/:jobID', controller.update);
  router.delete('/:jobID', controller.delete);

  module.exports = router;

})();