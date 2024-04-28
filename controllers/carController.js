const Car = require('../models/car.js');

const fetchAll = async (req,res) => {
    const cars = await Car.find();

    res.json({car: cars});
};

const fetchOne = async (req,res) => {
    const carID = req.params.id;
    const car = await Car.findById(carID);
    res.json({car: car});
};

const Create = async(req,res) => {
    const {make,model,packages,colors,price} = req.body;

    const car = await Car.create({
        make: make,
        model: model,
        packages: packages,
        colors: colors,
        price: price
    });

    res.json({car: car});
};

const Update = async (req,res) => {
    const carID = req.params.id;
    const {make,model,packages,colors,price} = req.body;

    const car = await Car.findByIdAndUpdate(carID, {
        make: make,
        model: model,
        packages: packages,
        colors: colors,
        price: price
    });

    const updatedCar = await Car.findById(carID);
    res.json({car: updatedCar});
}

const Delete = async (req,res) => {
    const carID = req.params.id;
    const car = await Car.findByIdAndDelete(carID);
    res.json({message: 'Entry Successfully deleted!'})
}
module.exports = {
    fetchAll,
    fetchOne,
    Create,
    Update,
    Delete
};