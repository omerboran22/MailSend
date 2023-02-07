import express from "express";
import {getCustomers,createCustomers} from "../controller/customers.js"

const router=express.Router();

router.get("/",getCustomers);
router.post("/",createCustomers);

export default router;