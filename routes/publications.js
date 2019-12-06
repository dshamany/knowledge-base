let express = require('express');
let router = express.Router();
let PublicationCtrl = require('../controllers/publications');

router.get('/', isLoggedIn, PublicationCtrl.index);
router.post('/', isLoggedIn, PublicationCtrl.new);
router.get('/:id/edit', isLoggedIn, PublicationCtrl.edit);
router.put('/:id', isLoggedIn, PublicationCtrl.update);
router.delete('/:id', isLoggedIn, PublicationCtrl.delete);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }