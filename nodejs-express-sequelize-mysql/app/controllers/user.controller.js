// Controller for testing Authorization

exports.allAccess = async (req, res, next) => {
  try {
    res.status(200).send("Public Content.");
  } catch (err) {
    next(err);
  }
};

exports.userBoard = async (req, res, next) => {
  try {
    res.status(200).send("User Content.");
  } catch (err) {
    next(err);
  }
};