let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let sleepSchema = new Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    duration: {
        type: String
    },
    Notes: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sleep', sleepSchema)