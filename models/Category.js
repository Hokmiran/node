const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    publishDate: { type: Date, default: Date.now },
    year: Number,
    description: String

})


const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
}