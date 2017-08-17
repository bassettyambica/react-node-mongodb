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
        res.redirect("/surveys");
    });

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

};
