const emailRouter = require("express").Router();
const {
  registerEmail,
  mailChimpPing,
} = require("../controller/email.controller.js");
emailRouter.post("/registerEmail", registerEmail);
emailRouter.get("/mailChimpPing", mailChimpPing);

module.exports = { emailRouter };
