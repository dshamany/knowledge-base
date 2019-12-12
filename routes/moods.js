let express = require('express');
let router = express.Router();
let moodCtrl = require('../controllers/moods');

router.get('/', isLoggedIn, moodCtrl.index);
router.post('/', isLoggedIn, moodCtrl.create);
router.get('/:id/edit', isLoggedIn, moodCtrl.edit);
router.put('/:id', isLoggedIn, moodCtrl.update);
router.delete('/:id', isLoggedIn, moodCtrl.remove);

module.exports = router;

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }