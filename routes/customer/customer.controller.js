(function() {
    'use strict';

    var Customer = require('./customer.model');


//Basic CRUD
    
    //grab all for display
    module.exports.get = function(req, res) { 
        Customer.find({}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.show = function(req, res) {
   
        
    Customer.find({customerID: req.params.customerID}, function(err, post) {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json(post);
      
    });

  };
    
    //create a new post
    module.exports.create = function(req, res) {
        var customer = new Customer(req.body);
        customer.save(function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }
          res.json(post);
        });
     };
  
     //edit exsisting one
     module.exports.update = function(req, res) {
        var customerID = req.params.customerID;
        var body = req.body;
        // Need to do this so mongo doesn't think we're trying to edit the _id
        delete body._id;
        Customer.findOneAndUpdate({_id: customerID}, req.body, function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }  
          res.json(post);
        });
     };
     
     //delete a post
     module.exports.delete = function(req, res) {
         var customerID = req.params.customerID;
         Customer.findOneAndRemove({_id: customerID}, function(err, removedPost) {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.json(removedPost);
        });
     };
    
    
})();