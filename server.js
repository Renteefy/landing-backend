const express = require("express");
const cors = require("cors");

const { contactRouter } = require("./router/contact.router");
const { emailRouter } = require("./router/email.router");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/email", emailRouter);
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Server online");
});

module.exports = { app };
