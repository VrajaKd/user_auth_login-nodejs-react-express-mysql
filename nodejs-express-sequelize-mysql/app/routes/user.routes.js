const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // determine how the server will response for GET /api/test/all
  app.get("/api/test/all", controller.allAccess);

  // determine how the server will response for GET /api/test/user
  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );
};