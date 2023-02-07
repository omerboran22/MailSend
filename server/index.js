import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import customerRoutes from "./routes/customers.js";
import userRoutes from "./routes/userRouter.js";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
const server=express();
dotenv.config();
app.set('base','/api');

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());
app.disable("x-powered-by");


app.use("/customers",customerRoutes)
app.use("/user",userRoutes)

server.use("/api/v1",app);
server.use(express.static(path.resolve(__dirname, '../client/build')));
server.use("/",function(req,res){
  res.sendFile(path.resolve(__dirname, 'client', 'build'));
})

const PORT=process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(()=>{
    server.listen(PORT,()=>{
      console.log(`server Runnig port ${PORT}`);
    })
  })
  .catch(Error=>console.log(Error))



