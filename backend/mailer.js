
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

// Sends an email
const sendEmail = async (name, email, phone, comment) => {
    try {
        const info = await transporter.sendMail({
            from: `"New Submission" <${process.env.MAIL_USER}>`, // Sender's email
            to: process.env.MAIL_USER, // Receiver's email (can be changed to any recipient)
            subject: 'New Contact Form Submission', // Subject of the email
            text: `You have a new submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComment: ${comment}`, // Plain text body
            html: `<b>You have a new submission:</b><br><br><b>Name:</b> ${name}<br><b>Email:</b> ${email}<br><b>Phone:</b> ${phone}<br><b>Comment:</b> ${comment}`, // HTML body
        });
        console.log('Email Sent Successfully: ', info.messageId);
        return true;            // Success
    } catch (error) {
        console.error('An error occurred while sending the email: ', error.message);
        return false;           // Fail
    }
};

module.exports = { sendEmail };