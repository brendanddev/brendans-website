
// mailer.js
// Brendan Dileo, May 2025

const nodemailer = require('nodemailer');
require('dotenv').config();

// Node Mailer Transporter setup
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});



