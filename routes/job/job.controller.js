(function() {
    'use strict';

    var Job = require('./job.model');


//Basic CRUD
    
    //grab all for display
    module.exports.jobs = function(req, res) { 
        Job.find({orderID: req.params.orderID}, function (err, post) {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }
            res.json(post);
        });
    };
    
    module.exports.get = function(req, res) {
    
    Job.find({}, function(err, post) {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
      res.json(post);
      
    });

  };
    
    //create a new post
    module.exports.create = function(req, res) {
        var job = new Job(req.body);
        job.save(function(err, post) {
          if (err) {
                console.error(err);
                return res.status(500).send(err);
          }
          res.json(post);
        });
     };
  
     //edit exsisting one
     module.exports.update = function(req, res) {
        Job.findOneAndUpdate({_id: req.params.jobID}, req.body, function(err, post) {  
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }  
          res.json(post);
        });
     };
     
     //delete a post
     module.exports.delete = function(req, res) {
         var jobID = req.params.jobID;
         Job.findOneAndRemove({_id: jobID}, function(err, removedPost) {
          if (err) {
            console.error(err);
            return res.status(500).send(err);
          }
          res.json(removedPost);
        });
     };
    
    
})();