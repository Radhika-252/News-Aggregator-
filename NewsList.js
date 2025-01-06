import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then((response) => setArticles(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <img src={article.imageUrl} alt={article.title} />
          <h3>{article.title}</h3>
          <p>{article.summary}</p>
          <Link to={`/news/${article._id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
