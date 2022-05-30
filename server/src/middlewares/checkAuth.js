const checkAuth = (req, res, next) => {
  console.log(req.session.user)
  if (!req.session.user) {
    return res.sendStatus(401);
  }
  return next();
};

module.exports = checkAuth;
