//Import connection
const mongoose = require(`../db/connection`);

const Schema = mongoose.Schema;

/* Create Author as new schema
    properties:
    firstName (string),
    lastName (string),
    cookbooks[] (reference to Cookbook model by id)
*/

const authorSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  cookbooks: [{ ref: `Cookbooks`, type: mongoose.Schema.Types.ObjectId }],
});

//export model named "Author"

const Author = mongoose.model(`Author`, authorSchema);

module.exports = Author;
