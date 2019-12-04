let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let feedSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    username: String,
    content: {
        type: String,
        required: true,
        maxlength: 128
    }
}, {
        timestamps: true
});

module.exports = mongoose.model('Feed', feedSchema);