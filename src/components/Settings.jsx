import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="settings-option">
        <label>Change Username:</label>
        <input type="text" placeholder="Enter new username" />
      </div>
      <div className="settings-option">
        <label>Change Password:</label>
        <input type="password" placeholder="Enter new password" />
      </div>
      <div className="settings-option">
        <button>Save Changes</button>
      </div>
    </div>
  );
};

export default Settings;
