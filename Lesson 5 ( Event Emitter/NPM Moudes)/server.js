const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents"); //import event module

const EventEmitter = require("events");

const { log } = require("console");
class MyEmitter extends EventEmitter {} // taken directly from the docs

const PORT = process.env.PORT || 3000;

// initialize object

const myEmitter = new MyEmitter();
myEmitter.on("log", (msg, filename) => logEvents(msg, filename))
const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf8" : ""
    );

    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "content-Type": contentType,
    });
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    );
  } catch (err) {
    console.error(err);
    MyEmitter.emit("log", `${err.name} : ${err.message}, "errLog.txt`)
    response.statusCode = 500;
    response.end();
  }
};

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  myEmitter.emit("log", `${req.url}\t${req.method}, "reqLog.txt"`)

  // setting the content-type

  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javaScript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
    default:
      contentType = "text/html";
  }
  // setting the file path
  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : path.join(__dirname, req.url);

  // makes .html extension not required in the browser
  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";
  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
    // console.log(path.parse(filePath));

    switch (path.parse(filePath).base) {
      case "old-page.html":
        res.writeHead(301, { "location:": "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { location: "/" });
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }

  // contentType = extension === ".css" ? "text/css"
  // : extension === ".js" ? "text/javaScript"
  // : extension === ".json" ? "application/json"
  // : extension === ".jpg" ? "image/jpg"
  // : extension === ".png" ? "image/png"
  // : extension === ".txt" ? "text/plain"
  // : "text/html";
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));

// add listener for the log event
// myEmitter.on("log", (msg) => {
//   logEvents(msg);
// });

// setTimeout(() => {
//   myEmitter.emit("log", "Log event emitted!");
// }, 2000);
