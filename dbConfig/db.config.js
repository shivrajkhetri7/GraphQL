const mongoose = require("mongoose");

const dbConnection = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "graphQL"
})

module.exports = { dbConnection };
