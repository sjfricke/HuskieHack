(function() {
    'use strict';

    var Order = require('./order.model');


//Basic CRUD
    
    //grab all for display
    module.exports.customer = function(req, res) { 
        
        Order.find({customerID: req.params.customerID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    
    module.exports.get = function(req, res) { 
        Order.find({orderID: req.params.orderID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    
    //create a new post
    module.exports.create = function(req, res) {
        var order = new Order(req.body);
        order.save(function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }
          res.json(post);
        });
     };
  
     //edit exsisting one
     module.exports.update = function(req, res) {
        var orderID = req.params.orderID;
        var body = req.body;
         
         // Need to do this so mongo doesn't think we're trying to edit the _id
        delete body._id;
        Order.findOneAndUpdate({_id: orderID}, req.body, function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }  
          res.json(post);
        });
     };
     
     //delete a post
     module.exports.delete = function(req, res) {
         var orderID = req.params.orderID;
         Order.findOneAndRemove({_id: orderID}, function(err, removedPost) {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.json(removedPost);
        });
     };
    
    
})();