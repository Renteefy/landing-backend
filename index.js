const http = require("http");
const app = require("./server").app;

const server = http.createServer(app);

require("dotenv").config();
server.listen(4000);
console.log("Active @ 4000");
