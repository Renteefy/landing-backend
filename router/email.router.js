const emailRouter = require("express").Router();
const { registerEmail } = require("../controller/email.controller.js");
emailRouter.post("/registerEmail", registerEmail);

module.exports = { emailRouter };
