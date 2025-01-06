const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.getAllNews);
router.get('/category/:category', newsController.getNewsByCategory);
router.get('/:id', newsController.getArticleDetails);

module.exports = router;
