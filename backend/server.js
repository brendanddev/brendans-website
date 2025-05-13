
// server.js
// Brendan Dileo, May 2025

const express = require('express');
const cors = require('cors');
const betterSqlite3 = require('better-sqlite3');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const db = new betterSqlite3.Database('./submissons.db', (err) => {
    if (err) {
        console.error('An error occurred while opening the database: ', err.message);
    }
    console.log('Connected to the database.');
});

db.run(`
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
