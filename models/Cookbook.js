//import connection
const mongoose = require(`../db/connection`);

/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/

const cookBookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  yearPublished: { type: Number },
});

//export model

const Cookbook = mongoose.model(`Cookbook`, cookBookSchema);

module.exports = Cookbook;
