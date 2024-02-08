import express from "express";
import { addUser } from "../controller/userControl.js";


const route = express.Router();

route.get('/add', addUser)
export default route