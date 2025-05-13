
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

app.get('/', (req, res) => {
    console.log('GET Route Successful');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
