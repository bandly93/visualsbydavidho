var express = require('express');
var nodemailer = require('nodemailer'); 
var router = express.Router();
// var config = require('./configuration');

router.post('/', (req, res) => {
    console.log('emailrouter' ,req.body)
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hdavid1993@gmail.com',
            pass: 'password'
        }
    });
    
    var mailOptions = {
        from: req.body.name,
        to: 'hdavid1993@gmail.com',
        subject: req.body.subject + ' | From: ' + req.body.email,
        text: req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, response){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + req.body.message);
        }
    });
})

module.exports = router;