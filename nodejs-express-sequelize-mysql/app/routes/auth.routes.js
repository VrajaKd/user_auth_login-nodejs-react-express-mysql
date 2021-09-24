const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // determine how the server will response for POST /api/auth/signup
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

  // determine how the server will response for POST /api/auth/signin
  app.post("/api/auth/signin", controller.signin);
};