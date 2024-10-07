const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};

module.exports.checkAdmin = function (req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied: Admins only" });
  }

  next();
};
