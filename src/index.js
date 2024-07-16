import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Home from './pages/Home';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
