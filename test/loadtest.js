const loadtest = require("loadtest");
const options = {
  url: "http://localhost:4000/email/registerEmail",
  maxRequests: 40000,
  concurrency: 10000,
  method: "POST",
  contentType: "application/json",
  body: {
    email: "testobject_1@signup2.com",
  },
};
loadtest.loadTest(options, function (error, result) {
  if (error) {
    return console.error("Got an error: %s", error);
  }
  console.log("Tests run successfully", result);
});
