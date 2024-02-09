import express from "express";
import { addPerson } from "../controller/Person.Control.js";


const route = express.Router();

route.post('/person', addPerson)
export default route