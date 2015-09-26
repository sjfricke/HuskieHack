
(function() {
  'use strict';

  var express = require('express');
  var router = express.Router();

  router.use('/count', require('./count'));  
  router.use('/job', require('./job'));
  router.use('/order', require('./order'));
  router.use('/customer', require('./customer'));


  module.exports = router;

})();


