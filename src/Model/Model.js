const mongoose = require('mongoose');

const hospitalSchema=new mongoose.Schema({
    hospitalname:String,
    contactno:String,
    pincode:String
});

  
module.exports=mongoose.model("Hospital",hospitalSchema);
  