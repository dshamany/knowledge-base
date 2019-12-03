let Sleep = require('../models/sleep');

module.exports = {
    index,
    new: newSleep,
    edit,
    update,
    delete: remove
}

function dateTimeValues(date) {
    let dateString = date.toLocaleDateString();
    let timeString = date.toLocaleTimeString();
    return [dateString, timeString];
}

function duration(start, end) {
    return new Date(start - end).toTimeString().split(' ')[0];
}

function index(req, res) {
    Sleep.find({ user: req.params.id }, (err, sleep) => {
        if (err) { console.log(err); return; }
        res.render('sleep/index', {
            sleep,
            title: "Sleep",
            user: req.params.id,
        }); 
    });
}

function newSleep (req, res){
    let sleep = new Sleep(req.body);
    sleep.user = req.params.id;
    sleep.duration = duration(req.body.start, req.body.end);
    sleep.save((err, sleep) => {
        if (err) { console.log(err); return; }
        res.redirect(`/sleep/${sleep.user}`);
    });
}

function edit(req, res) {
    Sleep.findById(req.params.id, (err, night) => {
        res.render('sleep/edit', {
            night,
            title: 'Sleep Edit',
            user: night.user,
            startDate: night.start.toLocaleDateString(),
            startTime: night.start.toLocaleTimeString(),
            endDate: night.end.toLocaleDateString(),
            endTime: night.end.toLocaleTimeString(),
            duration: duration(night.start, night.end)
        });
    });
}

function update(req, res) {
    req.body.startTime = parseInt(req.body.startTime);
    req.body.endTime = parseInt(req.body.endTime);
    Sleep.findByIdAndUpdate(req.params.id, req.body, (err, updatedSleep) => {
        if (err) { console.log(err); return; }
        res.redirect(`/sleep/${req.body.user}`); 
    });
}

function remove(req, res) {
    Sleep.findByIdAndDelete(req.params.id, (err, removedItem) => {
        if (err) { console.log(err); return; }
        res.redirect(`/sleep/${removedItem.user}`);
    });
}