require("dotenv").config();

const mongoose = require('mongoose');

const connectToDataBase = async() => {
    await mongoose.connect(process.env.CONNECTIONSTR);
    console.log("Currently Connected To MongoDB Cluster");
}

module.exports = connectToDataBase