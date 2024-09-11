const router = require("express").Router();
const bcrypt = require("bcrypt");
const generateTokens = require("../utils/authUtils");
const jwtConfig = require("../config/jwtConfig");
const UserServices = require("../services/UserServices");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, avatar } = req.body;
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      avatar.trim() === ""
    ) {
      console.log("Fill in all fields!");
      return;
    }
    let user = await UserServices.getUserByEmail(email);

    if (user === null) {
      user = await UserServices.addUser({
        name,
        email,
        password: await bcrypt.hash(password, 8),
        avatar,
        isAdmin: false,
      });
      delete user.password;
      const { accessToken, refreshToken } = generateTokens({ user });
      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        })
        .json({ message: "success", user, accessToken });
      return;
    }
    res.status(400).json({ message: "User already exists!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === "" || password.trim() === "") {
      console.log("Fill in all fields!");
      return;
    }
    const user = await UserServices.getUserByEmail(email);
    console.log(user);

    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        delete user.password;
        const { accessToken, refreshToken } = generateTokens({ user });
        res
          .status(200)
          .cookie(jwtConfig.refresh.type, refreshToken, {
            httpOnly: true,
            maxAge: jwtConfig.refresh.expiresIn,
          })
          .json({ message: "Entry completed!", user, accessToken });
        return;
      }
    }
    res.status(400).json({ message: "Email or password is not correct!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/logout", (req, res) => {
  try {
    res.locals.user = null;
    res
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "Success log out!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
