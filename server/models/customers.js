import mongoose from "mongoose";

const customerSchema=mongoose.Schema({
  from:{type:String,default:'evan.housten@gmail.com'},
  subject:{type:String,default:'bookkeeping services'},
  to: String,
  text: String,
  customerName: {type:String,default:''},
  City: {type:String,default:''},
  Country: {type:String,default:''},
  cretedAt:{
    type:Date,
    default:new Date(),
  },
})

const Customer=mongoose.model("Customer",customerSchema);

export default Customer;











