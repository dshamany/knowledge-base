let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let journalSchema = new Schema({
    entry: {
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

module.exports = mongoose.model('Journal', journalSchema);