const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost/cookbooks_db", { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports = mongoose;
