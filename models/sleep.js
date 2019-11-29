let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let sleepSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    start: {
            type: String,
            required: true
        },
    end: {
            type: String,
            required: true
    },
    duration: Number,
    Notes: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Sleep', sleepSchema)