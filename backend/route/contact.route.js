import express from "express";
import { saveContact } from "../controller/contact.controller.js";

const router = express.Router();

// Route for saving contact form data
router.post("/contact", saveContact);

export default router;
