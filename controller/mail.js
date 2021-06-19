const fetch = require("node-fetch");
const SibApiV3Sdk = require("sib-api-v3-sdk");

let htmltemplateWelcome = `
<img src="https://imgur.com/SXFPS3Z.png">
Hey there,
<br>

Welcome to Renteefy. We are pumped to have you on board! Thank you for signing up and showing interest in this product.
We are currently in pre-development stages of the app and are looking forward working hard to a successful future. You are a part of the success. We have a blog coming up soon. So stay tuned!

<br>

Thanks again,
<br>
Renteefy.
`;

let defaultClient = SibApiV3Sdk.ApiClient;
defaultClient = defaultClient.instance;

let apiKey = defaultClient.authentications["api-key"];

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

async function createContact(email) {
  const url = "https://api.sendinblue.com/v3/contacts";
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": process.env.APIKEY,
    },
    body: JSON.stringify({ email: email, updateEnabled: false }),
  };
  const res = await fetch(url, options);
  return res.json();
}

async function sendWelcome(email) {
  apiKey.apiKey = process.env.APIKEY;
  sendSmtpEmail.subject = "Welcome to Renteefy";
  sendSmtpEmail.htmlContent = htmltemplateWelcome;
  sendSmtpEmail.sender = {
    name: "Renteefy",
    email: "renteefy@gmail.com",
  };
  sendSmtpEmail.to = [{ email: email }];
  // sendSmtpEmail.cc = [{ email: "example2@example2.com", name: "Janice Doe" }];
  // sendSmtpEmail.bcc = [{ email: "John Doe", name: "example@example.com" }];
  // sendSmtpEmail.replyTo = { email: "replyto@domain.com", name: "John Doe" };
  //sendSmtpEmail.headers = { "Some-Custom-Name": "unique-id-1234" };
  sendSmtpEmail.params = {
    parameter: "My param value",
    subject: "New Subject",
  };
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(
        "API called successfully. Returned data: " + JSON.stringify(data)
      );
    },
    function (error) {
      console.error(error);
    }
  );
}

module.exports = { createContact, sendWelcome };
