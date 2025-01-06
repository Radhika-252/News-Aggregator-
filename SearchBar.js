import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`http://localhost:5000/api/news?query=${query}`);
    setResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for news..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map((article) => (
          <div key={article._id}>
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
