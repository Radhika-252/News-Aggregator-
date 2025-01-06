const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: String,
  summary: String,
  content: String,
  imageUrl: String,
  source: String,
  category: String,
  publishedAt: Date,
});

module.exports = mongoose.model('News', newsSchema);
