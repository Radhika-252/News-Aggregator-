import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsList from './components/NewsList';
import ArticleDetails from './components/ArticleDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <SearchBar />
      <Switch>
        <Route path="/" exact component={NewsList} />
        <Route path="/news/:id" component={ArticleDetails} />
      </Switch>
    </Router>
  );
}

export default App;
