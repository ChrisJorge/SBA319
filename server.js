require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const connectToDataBase = require("./config/connect.js")
const cors = require("cors");

app.use(express.json())
app.use(cors())
connectToDataBase()
app.get("/", (req,res) => {
    res.send('This Is The Landing Page!')
})


app.listen(PORT, () => {
    console.log(`Express Server Listening On Port ${PORT}`)
})