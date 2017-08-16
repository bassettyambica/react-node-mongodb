const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

mongoose.connect(keys.mongoURI, {useMongoClient: true});
const app = express();

//Cookie session management
app.use(
    cookieSession({
        //30 days notated in ms
        maxAge: 30 * 24 * 60 * 60 * 1000,
        //Encrypt the token
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("Hi again from the profile....");
});

authRoutes(app);//require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port:5000");
});
