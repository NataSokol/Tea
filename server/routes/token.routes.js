const verifyRefreshToken = require("../middleware/verifyRefreshToken");
const generateTokens = require("../utils/authUtils");
const jwtConfig = require("../config/jwtConfig");
const router = require("express").Router();

router.get("/refresh", verifyRefreshToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { accessToken, refreshToken } = generateTokens({ user });
    res
      .status(200)
      .cookie(jwtConfig.refresh.type, refreshToken, {
        httpOnly: true,
        maxAge: jwtConfig.refresh.expiresIn,
      })
      .json({ message: "success", user, accessToken });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
