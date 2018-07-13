const bCrypt = require('bcrypt-nodejs');
const nodemailer = require('nodemailer')
module.exports = (passport, user) => {
    let User = user;
    let LocalStrategy = require('passport-local').Strategy;
    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });
    // deserialize user 
    passport.deserializeUser((id, done) => {

        User.findById(id).then(function (user) {

            if (user) {

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

                    User.create(data).then((newUser, created) => {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {
                            let fullName = data.first_name + " "+ data.last_name;
                            welcomeEmail(data.email, fullName)
                            return done(null, newUser);

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

            let User = user;

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
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));
}

function welcomeEmail(email,name){
    let userEmail = email;
    let userName = name;
    const output = `
    <p>Welcome ${userName}</p>

    <br>

    <h3>Getting Started</h3>

    <br>
    
    <p> We're excited to have you on board and we can't wait to see what you have to offer. This website gives you the opportunity to share what you have with the world and make some cash while you're at it. So Welcome to Creation Station ${userName} and we wish you the best of luck.

    <br>
    
    Thanks,

    <br>

    The Team at Creation Station
    </p>
  `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'creationstation602@gmail.com', // generated ethereal user
          pass: 'Gideon2015'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Creation Station" <contactemail@email.com>', // sender address
        to: userEmail, // list of receivers
        subject: 'Welcome', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  });
  };
