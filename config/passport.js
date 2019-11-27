let passport = require('passport');
let GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
let User = require('../models/user');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, (accessToken, refreshToken, profile, cb)=>{
        User.findOne({ 'googleId': profile.id }, (err, user) => {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                let user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                user.save((err) => {
                    if (err) { return cb(err); }
                    return cb(null, user);
                });
            }
        });
}));

passport.serializeUser((user, done) => {
    done(null, user._id); 
}); 

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        console.log(err);
        done(err, user);
    });
});