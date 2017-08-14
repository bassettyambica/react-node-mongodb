//use NODE_ENV to determine the environment and use the keys
if(process.env.NODE_ENV === "production"){
    module.export = require("./prod");
} else {
    module.export = require("./dev");
}
