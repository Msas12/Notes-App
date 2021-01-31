// Dependencies
const express = require('express');
const nodemon = require('nodemon');
const path = require('path');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

// Routes
// Route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require('./public/assets/js/index.js')(app);







// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));