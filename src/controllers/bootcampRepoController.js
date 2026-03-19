const BootcampRepo = require('../models/BootcampRepo');

const bootcampRepoController = {
  async create(req, res) {
    try {
      const repo = await BootcampRepo.create(req.body)
      res.status(201).json(repo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getAll(req, res) {
    try {
      const repo = await BootcampRepo.find();
      res.json(repo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  },
  async getById(req, res) {
    try {
      const id = req.params._id;
      const repo = await BootcampRepo.findById(id);
      res.json(repo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = bootcampRepoController;