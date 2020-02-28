const db = require("../models");

module.exports = function(app) {
  app.get("/api/jobs/:id?", function(req, res) {
    // 1. Add a join to include all of each Job's Posts
    if (req.params.id=="city"){
      db.Job.findAll({include: [db.User]}).then(function(data) {
        res.json(data);
      });
    }
    else if (req.params.id){
      db.Job.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(data) {
        // console.log(dbJob)
        res.json(data);
      });
    }else {
      db.Job.findAll({include: [db.User]}).then(function(data) {
        res.json(data);
      });
    }
    
  });

  app.get("/api/jobs/city/:city?", function(req, res) {
    // 1. Add a join to include all of each Job's Posts
    console.log(req.isAuthenticated())
    if (req.params.city){
      db.Job.findAll({
        where: {
          city: req.params.city
        }
      }).then(function(data) {
        // console.log(dbJob)
        res.json(data);
      });
    }else {
      db.Job.findAll({}).then(function(data) {
        res.json(data);
      });
    }
      
    
    
  });

  

  app.post("/api/jobs", function(req, res) {
    console.log(req.body)
    db.Job.create(req.body).then(function(dbJob) {
      res.json(dbJob);
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  });

  app.delete("/api/jobs/:id", function(req, res) {
    db.Job.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbJob) {
      res.json(dbJob);
    });
  });

};