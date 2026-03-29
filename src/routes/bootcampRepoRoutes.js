const express = require('express');
const router = express.Router();
const bootcampRepoController = require('../controllers/bootcampRepoController');

router.get('/', bootcampRepoController.getAll);
router.post('/', bootcampRepoController.create);
router.get('/:slug', bootcampRepoController.getBySlug);

module.exports = router;