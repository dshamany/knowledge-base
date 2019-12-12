let Mood = require('../models/mood');

module.exports = {
    index,
    create,
    edit,
    update,
    remove
}

function index(req, res) {
    Mood.find({ user: req.params.id }, (err, moods) => {
        if (err) { console.log(err); return; }
        res.render('moods/index', {
            title: 'Moods',
            moods,
            user: req.user
        });
    });
}

function create(req, res) {
    let mood = new Mood(req.body);
    mood.save((err) => {
        if (err) { console.log(err); return; }
        res.redirect('/moods');
    });
}

function edit(req, res) {
    Mood.findOne({ _id: req.params.id }, (err, mood) => {
        if (err) { console.log(err); return; }
        res.render('moods/edit', {
            title: 'Edit',
            mood,
            user: req.user
        });
    });
}

function update(req, res) {
    Mood.findByIdAndUpdate(req.params.id, req.body, (err, mood) => {
        if (err) { console.log(err); return; }
        res.redirect('/moods');
    });
}


function remove(req, res) {
    Mood.findByIdAndRemove(req.params.id, req.body, (err, mood) => {
        if (err) { console.log(err); return; }
        res.redirect('/moods');
    });
}