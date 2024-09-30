import React, { useState } from 'react';
import './Settings.css'; // Make sure to create this CSS file for styling

function Settings() {
  const [detectedPersons, setDetectedPersons] = useState([]);

  // Function to simulate detecting a person
  const handleDetectPerson = () => {
    const now = new Date();
    const timestamp = now.toLocaleString(); // Format date and time
    setDetectedPersons((prev) => [
      ...prev,
      { id: prev.length + 1, time: timestamp },
    ]);
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <button onClick={handleDetectPerson}>Detect Person</button>
      
      <div className="detection-log">
        <h2>Detection Log</h2>
        <ul>
          {detectedPersons.map((person) => (
            <li key={person.id}>
              Detected Person #{person.id} at {person.time}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Settings;
