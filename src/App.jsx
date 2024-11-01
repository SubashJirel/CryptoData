import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Button from '@mui/material/Button';
import Home from './pages/Home';
import Header from './components/header';
import WatchList from './pages/WatchList';
import Dashboard from './pages/Dashboard';

function App() {
  const [count, setCount] = useState(0);
  const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
  const url = 'https://api.coingecko.com/api/v3/ping';
  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data) {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [count]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
