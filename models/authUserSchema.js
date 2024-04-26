const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');


// define the Schema (the structure of the article)
const authUserSchema = new Schema({
username: String,
email: String,
Password: String,
});
authUserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.Password = await bcrypt.hash(this.Password, salt);
    next();
});
// Create a model based on that schema
const authUser = mongoose.model("authUser", authUserSchema);
// export the model
module.exports = authUser