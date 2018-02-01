const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');


authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('components/UserLoginPage');
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('../src/components/UserSignUpPage');
});

authRouter.post('/register', usersController.create);

authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '../src/components/UserLoginPage',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
