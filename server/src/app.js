const fs = require("fs");
const path = require("path");

// checks if user exists or not
module.exports.user = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/user.json"),
    "utf8",
    (err, data) => {
      const users = JSON.parse(data)?.userData;
      const isExist = users.filter((user) => {
        return (
          user.username === req.body.username &&
          user.password === req.body.password
        );
      }).length;

      if (isExist) {
        return res.send({
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
        return res.send({
          status: "Ok",
          statuCode: 401,
          message: "Wrong username or password",
          body: {
            user: req.body.username,
            loggedIn: false,
            errorMessage: "Wrong username or password",
            hasError: true,
          },
        });
      }
    }
  );
};

// Creates new user
module.exports.createUser = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/user.json"),
    "utf8",
    (err, data) => {
      const users = JSON.parse(data)?.userData;

      const isExist = users.filter((user) => {
        return user.username === req.body.username;
      }).length;

      if (!isExist) {
        users.push(req.body);
        fs.writeFile(
          path.join(__dirname, "../data/user.json"),
          JSON.stringify({ userData: users }),
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
                message: "New user account created!",
              });
            }
          }
        );
      } else {
        return res.send({
          status: "Ok",
          statuCode: 409,
          message: "Username already exist!",
        });
      }
    }
  );
};

module.exports.createReports = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/reports.json"),
    "utf8",
    (err, data) => {
      const reports = JSON.parse(data)?.reports;
      reports.push(req.body);
      fs.writeFile(
        path.join(__dirname, "../data/reports.json"),
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
 
 next();
};

module.exports.getAllReports = (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "../data/reports.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send({
          status: "Ok",
          statuCode: 200,
          message: "Database not found",
          payload: []
        });
      } else {
        const reports = JSON.parse(data)?.reports;
        return res.send({
          status: "Ok",
          statuCode: 200,
          message: "All reports fetched!",
          payload: reports,
        });
      }
    }
  );
}

module.exports.updateReport = (req,res,next)=>{
  fs.readFile(
    path.join(__dirname, "../data/reports.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send({
          status: "Ok",
          statuCode: 200,
          message: "Database not found",
          payload: []
        });
      } else {
        const reports = JSON.parse(data)?.reports;
        reports[req.body?.index] = req.body?.data
        fs.writeFile(
          path.join(__dirname, "../data/reports.json"),
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
                message: "Report updated!",
              });
            }
          }
        )
      }
    }
  );
}

module.exports.deleteReports = (req,res,next)=>{
  fs.readFile(
    path.join(__dirname, "../data/reports.json"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.send({
          status: "Ok",
          statuCode: 200,
          message: "Database not found",
          payload: []
        });
      } else {
        const reports = JSON.parse(data)?.reports;
        reports.splice(req.body?.index,1)
        
        
        fs.writeFile(
          path.join(__dirname, "../data/reports.json"),
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
                message: "Report updated!",
              });
            }
          }
        )
      }
    }
  );
}
