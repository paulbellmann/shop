var express = require('express');
var router = express.Router();
var passport = require('passport')

// add protection middleware
// and use it in every route here
var csrf = require('csurf')
var csrfProtection = csrf();
router.use(csrfProtection)

/* GET user page. */
router.get('/signup', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/signup', passport.authenticate('local.signup', {      // required in app.js from /config/passport.js
    successRedirect: 'profile',
    failureRedirect: 'signup',
    failureFlash: true
}))

router.get('/profile', function(req, res, next) {
    res.render('user/profile');
});

module.exports = router;
