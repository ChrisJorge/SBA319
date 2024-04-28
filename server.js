// Getting necessary imports
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDataBase = require("./config/connect.js");
const cors = require("cors");

// Importing the Models 
const Car = require('./models/car.js');
const Dealer = require('./models/dealer.js');
const Part = require('./models/parts.js');

// Importing the controllers
const carController = require("./controllers/carController.js");
const dealerController = require('./controllers/dealerController.js');
const partController = require('./controllers/partController.js');

app.use(express.json());
app.use(cors());
connectToDataBase();
app.get("/", (req,res) => {
    res.send('This Is The Landing Page!');
});

// Car Routes
app.get("/api/cars", carController.fetchAll);
app.get("/api/cars/:id", carController.fetchOne);
app.post("/api/cars", carController.Create);
app.put("/api/cars/:id", carController.Update);
app.delete("/api/cars/:id", carController.Delete)

// Dealer Routes
app.get("/api/dealers", dealerController.fetchAll);
app.get("/api/dealers/:id", dealerController.fetchDealer);
app.post("/api/dealers", dealerController.create);
app.put('/api/dealers/:id', dealerController.update);
app.delete('/api/dealers/:id', dealerController.deleteDealer);

// Part Routes
app.get("/api/parts", partController.fetchAll);
app.get("/api/parts/:id", partController.fetchPart);
app.post("/api/parts/", partController.create);
app.put("/api/parts/:id", partController.update);
app.delete("/api/parts/:id", partController.deletePart);


app.listen(PORT, () => {
    console.log(`Express Server Listening On Port ${PORT}`);
});