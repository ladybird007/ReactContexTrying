import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
  console.log(RestoService.getMenuItems());
  return (
    <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
      <AppHeader total={50}/>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="/cart" element={<CartPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default WithRestoService()(App);