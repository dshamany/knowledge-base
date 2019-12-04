let Journal = require('../models/journal');

module.exports = {
    index,
    view,
    create,
    remove
}

function index(req, res) {
    Journal.find({ user: req.user._id }, (err, entries) => {
        if (err) { console.log(err); return; }
        res.render('journals/index', {
            title: 'Journal',
            journal: entries,
        });
    });
}

function view(req, res) {
    Journal.findById(req.params.id, (err, entry) => {
        if (err) { console.log(err); return; }
        res.render('journals/view', {
            title: `Entry ${entry.createdAt.toLocaleDateString()}`,
            entry
        });
    });
}

function create(req, res) {
    let entry = new Journal(req.body);
    entry.user = req.user._id
    entry.save((err, newEntry) => {
        if (err) { console.log(err); return; }
        res.redirect(`/journals`);
    });
}

function remove(req, res) {
    Journal.findByIdAndDelete(req.params.id, (err, entry) => {
        if (err) { console.log(err); return; }
        res.redirect(`/journals`);
    });
}