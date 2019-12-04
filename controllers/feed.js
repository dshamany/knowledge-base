let Feed = require('../models/feed');


module.exports = {
    index,
    new: newEntry,
    remove
}

function index(req, res) {
    Feed.find({user: req.user._id}, (err, feed) => {
        if (err) { console.log(err); return; }
        res.render('feed/index', {
            title: "Feed",
            feed,
            user: req.user
        }); 
    });
}

function newEntry(req, res) {
        let entry = new Feed(req.body);
        entry.user = req.user._id;
        entry.username = req.user.name;
        entry.save((err) => {
            if (err) { console.log(err); return; }
            res.redirect(`/feed`);
        });
}

function remove(req, res) {
    Feed.findByIdAndDelete(req.params.id, (err) => {
        if (err) { console.log(err); return; }
        res.redirect(`/feed`);
    });
}