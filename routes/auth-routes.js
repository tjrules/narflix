const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');


authRouter.post('/register', usersController.create);

// authRouter.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: 'login',
//     failureFlash: true,
//   })
// );
authRouter.post('/login', passport.authenticate('local'),
  (req, res) => {
  res.redirect('/')
});

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
