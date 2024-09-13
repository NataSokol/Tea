const { Comment } = require("../db/models");

class CommentServices {
  static async addComment({ userId, teaId, comm } = {}) {
    try {
      const comment = await Comment.create({
        userId,
        teaId,
        comm,
      });
      return comment.get();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getCommentsByTeaId(teaId) {
    try {
      const comments = (await Comment.findAll({ where: { teaId } })).map((el) =>
        el.get()
      );
      return comments;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteComment(commId, userId) {
    try {
      const comment = await Comment.findOne({ where: { id: commId, userId } });
      if (comment) {
        return comment.destroy();
      }
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = CommentServices;
