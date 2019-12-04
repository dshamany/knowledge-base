let express = require('express');
let router = express.Router();
let feedCtrl = require('../controllers/feed');

router.get('/:id', feedCtrl.index);
router.post('/:id', feedCtrl.new);
router.delete('/:id', feedCtrl.remove);

module.exports = router;