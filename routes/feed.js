let express = require('express');
let router = express.Router();
let feedCtrl = require('../controllers/feed');

router.get('/', isLoggedIn, feedCtrl.index);
router.post('/', isLoggedIn, feedCtrl.new);
router.delete('/:id', isLoggedIn, feedCtrl.remove);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }