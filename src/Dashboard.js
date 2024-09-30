import React from 'react';
import './Dashboard.css'; // Make sure this file contains the necessary styles

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h2>Intrusion Detection System</h2>
        <ul>
          <li>Overview</li>
          <li>Alerts</li>
          <li>Statistics</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="dashboard-main">
        <h1>Dashboard Overview</h1>
        <div className="dashboard-grid">
          
          {/* Widget 1: Human Detection with Bounding Box */}
          <div className="dashboard-widget human-detection">
            <h2>Human Detection 1</h2>
            <div className="bounding-box">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Human Detection with Bounding Box"
                className="bounding-box-img"
              />
              <p>Detected Humans: 2</p>
            </div>
          </div>
          
          {/* Widget 2: Human Detection Statistics */}
          <div className="dashboard-widget human-detection">
            <h2>Human Detection 2</h2>
            <div className="bounding-box">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Human Detection with Bounding Box"
                className="bounding-box-img"
              />
              <p>Detected Humans: 2</p>
            </div>
          </div>

          {/* Widget 3: Recent Alerts */}
          <div className="dashboard-widget human-detection">
            <h2>Human Detection 3</h2>
            <div className="bounding-box">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Human Detection with Bounding Box"
                className="bounding-box-img"
              />
              <p>Detected Humans: 2</p>
            </div>
          </div>

          {/* Widget 4: Live Feed Placeholder */}
          <div className="dashboard-widget human-detection">
            <h2>Human Detection 4</h2>
            <div className="bounding-box">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Human Detection with Bounding Box"
                className="bounding-box-img"
              />
              <p>Detected Humans: 2</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
