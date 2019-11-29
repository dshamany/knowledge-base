let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let publicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    datePublished: {
        type: Date,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    notes: String
}, {
        timestamps: true
});

module.exports = mongoose.model('Publication', publicationSchema);