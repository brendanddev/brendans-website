
// server.js
// Brendan Dileo, May 2025

const express = require('express');
const cors = require('cors');
const betterSqlite3 = require('better-sqlite3');
const path = require('path');

const { sendEmail } = require('./mailer');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

let db;

try {
    db = betterSqlite3(path.join(__dirname, 'submissions.db'));
    console.log('Connected to the database.');
} catch (err) {
    console.error('Failed to connect to the database:', err.message);
}

db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      comment TEXT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`);

// Handles form submissions from contact page
app.post('/submit', async (req, res) => {
    const { name, email, comment } = req.body;
    try {
        const stmt = db.prepare(`
            INSERT INTO submissions (name, email, comment)
            VALUES (?, ?, ?)
        `);
        const info = stmt.run(name, email, comment);
        console.log('SUBMISSION SAVED:', { name, email, phone, comment });


        const emailSent = await sendEmail(name, email, comment);

        if (emailSent) {
            res.json({ status: 'CREATE ENTRY SUCCESSFUL & EMAIL SENT', id: info.lastInsertRowid });
        } else {
            res.json({ status: 'CREATE ENTRY SUCCESSFUL, EMAIL FAILED' });
        }


    } catch (err) {
        console.error('Database insert failed:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
