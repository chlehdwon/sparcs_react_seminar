import React, { useEffect, useState } from 'react';
import './App.css';
import Feed from './Feed';

// call `await api()` to get data
import api from './api';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [feeds, setFeeds] = useState([]);
  const getData = async () => {
    const data = await api();
    console.log(data);
    setFeeds(data);
    setLoading(false);
  };
  useEffect(getData, []);
  return (
    <div className="App">
      <h1>Feed</h1>
      {loading ? (
        <p>Loading......</p>
      ) : (
        feeds.map((feed) => <Feed title={feed.title} content={feed.content} key={feed.title} />)
      )}
    </div>
  );
};

export default App;
