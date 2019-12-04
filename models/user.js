let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    googleId: String
});

module.exports = mongoose.model('User', userSchema);