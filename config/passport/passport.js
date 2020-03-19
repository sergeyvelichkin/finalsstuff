const bCrypt = require('bcrypt-nodejs');
const config = require('./config');
const jwt = require('jsonwebtoken');

const welcomeEmail = require('../../controllers/welcome.js');

let LocalStrategy = require('passport-local').Strategy;

module.exports = (passport,user) => {
    let User=user;
    console.log("Before serialize " + user)
    passport.serializeUser(function (user, done) {
            console.log("In serialize " + user)
        done(null, user.id);

    });
    // deserialize user 
    passport.deserializeUser((id, done) => {

        User.findById(id).then(function (user) {

            if (user) {
                console.log("in deser" + user)
                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });
    // LOCAL SIGNUP
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },



        (req, email, password, done) => {

            let generateHash = (password) => {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    email: email
                }
            }).then((user) => {

                if (user) {

                    return done(null, false, {
                        message: 'That email is already taken'
                    });

                } else {

                    let userPassword = generateHash(password);

                    let data =

                        {
                            email: email,

                            password: userPassword,

                            first_name: req.body.first_name,

                            last_name: req.body.last_name

                        };

                    User.create(data).then((newUser) => {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            let userinfo = newUser.get()

                            let sendData = {
                                first_name:userinfo.first_name,
                                last_name:userinfo.last_name,
                                id:userinfo.id

                            }
                            const payload = {
                                sub: newUser.id
                              };
                        
                              // create a token string
                              const token = jwt.sign(payload, config.jwtSecret);
                        
                            let fullName = data.first_name + " "+ data.last_name;
                            welcomeEmail(data.email, fullName)
                            
                            return done(null, token, sendData);

                        }

                    });

                }

            });

        }

    ));


    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // by default, local strategy uses username and password, we will override with email

            usernameField: 'email',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, email, password, done) {

            let isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, {
                        message: 'Email does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                let userinfo = user.get();



                let sendData = {
                    first_name:userinfo.first_name,
                    last_name:userinfo.last_name,
                    id:userinfo.id
                }

                const payload = {
                    sub: user.id
                  };
            
                  // create a token string
                  const token = jwt.sign(payload, config.jwtSecret);
            

                return done(null,token, sendData);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));
}