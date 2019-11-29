let express = require('express');
let router = express.Router();
let PublicationCtrl = require('../controllers/publications');

router.get('/', (req, res) => { 
    res.send('No User ID Found! User might not be signed in.')
});
router.get('/:id', PublicationCtrl.index);
router.post('/:id', PublicationCtrl.new);
router.get('/:id/edit', PublicationCtrl.edit);
router.put('/:id', PublicationCtrl.update);
router.delete('/:id', PublicationCtrl.delete);

module.exports = router;