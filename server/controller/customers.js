import Customer from "../models/customers.js";
import mailSend from "../mailElement/index.js"

export const getCustomers= async (req,res)=>{
  try {
    const customers= await Customer.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json(error.message);
  }
}


export const createCustomers=async (req,res)=>{
  mailSend(req.body)
  .then(async response =>{
    response.mailler={...response.mailler,customerName:req.body.isim}
    const newCust=new Customer(response.mailler);
    try {
      await newCust.save();
      res.status(200).json(newCust)
    } catch (error) {
      res.status(404).json(error)
    }
  })
  .catch(error=>{
    res.status(404).json(error.message)
  })
}








