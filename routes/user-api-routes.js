const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // 1. Add a join to include all of each User's Posts
    db.User.findAll({include: [db.Job]}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // 2; Add a join to include all of the User's Posts here
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    }).catch(function(err){
      console.log(err);
      res.json(err);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};