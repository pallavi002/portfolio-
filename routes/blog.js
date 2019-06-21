const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogs/BlogController');

router.get('/', blogController.all);
router.get('/:id', blogController.show);

module.exports = router;
