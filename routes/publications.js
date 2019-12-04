let express = require('express');
let router = express.Router();
let PublicationCtrl = require('../controllers/publications');

router.get('/', PublicationCtrl.index);
router.post('/', PublicationCtrl.new);
router.get('/:id/edit', PublicationCtrl.edit);
router.put('/:id', PublicationCtrl.update);
router.delete('/:id', PublicationCtrl.delete);

module.exports = router;