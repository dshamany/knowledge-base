let express = require('express');
let router = express.Router();
let journalsCtrl = require('../controllers/journals');

router.get('/', isLoggedIn, journalsCtrl.index);
router.post('/', isLoggedIn, journalsCtrl.create);
router.get('/:id/view', isLoggedIn, journalsCtrl.view);
router.delete('/:id', isLoggedIn, journalsCtrl.remove);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }