const http = require("http");
http
  .createServer((reg, res) => {
    if (reg.url == "/giris") res.write("Giris sayfasindasiniz");
    res.end();
  })
  .listen(8080);
