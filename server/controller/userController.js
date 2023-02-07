import userModel from "../models/users.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import ENV from "../config.js";



export async function verifyUser(req,res,next){
  try {
    const {username}= req.method=="GET" ?req.query:req.body;

    let exist= await userModel.findOne({username});
    if(!exist) return res.status(404).send({error:"Kullanıcı Bulunamadı"})
    next();
  } catch (error) {
    return res.status(404).send({error:"kullanıcı doğrulanamadı"})
  }
}

/**
  @param {
  username:"admin",
  password:"123",
  firsname:"ömer",
  lastname:"boran",
  } 
 */
export async function register(req,res) {
  try {
    const {username,password,firsName,lastName}=req.body;
    const existUsername=new Promise((resolve,reject)=>{
      userModel.findOne({username},function (err,user) {
        if (err) reject(new Error(err));
        if (user) reject({error:"Kullanıcı Adı zaten var"});
        resolve();
      })
    })

    Promise.all([existUsername])
    .then(()=>{
      if (password) {
        bcrypt.hash(password,10)
        .then(hashedPoassword=>{
          const user=new userModel({
            username,
            password:hashedPoassword,
            firsName,
            lastName
          })

          user.save()
          .then(result=>res.status(201).send({msg:"Kullanıcı Eklendi"}))
          .catch(error=>res.status(500).send({error}))
        })
        .catch((err) => {
          return res.status(500).send({error:"Enable to Hashed Password"});
        });
      }
    })
    .catch((error)=>{
      return res.status(500).send(error);
    })
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function login(req,res) {
  const {username,password}=req.body;
  try {
    userModel.findOne({username})
    .then((user) => {
      bcrypt.compare(password,user.password)
      .then((passwordCheck) => {
        if(!passwordCheck) return res.status(400).send({error:"şifreniz yok"})
        const token= Jwt.sign({
                      userId:user._id,
                      username:user.username,
                    },ENV.JWT_SECRET,{expiresIn:0})
        return res.status(200).send({
          msg:"Giriş Başarılı",
          username:user.username,
          token
        })
      }).catch((err) => {
        return res.status(400).send({error:"Şifre Yanlış"})
      });
    }).catch((err) => {
      return res.status(404).send({error:"kullanıcı Bulunamadı"})
    });
  } catch (error) {
    return res.status(500).send({error})
  }
  
}