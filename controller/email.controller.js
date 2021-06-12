const { connectMongo, getMongoClient } = require("./dbConfig");
connectMongo();
const validator = require("validator");

const registerEmail = async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  if (!validator.isEmail(email))
    return res.send({ statusCode: 400, message: "bad format" });
  const client = getMongoClient();
  const Email = client.collection("emails");
  const emailExists = await Email.findOne({ email: email });
  if (emailExists) return res.send({ message: "redundant", statusCode: 400 });
  const doc = await Email.insertOne({ email: email });
  if (doc) return res.send({ message: "sucess", statusCode: 200 });
  return res.send({ statusCode: 500, message: "failed" });
};

module.exports = { registerEmail };
