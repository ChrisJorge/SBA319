const mongoose = require('mongoose');

const dealerSchema = mongoose.Schema({
    location: String,
    NumCars: Number,
    brands: Array,
    rating: String,
})

const Dealer = mongoose.model("Dealer", dealerSchema);
module.exports = Dealer;