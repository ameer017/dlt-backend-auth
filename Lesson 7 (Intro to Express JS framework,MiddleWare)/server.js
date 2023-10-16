const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { logger } = require("./Middleware/logEvents");
const errorHandler = require("./Middleware/errHandler");
const PORT = process.env.PORT || 3100;

// BIULT IN
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// STATIC ROUTES
app.use(express.static(path.join(__dirname, "public")));

app.use(logger);

const whiteList = [
  "https://www.yourdomain.com",
  "http://127.0.0.1:3100",
  "http://localhost:3000",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORs"));
    }
  },
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// APP.ALL IS THE ROUTE HANDLER FOR ALL REQUESTS
app.all("*", (req, res) => {
  res.status(404); // It sets the response status to 404 using the  res.status  method.
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html")); // If the request accepts HTML, it sends a file named "404.html" using the  res.sendFile  method.
    //The file is located in the "views" directory, which is resolved using the  path.join  method.
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" }); //  If the request accepts JSON, it sends a JSON object with an error message using the  res.json  method.
  } else {
    res.type("txt").send("404 not Found"); // . If the request does not accept HTML or JSON, it sets the response content type to plain text using the  res.type  method and sends the message "404 not Found" using the  res.send  method.
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
