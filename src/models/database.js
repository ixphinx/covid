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
    password: String,
    stds: Boolean,
    cancer: Boolean,
    mobesity: Boolean,
    diabetes: Boolean,
    hypertension: Boolean,
    asthma: Boolean,
    pneumonia: Boolean,
    allergy: Boolean,
    hattack: Boolean,
    surgeries: Boolean,
    vaccinated: Boolean,


});

module.exports= mongoose.model('Data', Data);
