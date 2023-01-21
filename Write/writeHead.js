const http = require("http");
const url = require("url");
// var ornekAdress = "http://localhost:8080/login?name:Ahmet&surname=ack";

// var q = url.parse(ornekAdress,true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// var qdata = q.query;
// console.log(qdata.name);
// console.log(qdata.surname);
http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("Hello NodeJS");
    var q =url.parse(req.url,true);
    res.write(q.pathname);
    res.end();
  })
  .listen(8080);
