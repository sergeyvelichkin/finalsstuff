const db = require("../models");
const nodemailer = require('nodemailer');

module.exports = function(app) {

app.post('/send', (req, res) => {
    const output = `
      <p>You have a new lead</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Question: ${req.body.question}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
    `;
  
    // create reusable transporter object using the default SMTP transport
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
        to: 'creationstation602@gmail.com', // list of receivers
        subject: 'Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        res.render('contact', {msg:'Email has been sent'});
    });
    });
};