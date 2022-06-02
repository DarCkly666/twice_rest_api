const verifySuperuser = (req, res, next) => {
  const { user } = req;
  if (user.role !== 1) {
    return res.status(401).json({
      error: true,
      message: "You are not authorized to perform this action",
    });
  }
  next();
};

module.exports = verifySuperuser;
