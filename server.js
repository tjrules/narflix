const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// set up port
const PORT = process.env.PORT || 3000;
// for authentication


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

//set up passport local
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// allows user to bounce user auth info between all requests,
// so user need not resign every new page.
const session = require('express-session');
// app.use(session({
//   secret: process.env.SESSION_KEY,
//   resave: false,
//   saveUninitialized: true,
// }));

//set up passport local
const passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/favorites', require('./routes/movie-routes'));
app.use('/auth', require('./routes/auth-routes'))

app.listen(PORT, () => {
  console.log(`check us out on PORT ${PORT}`)
})


