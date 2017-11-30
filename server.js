// Get dependencies
const express = require('express')
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport')
const LdapStrategy = require('passport-ldapauth')
const session = require('express-session');


const OPTS = {
  server : {
    url:'ldap://ldapad.lmig.com:389',
    bindDn: 'sacip_lmb_hdp_np_adm@lm.lmig.com',
    bindCredentials: '4Ap#lz4zFbWR6#',
    searchBase: 'dc=lm,dc=lmig,dc=com',
    searchFilter:'(UserPrincipalName={{username}}*)',
    searchScope: 'ldap3.SUBTREE'
    //searchAttributes: ['memberOf']
    //bindCredentials:'4Ap#lz4zFbWR6#'
  },
  passwordField:'{{password}}',
  usernameField: '{{usename}}'
}


// Get our API routes
const fingerprint = require('./server/routes/fingerprint');
const login = require('./server/routes/login')
const curate = require('./server/routes/curate')
const app = express();
app.use(session({
  secret: 'ldap secret',
  resave: false,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 } /// maxAge in milliseconds
}));
console.log('OPTS',JSON.stringify(OPTS,3,null));

passport.use(new LdapStrategy(OPTS));

app.use(passport.initialize());
app.use(passport.session());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize())
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// app.post('/login', passport.authenticate('ldapauth'),(req, res)=>{
//   console.log(req.body)
//   res.send({status:'ok'})
// })

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.post('/login', passport.authenticate('ldapauth', {
  successRedirect: '/', failureRedirect: '/login'
})); 

app.use(cors())
// Set our api routes
app.use('/fingerprint', fingerprint);
app.use('/curate', curate)



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
