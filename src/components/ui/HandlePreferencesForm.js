"use client";
import React, { useState } from "react";
import { Switch } from "@headlessui/react";

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
    <form onSubmit={handleSubmit} className='leading-6'>
      <div>
        <label>
          <input
            type='checkbox'
            name='sendNotifications'
            checked={preferences.sendNotifications}
            onChange={handleChange}
            className='mr-4'
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
            className='mr-4'
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
            className='mr-4'
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
            className='mr-4'
          />
          Allow Friends to Tag in Posts
        </label>
      </div>

      <button
        type='submit'
        className='mt-4 w-full bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-500'
      >
        Save Preferences
      </button>
    </form>
  );
}

export default HandlePreferencesForm;
