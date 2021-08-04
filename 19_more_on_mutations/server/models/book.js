
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: String,
    pages: String
});

module.exports = mongoose.Model("Book", bookSchema);