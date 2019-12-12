let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let moodSchema = new Schema({
    mood: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Mood', moodSchema);