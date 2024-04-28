const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema({
    make: String,
    model: String,
    packages: Array,
    colors: Array,
    price: Number
});

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;