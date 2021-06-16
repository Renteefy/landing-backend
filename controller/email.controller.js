const { connectMongo, getMongoClient } = require("./dbConfig");
connectMongo();
const validator = require("validator");
const { createContact, sendWelcome } = require("./mail");

const registerEmail = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  if (!email) return res.send({ statusCode: 400, message: "badformat" });
  if (!validator.isEmail(email))
    return res.send({ statusCode: 400, message: "bad format" });
  const client = getMongoClient();
  const Email = client.collection("emails");
  const emailExists = await Email.findOne({ email: email });
  if (emailExists)
    return res.send({
      message: "redundant",
      statusCode: 400,
    });
  const doc = await Email.insertOne({ email: email });
  if (doc) {
    createContact(email);
    sendWelcome(email);
    return res.send({ message: "success", statusCode: 200 });
  }
  return res.send({
    statusCode: 500,
    message: "failed",
  });
};

const mailChimpPing = async (req, res) => {
  const response = await sendTransactionalTest();
  res.send(response);
};

module.exports = { registerEmail, mailChimpPing };
