let express = require('express');
let router = express.Router();
let journalsCtrl = require('../controllers/journals');

router.get('/:id', journalsCtrl.index);
router.get('/:id/view', journalsCtrl.view);
router.post('/:id', journalsCtrl.create);
router.delete('/:id', journalsCtrl.remove);

module.exports = router;