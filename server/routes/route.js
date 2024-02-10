import express from "express";
import { addPerson, getPerson } from "../controller/Person.Control.js";
import { newMessage, getMessage } from "../controller/message.controller.js";
import { getConvMessage, newConvMessage } from "../controller/newConv.controller.js";


const route = express.Router();

route.post('/person', addPerson);
route.get('/persons', getPerson);
route.post('/message/set', newMessage )
route.post('/message/get',getMessage)
route.post('/message/new', newConvMessage )
route.get('/message/get/:id', getConvMessage )
export default route