import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout';
import Home from './pages/Home/index';
import Maps from './pages/Maps/index';
import NotFound from './pages/NotFound/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home/>} />
                <Route path='maps' element={<Maps />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
