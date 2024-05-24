const express = require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(3000, ()=>{
    console.log("App is running");
})

app.get("/" , (req, res) =>{
    res.send(`<h1>This is myy home page</h1>`)
}) 