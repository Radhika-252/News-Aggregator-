const News = require('../models/News');

// Get all news articles
exports.getAllNews = async (req, res) => {
  try {
    const articles = await News.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news articles', error: err });
  }
};

// Get news by category
exports.getNewsByCategory = async (req, res) => {
  try {
    const articles = await News.find({ category: req.params.category });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching news articles by category', error: err });
  }
};

// Get single article details
exports.getArticleDetails = async (req, res) => {
  try {
    const article = await News.findById(req.params.id);
    res.json(article);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching article details', error: err });
  }
};
