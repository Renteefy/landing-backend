const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

const { contactRouter } = require("./router/contact.router");
const { emailRouter } = require("./router/email.router");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 40,
});

const app = express();
app.use(morgan("dev"));
app.set("trust proxy", 1);
app.use(cors());
app.use(express.json());
app.use("/email", emailRouter);
app.use("/contact", contactRouter);

app.get("/", (req, res) => {
  res.send("Server online");
});

module.exports = { app };
