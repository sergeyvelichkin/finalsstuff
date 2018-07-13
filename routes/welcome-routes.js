const db = require("../models");
const nodemailer = require('nodemailer');
const userEmail = "";

module.exports = function(app) {

app.post('/welcome', (req, res) => {

    userEmail = req.body.email;
    
    const output = `
    <p>Welcome ${req.body.name}</p>

    <br>

    <h3>Getting Started</h3>

    <br>
    
    <p> We're excited to have you on board and we can't wait to see what you have to offer. This website gives you the opportunity to share what you have with the world and make some cash while you're at it. So Welcome to Creation Station ${req.body.name} and we wish you the best of luck.

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
  });
};