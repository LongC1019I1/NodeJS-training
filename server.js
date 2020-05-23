const http = require("http");
const { crawlEmployees } = require("./crawl-employees");
const { loadEmployees } = require("./load-employees");

const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    switch (req.url) {
      case "/":
        res.end("Hello World!");
        return;
      case "/employees":
        let data = loadEmployees();
        if (data) {
          res.setHeader("Content-Type", "application/json");
          res.end(data);
        } else {
          res.statusCode = 500;
          res.end("Internal server error");
        }
        return;
    }
  } else if (req.method === "POST") {
    switch (req.url) {
      case "/crawl":
        let isOk = crawlEmployees();
        if (isOk) {
          res.end("Crawl successfully!");
        } else {
          res.end("Crawling fails!");
        }
        return;
    }
  }

  res.statusCode = 404;
  res.end("Not found");
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
