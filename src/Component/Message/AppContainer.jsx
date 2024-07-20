// AppContainer.js
// import React from 'react';
import AppLeft from './AppLeft';
import AppMain from './AppMain';
import AppRight from './AppRight';
import './AppContainer.css';




const AppContainer = () => (
  <div className="app-container">
    <AppLeft />
    <AppMain />
    <AppRight />
  </div>
);

export default AppContainer;
