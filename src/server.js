const express = require("express");
const app = express();
const mongoose = require("mongoose");
const hospital = require("./Model/Model");
var cors = require('cors');
app.use(cors());
const uri = "mongodb+srv://rishabh:Suyal@cluster0.gb3oe.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser: true}).then(
  console.log("CONNECTED")
);
app.use(express.json());

app.get("/:pin",(req,res)=>{

  var pincode=req.params.pin.toString();
  var result=pincode.slice(1);
  hospital.find({ pincode: result})
  .then((data) => {
      res.json(data);
  })
  .catch((error) => {
      console.log('error: ', error);
  });
});


app.post("/addHospital",(req,res)=>{
  const newHospital = new hospital({
      hospitalname:req.body.hospitalname,
      contactno:req.body.contactno,
      pincode:req.body.pincode,
  });
  newHospital.save().then( doc=>{ console.log(doc)} )
})

const port=process.env.PORT || 3000;

app.listen(port,function(){
  console.log(`Server started at post ${port}`);
});
