const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    //html read

    // fs.readFile("./example.html", (err, data) => {
    //  res.writeHead(200, {'Content-Type': 'text/html'})
    //   res.write(data);
    //   res.end();
    // });

    //metin txt read

    // fs.readFile("./metin.txt", (err, data) => {
    //   res.writeHead(200, { "Content-Type": "text/plain" });
    //   res.write(data);
    //   res.end();
    // });

    // metin txt'ye add

    fs.appendFile("./program.txt", "baska dil ekledim", (err) => {
      if (err) throw err;
      console.log("Kaydedildi..");
      res.end();
    });
  })
  .listen(8080);
