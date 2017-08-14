const passport = require("passport");

//GoogleStrategy internally identified as string "google", that is how get route is using the
//authentication startegy from(passport.js file in services folder)
module.exports = (app) => {
    app.get("/auth/google",
            passport.authenticate("google", {
                //Scope is for requesting google to provide user profile and email
                scope: ["profile", "email"]
            }), (req, res) => {

    });

    //google redirect route after authentication
    app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
        res.send(" logged in as google User ");
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.send("You have looged out" + req.user);
    });

    app.get("/api/test", (req, res) => {
        res.send("Ahhh!" + req.user);
    })

};
