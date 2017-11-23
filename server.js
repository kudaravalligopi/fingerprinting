// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Get our API routes
const fingerprint = require('./server/routes/fingerprint');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


app.use(cors())
// Set our api routes
app.use('/fingerprint', fingerprint);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
const host = process.env.HOST || 'ip-10-224-69-47.aws.lmig.com'

// const port = process.env.PORT || '3001';
// const host = process.env.HOST || 'localhost'
app.set('port', port);
app.set('hostname', host)

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, host, () => {
    console.log(`API running on ${host}:${port}`)
});