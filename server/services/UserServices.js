const { User } = require("../db/models");

class UserServices {
  static async addUser({ name, email, password, avatar, isAdmin } = {}) {
    try {
      const user = await User.create({
        name,
        email,
        password,
        avatar,
        isAdmin,
      });
      return user.get();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUserByEmail(email) {
    try {
      const user = await User.findOne({ where: { email } }); 
      if (user) {
        return user;
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserServices;
