import mongoose from "mongoose";



const userSchema=new mongoose.Schema({
  username:{
    type:String,
    require:[true,"kullanıcı adı Gerekli"],
    unique:[true,"kullanıcı adı zaten kullanılıyor"],
  },
  password:{
    type:String,
    require:[true,"Şifre  Gerekli"],
    unique:false,
  },
  firsname:{type:String},
  lastname:{type:String},
})

export default mongoose.model('user',userSchema)