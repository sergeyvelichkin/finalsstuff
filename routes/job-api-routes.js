const db = require("../models");

module.exports = function(app) {
  app.get("/api/jobs", function(req, res) {
    // 1. Add a join to include all of each Job's Posts
    db.Job.findAll({include: [db.User]}).then(function(data) {
      let hbsObject = {
        jobs: data
      };
      // res.render('index', hbsObject);
      res.json(data);
    });
  });

  app.get("/api/jobs/:id",isLoggedIn, function(req, res) {
    // 2; Add a join to include all of the Job's Posts here
    db.Job.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbJob) {
      // console.log(dbJob)
      res.render('jobinfo',{data:dbJob,user:req.user});
    });
  });

  app.post("/api/jobs", function(req, res) {
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

  function isLoggedIn(req, res, next) {

    if (req.isAuthenticated())

        return next();

    res.redirect('/signin');

}

};