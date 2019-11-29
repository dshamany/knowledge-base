let express = require('express');
let router = express.Router();
let sleepCtrl = require('../controllers/sleep');

router.get('/:id', sleepCtrl.index);
router.post('/:id', sleepCtrl.new);
router.get('/:id/edit', sleepCtrl.edit);
router.put('/:id', sleepCtrl.update);
router.delete('/:id', sleepCtrl.delete);

module.exports = router;