let Publication = require('../models/publication');

module.exports = {
    index,
    new: newEntry,
    edit: editPublication,
    update: updatePublication,
    delete: deletePublication
}

// function getDateValueString(date) {
//     date = date.split(' ');
//     let [weekday, month, daydate, year] = date;
//     return 
// }

function index(req, res) {
    Publication.find({ user: req.params.id }, (err, publications) => {
        res.render('publications/index', {
            publications,
            title: 'Publications',
            user: req.params.id
        });
    });
}

function newEntry(req, res) {
    let entry = new Publication(req.body);
    entry.user = req.params.id;
    entry.save((err) => {
        if (err) { console.log(err); return; }
        index(req, res);
    });
}

function editPublication(req, res) {
    Publication.findById(req.params.id, (err, pub) => {
        res.render('publications/edit', {
            pub,
            title: 'Edit',
            id: req.params.id
        });
    });
}

function updatePublication(req, res) {
    Publication.findByIdAndUpdate(req.params.id, req.body, (err, publication) => {
        Publication.find({ user : pub.user }, (err, publications) => {
            res.render('publications/index', {
                publications,
                title: 'Publications',
                id: pub.user,
                user: pub.user
            }); 
        });
    });
}

function deletePublication(req, res) {
    Publication.findByIdAndDelete(req.params.id, (err, pub) => {
        res.redirect(`/publications/${pub.user}`);
    });
}
