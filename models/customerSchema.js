const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const customerSchema = new Schema({
FirstName: String,
LastName: String,
Email: String,
Telephone: String,
Age: String,
Country: String,
Gender: String,

} , { timestamps: true });

// Create a model based on that schema
const Customer = mongoose.model("Customer", customerSchema);
// export the model
module.exports = Customer