const fs = require("fs");
const path = require("path");

// checks if user exists or not
module.exports.user = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/user.json"),
    "utf8",
    (err, data) => {
      const users = JSON.parse(data)?.userData;
      if (users) {
        users.forEach((user) => {
          if (
            user.username === req.body.username &&
            user.password === req.body.password
          ) {
            res.send({
              status: "Ok",
              statuCode: 200,
              message: "Valid credentials!",
              body: {
                user: req.body.username,
                loggedIn: true,
                errorMessage: "No error",
                hasError: false,
              },
            });
          } else {
            res.send({
              status: "Ok",
              statuCode: 401,
              message: "Wrong username or password",
              body:{
                user: req.body.username,
                loggedIn: false,
                errorMessage: "Wrong username or password",
                hasError: true,
              }
            });
          }
        });
      } else {
        res.send({ status: "Ok", statuCode: 401, message: "No data exist" });
      }
    }
  );
};

// Creates new user
module.exports.createUser = (req, res, next) => {
  fs.readFile(path.join(__dirname, "/data/user.json"), "utf8", (err, data) => {
    const users = JSON.parse(data)?.userData;

    const isExist = users.filter((user) => {
      return user.username === req.body.username;
    }).length;

    if (!isExist) {
      users.push(req.body);
      fs.writeFile(
        path.join(__dirname, "/data/user.json"),
        JSON.stringify({ userData: users }),
        (err) => {
          if (err) {
            res.send({
              status: "Ok",
              statuCode: 404,
              message: "Database not found...",
            });
          } else {
            res.send({
              status: "Ok",
              statuCode: 200,
              message: "New user account created!",
            });
          }
        }
      );
    } else {
      res.send({
        status: "Ok",
        statuCode: 409,
        message: "Username already exist!",
      });
    }
  });
};
