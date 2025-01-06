import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleDetails = ({ match }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/news/${match.params.id}`)
      .then((response) => setArticle(response.data))
      .catch((err) => console.log(err));
  }, [match.params.id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.content}</p>
      <p>{article.source}</p>
    </div>
  );
};

export default ArticleDetails;
