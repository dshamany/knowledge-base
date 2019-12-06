let express = require('express');
let router = express.Router();
let Feed = require('../models/feed');

router.get('/', isLoggedIn, (req, res) => {
    Feed.find({}, (err, feed)=> {
        res.render('dashboard', {
            title: 'Knowledgebase - Dashboard',
            user: req.user,
            feed
        });
    });
});

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }