const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    heading:{type:String},
    paragraph:{type:String}
})

module.exports = new mongoose.model("user", userSchema);