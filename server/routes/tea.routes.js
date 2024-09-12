const teaRouter = require('express').Router();
const TeaServices = require('../services/Tea.services');
const uploadUtils = require('../utils/uploadUtils');

teaRouter.get('/', async (req, res) => {
  try {
    const tea = await TeaServices.getAllTea();
    res.status(200).json(tea);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

teaRouter.get('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const tea = await TeaServices.getOneTea(teaId);
    if (tea) {
      res.status(200).json({ message: 'success', tea });
    }
    res.status(400).json({ message: 'tea not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

teaRouter.post('/', uploadUtils.single('image'), async (req, res) => {
  try {
    const { title, place, img, description, comm } = req.body;
    const pathImages = '/img/' + req.file.filename;

    const newTea = await TeaServices.createTea({
      title,
      place,
      img: pathImages,
      description,
      comm,
    });
    res.status(201).json({ message: 'success', newTea });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

teaRouter.put('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const { title, place, img, description, comm } = req.body;

    const tea = await TeaServices.updateTea(teaId, {
      title,
      place,
      img,
      description,
      comm,
    });
    if (tea) {
      res.status(200).json({ message: 'success', tea });
      return;
    }
    res.status(400).json({ message: 'sea not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

teaRouter.delete('/:teaId', async (req, res) => {
  try {
    const { teaId } = req.params;
    const tea = await TeaServices.deleteTea(teaId);
    if (tea) {
      res.status(200).json({ message: 'success' });
      return;
    }
    res.status(400).json({ message: 'tea not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = teaRouter;
