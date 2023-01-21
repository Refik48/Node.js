let http = require("http");
let myModule = require("./myModul");

http
  .createServer((req, res) => {
    res.end("Instant date information : " + myModule.instantDate());
  })
  .listen(8090);
