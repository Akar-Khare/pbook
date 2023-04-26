const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true
    },

    image:{
        data: buffer,
        contentType: String
    }

})

const image = new mongoose.model("imageModel",imageSchema);

module.exports = image;