const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    name: String,
    lastname: String,
    age: Number,
    city: String,
    country: String,
    email: String,
    user: String,
    password: String


});

module.exports= mongoose.model('Data', Data);
