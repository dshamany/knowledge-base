let express = require('express');
let router = express.Router();
let journalsCtrl = require('../controllers/journals');

router.get('/', journalsCtrl.index);
router.post('/', journalsCtrl.create);
router.get('/:id/view', journalsCtrl.view);
router.delete('/:id', journalsCtrl.remove);

module.exports = router;