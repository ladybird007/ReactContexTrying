import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import {Route, Routes} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
      <AppHeader/>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/cart" element={<CartPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App;