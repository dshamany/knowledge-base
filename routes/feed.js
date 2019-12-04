let express = require('express');
let router = express.Router();
let feedCtrl = require('../controllers/feed');

router.get('/', feedCtrl.index);
router.post('/', feedCtrl.new);
router.delete('/:id', feedCtrl.remove);

module.exports = router;