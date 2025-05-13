
// server.js
// Brendan Dileo, May 2025

const express = require('express');
const cors = require('cors');
const betterSqlite3 = require('better-sqlite3');
const path = require('path');

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
      phone TEXT,
      comment TEXT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`);

// Handles form submissions from contact page
app.post('/submit', (req, res) => {
    const { name, email, phone, comment } = req.body;
    try {
        const stmt = db.prepare(`
            INSERT INTO submissions (name, email, phone, comment)
            VALUES (?, ?, ?, ?)
        `);
        const info = stmt.run(name, email, phone, comment);
        res.json({ status: 'CREATE ENTRY SUCCESSFUL', id: info.lastInsertRowid });
        console.log('SUBMISSION SAVED:', { name, email, phone, comment });
    } catch (err) {
        console.error('Database insert failed:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
