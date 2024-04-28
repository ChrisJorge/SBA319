const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    expressShipping: String
});

const Part = mongoose.model("Part", partSchema);
module.exports = Part;