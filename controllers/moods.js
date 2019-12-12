let Mood = require('../models/mood');

module.exports = {
    index
}

function index(req, res) {
    Mood.find({ user: req.params.id }, (err, moods) => {
        if (err) { console.log(err); return; }
        res.render('index', {
            title: 'Moods',
            moods
        });
    });
}