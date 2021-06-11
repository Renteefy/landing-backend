const http = require("http");
const app = require("./server").app;

const server = http.createServer(app);

server.listen(4000);
console.log("Active");
