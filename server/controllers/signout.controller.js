export const signoutController = (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(201).json("Logged out successfully!");
  } catch (err) {
    console.log(err);
  }
};
