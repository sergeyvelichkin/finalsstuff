// Routes
// =============================================================
const db = require("../models");
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      db.Job.findAll({include:[db.User]}).then(function(data) {
        let hbsObject = {
          jobs: data,
          user:req.user
        };

        console.log(hbsObject)
        res.render('index', hbsObject);
        
      });
    });
  
  
    app.get("/post",  isLoggedIn,function(req, res) {
      let hbsObject = {
        user:req.user
      };
      res.render('post', hbsObject);
    });
    
    app.post("/post", function(req, res) {
      if (req.user){
        db.Job.create(req.body).then(function(dbJob) {
          res.json(dbJob);
        }).catch(function(err){
          console.log(err);
          res.json(err);
        });
      } else {
        res.render('login');
      }
    
    });

    app.get("/myjobs", function(req, res) {

      if (req.user){
        db.Job.findAll({
          where: {
            UserId: req.user.id
          }
        }).then(function(data) {
          let hbsObject = {
            jobs: data,
            user:req.user
          };
          res.render('index', hbsObject);
          
        });

      } else {
        res.render('login');
      }
      
    });

    app.get("/donejobs", function(req, res) {

      if (req.user) {
        db.Job.findAll({
          where: {
            assingToId: req.user.id
          }
        }).then(function(data) {
          let hbsObject = {
            jobs: data,
            user:req.user
          };
          res.render('index', hbsObject);
          
        });
      }else {
        res.render('login');
      }
      
    });
    

    function isLoggedIn(req, res, next) {

      if (req.isAuthenticated())

          return next();

      res.redirect('/signin');

  }

  };