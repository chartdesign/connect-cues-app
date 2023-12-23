"use client";
import React, { useState } from "react";

function HandlePreferencesForm() {
  const [preferences, setPreferences] = useState({
    sendNotifications: false,
    sendTextMessages: false,
    receivePrivateMessages: false,
    allowTagging: false,
  });

  const handleChange = (e) => {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(preferences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type='checkbox'
            name='sendNotifications'
            checked={preferences.sendNotifications}
            onChange={handleChange}
          />
          Send Notifications
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='sendTextMessages'
            checked={preferences.sendTextMessages}
            onChange={handleChange}
          />
          Send Text Messages
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='receivePrivateMessages'
            checked={preferences.receivePrivateMessages}
            onChange={handleChange}
          />
          Receive Private Messages
        </label>
      </div>
      <div>
        <label>
          <input
            type='checkbox'
            name='allowTagging'
            checked={preferences.allowTagging}
            onChange={handleChange}
          />
          Allow Friends to Tag in Posts
        </label>
      </div>
      <button type='submit'>Save Preferences</button>
    </form>
  );
}

export default HandlePreferencesForm;
