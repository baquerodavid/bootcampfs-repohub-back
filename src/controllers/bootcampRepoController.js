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
  async getBySlug(req, res) {
    try {
      const slugUrl = req.params.slug;
      const repo = await BootcampRepo.findOne({slug: slugUrl});
      res.json(repo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = bootcampRepoController;