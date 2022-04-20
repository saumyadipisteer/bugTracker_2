const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "/data/user.json"));
const middlewares = jsonServer.defaults();
const fs = require("fs");
const userController = require("./src/app");
const port = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.post("/user", userController.user);
server.post("/createUser", userController.createUser);
server.post("/report", (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "/data/reports.json"),
    "utf8",
    (err, data) => {
      const reports = JSON.parse(data)?.reports;
      reports.push(req.body);
      fs.writeFile(
        path.join(__dirname, "/data/reports.json"),
        JSON.stringify({ reports: reports }),
        (err) => {
          if (err) {
            return res.send({
              status: "Ok",
              statuCode: 404,
              message: "Database not found...",
            });
          } else {
            return res.send({
              status: "Ok",
              statuCode: 200,
              message: "New report created.",
            });
          }
        }
      );
    }
  );

  return res.send({
    status: "OK",
    statusCode: 200,
    message: "New report received!",
  });
});

server.use(router);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
