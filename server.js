// Getting necessary imports
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDataBase = require("./config/connect.js");
const carController = require("./controllers/carController.js");
const cors = require("cors");

// Importing the Models 
const Car = require('./models/car.js');
const Dealer = require('./models/dealer.js');
const Part = require('./models/parts.js');

app.use(express.json());
app.use(cors());
connectToDataBase();
app.get("/", (req,res) => {
    res.send('This Is The Landing Page!');
});

app.get("/api/cars", carController.fetchAll);
app.get("/api/cars/:id", carController.fetchOne);
app.post("/api/cars", carController.Create);
app.put("/api/cars/:id", carController.Update);
app.delete("/api/cars/:id", carController.Delete)

app.listen(PORT, () => {
    console.log(`Express Server Listening On Port ${PORT}`);
});