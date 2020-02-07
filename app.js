const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();
const passport = require('passport');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var flash    = require('connect-flash');
// const path = require('path')



const db = require("./models");

require('./config/passport/passport.js')(passport,db.User);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}else {
  app.use(express.static('public'))
}

app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(session({ secret: 'trevlazyasshole', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); 


// Requiring our models for syncing

app.get('/', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

require('./routes/auth-routes.js')(app, passport);



// // Routes
// // =============================================================
require("./routes/user-api-routes.js")(app);
require("./routes/job-api-routes.js")(app);



db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

module.exports = app;
