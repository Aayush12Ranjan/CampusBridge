import express from "express";
import { createcontact } from "../Controller/contact.controller.js";


const ContactRouter = express.Router();

ContactRouter.post("/create",createcontact);

export default ContactRouter;