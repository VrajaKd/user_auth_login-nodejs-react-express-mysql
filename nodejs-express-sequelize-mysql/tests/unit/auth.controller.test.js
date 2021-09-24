const AuthController = require("../../app/controllers/auth.controller");
const db = require("../../app/models");
const User = db.user;

const httpMocks = require("node-mocks-http");
const newUser = require("../mock-data/new-user.json");

User.create = jest.fn();

let req, res, next;
// Create Mock 'http' objects for testing Express routing functions
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

// Test signup function
describe("AuthController.signup", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    req.body = newUser;
  });

  it("should have a signup function", () => {
    expect(typeof AuthController.signup).toBe("function");
  });

  it("should return 201 response code", async () => {
    await AuthController.signup(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body in response", async () => {
    User.create.mockReturnValue(newUser);
    await AuthController.signup(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newUser);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "password property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    User.create.mockReturnValue(rejectedPromise);
    await AuthController.signup(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});

// Test signin function
describe("AuthController.signin", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    req.body = newUser;
  });

  it("should have a signin function", () => {
    expect(typeof AuthController.signin).toBe("function");
  });
});
