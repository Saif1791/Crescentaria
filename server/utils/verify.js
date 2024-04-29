import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
  const access_token = req.cookies.access_token;

  if (!access_token) {
    return res.status(401).json("Unauthorized!");
  }

  jwt.verify(access_token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(res.json(err));

    req.user = user;
    next();
  });
};
