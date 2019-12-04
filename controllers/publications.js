let Publication = require('../models/publication');

module.exports = {
    index,
    new: newEntry,
    edit: editPublication,
    update: updatePublication,
    delete: deletePublication
}

function index(req, res) {
    Publication.find({ user: req.user._id }, (err, publications) => {
        if (err) { console.log(err); return; }
        res.render('publications/index', {
            publications,
            title: 'Publications',
        });
    });
}

function newEntry(req, res) {
    let entry = new Publication(req.body);
    entry.user = req.user._id;
    entry.save((err) => {
        if (err) { console.log(err); return; }
        index(req, res);
    });
}

function editPublication(req, res) {
    Publication.findById(req.params.id, (err, pub) => {
        if (err) { console.log(err); return; }
        res.render('publications/edit', {
            pub,
            title: 'Edit',
        });
    });
}

function updatePublication(req, res) {
    Publication.findByIdAndUpdate(req.params.id, req.body, (err, pub) => {
        if (err) { console.log(err); return; }
        res.redirect(`/publications`);
    });
}

function deletePublication(req, res) {
    Publication.findByIdAndDelete(req.params.id, (err) => {
        if (err) { console.log(err); return; }
        res.redirect(`/publications`);
    });
}
