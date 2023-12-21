const jwt = require("jsonwebtoken");
require("dotenv").config();

function checkToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json((message = "Không tìm thấy token"));
  }
  jwt.verify(token, process.env.JWT_KEY, (err, data) => {
    if (err) {
      return res.status(403).json((message = "lỗi token"));
    }

    if (data.role != 1) {
      return res.status(403).json((message = "bạn không có quyền"));
    }
    next();
  });
}

module.exports = checkToken;
