const contactRouter = require("express").Router();
const { raiseTicket } = require("../controller/contact.controller.js");
contactRouter.post("/raiseTicket", raiseTicket);

module.exports = { contactRouter };
