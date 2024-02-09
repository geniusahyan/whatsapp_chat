import express from "express";
import { addPerson, getPerson } from "../controller/Person.Control.js";
import { newMessage } from "../controller/message.controller.js";


const route = express.Router();

route.post('/person', addPerson);
route.get('/persons', getPerson);
route.post('/message/set', newMessage )
export default route