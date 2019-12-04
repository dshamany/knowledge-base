let express = require('express');
let router = express.Router();
let Feed = require('../models/feed');

router.get('/', (req, res) => {
    Feed.find({}, (err, feed)=> {
        res.render('dashboard', {
            title: 'Knowledgebase - Dashboard',
            user: req.user,
            feed
        });
    });
});

module.exports = router;