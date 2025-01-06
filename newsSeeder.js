const axios = require('axios');
const News = require('../models/News');

const fetchNewsFromAPI = async () => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
    const articles = response.data.articles;

    articles.forEach(async (article) => {
      const newArticle = new News({
        title: article.title,
        summary: article.description,
        content: article.content,
        imageUrl: article.urlToImage,
        source: article.source.name,
        category: 'general',  // You can categorize your articles dynamically
        publishedAt: new Date(article.publishedAt),
      });

      await newArticle.save();
    });
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};

fetchNewsFromAPI();
