const UserController = require("../../app/controllers/user.controller");

const httpMocks = require("node-mocks-http");

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("UserController.allAccess", () => {
  it("should have a allAccess function", () => {
    expect(typeof UserController.allAccess).toBe("function");
  });

  it("should return 200 response code", async () => {
    await UserController.allAccess(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
});

describe("UserController.userBoard", () => {
  it("should have a userBoard function", () => {
    expect(typeof UserController.userBoard).toBe("function");
  });

  it("should return 200 response code", async () => {
    await UserController.userBoard(req, res, next);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
  });
});

