const Dealer = require('../models/dealer.js');

const fetchAll = async (req,res) => {
    const dealers = await Dealer.find();
    res.json({dealers: dealers});
};

const fetchDealer = async (req,res) => {
    const dealerID = req.params.id;

    const dealer = await Dealer.findById(dealerID);
    res.json({dealer: dealer});
};

const create = async (req,res) => {
    const {location, NumCars, brands, rating} = req.body;
    const dealer = await Dealer.create({
        location: location,
        NumCars: NumCars,
        brands: brands,
        rating: rating
    });

    res.json({dealer: dealer});
};

const update = async (req,res) => {
    const dealerID = req.params.id;
    const {location, NumCars, brands, rating} = req.body;
    const dealer = await Dealer.findByIdAndUpdate(dealerID, {
        location: location,
        NumCars: NumCars,
        brands: brands,
        rating: rating
    });
    const updatedDealer = await Dealer.findById(dealerID);
    res.json({dealer: updatedDealer})

}

const deleteDealer = async (req,res) => {
    const dealerID = req.params.id;
    const dealer = await Dealer.findByIdAndDelete(dealerID);
    res.json({success: 'Record Deleted Successfully!'})
}

module.exports = {
    fetchAll,
    fetchDealer,
    create,
    update,
    deleteDealer
}