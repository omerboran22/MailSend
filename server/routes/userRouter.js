import {Router} from "express";
import * as userController from "../controller/userController.js";

const router=Router();

router.get("/",(req,res)=>res.send("Get İşlemi Olmuyor"))
router.post("/register",userController.register)
router.post("/login",userController.verifyUser,userController.login)

export default router;

