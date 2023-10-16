const fsPromises = require("fs").promises;

const { log } = require("console");
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
// To Delete
    // await fsPromises.unlink(
    //   path.join(__dirname, "files", "starter.txt"),
    //   "utf8"
    // );

    // To Write File
    await fsPromises.writeFile(
      path.join(__dirname, "files", "index.txt"),
      data
    );

    // To Append File
    await fsPromises.appendFile(
      path.join(__dirname, "files", "index.txt"),
      "\n\nHello How Are You Doing"
    );

    // To Rename File
    await fsPromises.rename(
      path.join(__dirname, "files", "index.txt"),
      path.join(__dirname, "files", "name.txt")
    );

    
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "name.txt"),
      "utf8"
    );

    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();
