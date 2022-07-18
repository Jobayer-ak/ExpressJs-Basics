const fs = require("fs");

exports.homeController = (req, res) => {
    // console.log(req.url)

    // const error = new Error("Bad Request");
    // error.status = 400

    // throw error;

    fs.readFile("./pages/index.html", (err, data) => {
      if (err) {
        console.log("Error: ", err);
        res.send("Something went wrong");
      } else {
        res.write(data);
        res.end();
      }
    });
  };


exports.aboutController = (req, res) => {
    res.send("From About Route");
  }


exports.contactController= (req, res) => {
    res.send("From Contact Route");
  }