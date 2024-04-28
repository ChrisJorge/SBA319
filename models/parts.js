const mongoose = require('mongoose');

const partSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    expressShipping: Boolean
});

const Part = mongoose.model("Part", partSchema);
module.exports = Part;