let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let feedSchema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 128
    },
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
        timestamps: true
});

module.exports = mongoose.model('Feed', feedSchema);