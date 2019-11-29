let Sleep = require('../models/sleep');

module.exports = {
    index,
    new: newSleep,
    edit,
    update,
    delete: remove
}

function index(req, res) {
    Sleep.find({ user: req.params.id }, (err, sleep) => {
        res.render('sleep/index', {
            sleep,
            title: "Sleep",
            user: req.params.id
        }); 
    });
}

function newSleep (req, res){
    let sleep = new Sleep(req.body);
    let start = parseInt(req.body.start);
    let end = parseInt(req.body.end);
    sleep.duration = parseInt(end - start);
    sleep.user = req.params.id;
    sleep.save((err) => {
        if (err) { console.log(err); return; }
        index(req, res);
    })
}

function edit(req, res) {
    Sleep.findById(req.params.id, (err, night) => {
        res.render('sleep/edit', {
            night,
            title: 'Sleep Edit',
            user: night.user
        });
    });
}

function update(req, res) {
    Sleep.findByIdAndUpdate(req.params.id, req.body, (err, updatedSleep) => {
        if (err) { console.log(err); return; }
        res.redirect(`/sleep/${updatedSleep.user}`); 
    });
}

function remove(req, res) {
    Sleep.findByIdAndDelete(req.params.id, (err, removedItem) => {
        if (err) { console.log(err); return; }
        res.redirect(`/sleep/${removedItem.user}`);
    });
}