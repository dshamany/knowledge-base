let express = require('express');
let router = express.Router();
let sleepCtrl = require('../controllers/sleep');

router.get('/', sleepCtrl.index);
router.post('/', sleepCtrl.new);
router.get('/:id/edit', sleepCtrl.edit);
router.put('/:id', sleepCtrl.update);
router.delete('/:id', sleepCtrl.delete);

module.exports = router;