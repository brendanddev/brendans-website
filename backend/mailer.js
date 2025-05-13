
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

// Test send email
const sendTestEmail = async () => {
    try {
        const info = await transporter.sendMail({
            from: `"Test Sender" <${process.env.MAIL_USER}>`, // sender address
            to: process.env.MAIL_USER, // receiver's email
            subject: 'Test Email', // Subject line
            text: 'This is a test email sent from Nodemailer.', // Plain text body
            html: '<b>This is a test email sent from Nodemailer.</b>', // HTML body
        });
        // Validate
        console.log('Test email sent:', info.messageId);
        console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending test email:', error.message);
    }
};

sendTestEmail();