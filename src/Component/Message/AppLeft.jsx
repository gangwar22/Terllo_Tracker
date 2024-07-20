// AppLeft.js
import React from 'react';

const AppLeft = () => (
  <div className="app-left">
    <div className="app-left-header">
      <div className="app-logo">
        {/* SVG logo here */}
      </div>
      <h1>QuickChat</h1>
    </div>
    <div className="app-profile-box">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="profile" />
      <div className="app-profile-box-name">
        Pam Beesly Halpert
        <button className="app-setting">
          {/* SVG settings icon here */}
        </button>
      </div>
      <p className="app-profile-box-title">UI Designer</p>
      <div className="switch-status">
        <input type="checkbox" name="switchStatus" id="switchStatus" checked />
        <label className="label-toggle" htmlFor="switchStatus"></label>
        <span className="toggle-text toggle-online">Online</span>
        <span className="toggle-text toggle-offline">Offline</span>
      </div>
    </div>
    <div className="app-profile-box">
    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80" alt="profile" />
      <div className="app-profile-box-name">
        Pam Beesly Halpert
        <button className="app-setting">
          {/* SVG settings icon here */}
        </button>
      </div>
      <p className="app-profile-box-title">UI Designer</p>
      <div className="switch-status">
        <input type="checkbox" name="switchStatus" id="switchStatus" checked />
        <label className="label-toggle" htmlFor="switchStatus"></label>
        <span className="toggle-text toggle-online">Online</span>
        <span className="toggle-text toggle-offline">Offline</span>
      </div>
    </div>
    <div className="chat-list-wrapper">
      {/* Chat list for archived conversations */}
    </div>
  </div>
);

export default AppLeft;
