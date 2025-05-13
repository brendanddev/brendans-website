
// server.js
// Brendan Dileo, May 2025

const express = require('express');
const cors = require('cors');
const betterSqlite3 = require('better-sqlite3');
const bodyParser = require('body-parser');
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
    CREATE TABLE IF NOT EXISTS submissons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      comment TEXT,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`);

app.get('/', (req, res) => {
    console.log('GET Route Successful');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
