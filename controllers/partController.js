const Part = require('../models/parts.js');

const fetchAll = async (req,res) => {
    const part = await Part.find();
    res.json({parts: part});
};

const fetchPart = async (req,res) => {
    const partID = req.params.id;

    const part = await Part.findById(partID);
    res.json({part: part});
};

const create = async (req,res) => {
    const {name, quantity, price, expressShipping} = req.body;
    const part = await Part.create({
        name: name,
        quantity: quantity,
        price: price,
        expressShipping: expressShipping
    });

    res.json({part: part});
};

const update = async (req,res) => {
    const partID = req.params.id;
    const {name, quantity, price, expressShipping} = req.body;
    const part = await Part.findByIdAndUpdate(partID, {
        name: name,
        quantity: quantity,
        price: price,
        expressShipping: expressShipping
    });
    const updatedPart = await Part.findById(partID);
    res.json({part: updatedPart})

}

const deletePart = async (req,res) => {
    const partID = req.params.id;
    const part = await Part.findByIdAndDelete(partID);
    res.json({success: 'Record Deleted Successfully!'})
}

module.exports = {
    fetchAll,
    fetchPart,
    create,
    update,
    deletePart
}