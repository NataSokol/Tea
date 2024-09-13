const router = require("express").Router();
const CommentServices = require("../services/CommentServices");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const { userId, teaId, comm } = req.body;
    const newComm = await CommentServices.addComment({
      userId,
      teaId,
      comm,
    });
    res.status(201).json({ message: "Success", newComm });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:userId/:commId", verifyAccessToken, async (req, res) => {
  try {
    const { userId, commId } = req.params;

    const comm = await CommentServices.deleteComment(commId, userId);
    if (comm) {
      res.status(200).json({ message: "Success delete" });
      return;
    }
    res
      .status(400)
      .json({ message: "You can't delete someone else's comment!" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
