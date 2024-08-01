let fs = require("fs");
let http = require("http");
let data = fs.readFileSync("./dev-data/data.json", "utf-8");
console.log(data);
let jsonData = JSON.parse(data);
// console.log(jsonData[0]);

let server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === "/hello") {
    res.writeHead(501, {
      "content-type": "text/html",
      ownheader: "helo",
    });
    res.end("<h1>helo world</h1>");
  } else {
    res.writeHead(200, {
      "Content-type": "application/json",
      ownheader: "helo",
    });
    res.end(data);
  }
});

server.listen(7000, "127.0.0.1", function () {
  console.log("server is active in port 7000..");
});
