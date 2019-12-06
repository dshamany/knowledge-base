let express = require('express');
let router = express.Router();
let sleepCtrl = require('../controllers/sleep');

router.get('/', isLoggedIn, sleepCtrl.index);
router.post('/', isLoggedIn, sleepCtrl.new);
router.get('/:id/edit', isLoggedIn, sleepCtrl.edit);
router.put('/:id', isLoggedIn, sleepCtrl.update);
router.delete('/:id', isLoggedIn, sleepCtrl.delete);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }