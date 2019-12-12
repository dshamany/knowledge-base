let express = require('express');
let router = express.Router();
let moodCtrl = require('../controllers/moods');

router.get('/', isLoggedIn, moodCtrl.index);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }