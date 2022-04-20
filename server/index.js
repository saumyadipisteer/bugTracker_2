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
server.post("/report", userController.createReports);
server.get("/reports", userController.getAllReports);
server.post("/updateReport", userController.updateReport);
server.post("/deleteReport",userController.deleteReports);

server.use(router);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
