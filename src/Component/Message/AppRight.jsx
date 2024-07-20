// AppRight.js
import React from 'react';

const AppRight = () => (
  <div className="app-right">
    <div className="app-profile-box">
      <img src="https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="profile" />
      <p className="app-profile-box-title name">
        {/* SVG user icon here */}
        Dwight Scrute
      </p>
      <p className="app-profile-box-title mail">
        {/* SVG mail icon here */}
        dwightscrute@test.com
      </p>
      <button className="archive-btn">
        Archive
        {/* SVG archive icon here */}
      </button>
    </div>
  </div>
);

export default AppRight;
