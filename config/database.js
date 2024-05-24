const mongoose = require("mongoose");

require("dotenv").config();

 const connectWithD = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB connected successfully"))
    .catch((error) => {
        console.log("BD facing connection issue");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithD;