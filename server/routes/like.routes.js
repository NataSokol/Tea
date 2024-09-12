
const likeRouter = require('express').Router();
const LikeServices = require('../services/Like.services')


likeRouter.post('/', async (req, res) => {
  try {
    const { userId, teaId } = req.body;
    const newLike = await LikeServices.createLike({
      userId, teaId
    });
    res.status(201).json({ message: 'success', newLike });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
likeRouter.delete('/:userId/:teaId', async (req, res) => {
  try {
    const { userId, teaId } = req.params;
    const deleteLike=await LikeServices.deleteLike(userId, teaId)
    deleteLike ? res.sendStatus(200) : res.sendStatus(404);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = likeRouter;
