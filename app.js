const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require('passport');
const session = require('express-session');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({ secret: 'trevlazyasshole', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

// Requiring our models for syncing
const db = require("./models");


require('./routes/auth-routes.js')(app, passport);
require('./config/passport/passport.js')(passport, db.User);

// Routes
// =============================================================
require("./routes/user-api-routes.js")(app);
require("./routes/job-api-routes.js")(app);
require("./routes/contact-routes.js")(app);
require("./routes/welcome-routes.js")(app);

app.get('*')


db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
