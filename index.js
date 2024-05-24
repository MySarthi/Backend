const express = require('express');
const app = express();
const GuideRoutes=require('./Routers/GuideRoutes');
const UserRoutes=require('./Routers/userRoutes')

require("dotenv").config();

app.use('/api/v1/user',UserRoutes);
app.use('/api/v1/guide',GuideRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`App is running on PORT ${PORT}`);
})

app.get("/" , (req, res) =>{
    res.send(`<h1>This is myy home page</h1>`)
}) 