const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

//Serialize user of passport creates a unique id and stuffs into cookies on client-side.
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//Creates an new GoogleStrategy instance to authenticate User via Google
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id})
    .then(existingUser =>{
        if(existingUser){
            //mongoose done()=>err: null and return existingUser
            done(null, existingUser);
        } else {
            new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
    });
}
)
);
