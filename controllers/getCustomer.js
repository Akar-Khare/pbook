const Customer = require('../schema/CustomerSchema');

exports.getCustomer = (async (req, res) => {

    const findCustomers= await Customer.find();
   console.log("All cards: "+findCustomers)
    res.status(201).json(findCustomers);


})