const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    id: String,
    name: String,
    phone: String,
    whatsapp : String,
    address: String,
    createdAt: String,
    balance : Number,
    dob:String,
    weddingDate:String        
})

const Customer = new mongoose.model("customer",customerSchema);

module.exports = Customer
