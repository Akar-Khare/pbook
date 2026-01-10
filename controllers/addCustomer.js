const Customer = require('../schema/CustomerSchema');

exports.addCustomer= (async (req, res) => {
  
   

  const{id, name, phone, whatsapp, email, address, createdAt, balance,dob,weddingDate} = req.body;


  //const findUser = await Card.findOne({userId: userId});
  
 
    const newCust = new Customer({
    id,
    name, 
    phone,
    whatsapp,
    email,
    address,
    createdAt,
    balance,
    dob,
    weddingDate
    })
    
    newCust.save();

    res.status(201).json({info:'Customer created'});
  
  
   
  })