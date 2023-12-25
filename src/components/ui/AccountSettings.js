"use client";
import React, { useState } from "react";

const AccountSettings = () => {
  const [settings, setSettings] = useState({
    followMe: false,
    notifications: false,
    textMessages: false,
    tagging: false,
    sound: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Current Settings:", settings);
  };

  const toggleSetting = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <form className='max-w-xl mx-auto p-5' onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold mb-4'>Account Settings</h1>
      <div className='space-y-6'>
        {Object.entries(settings).map(([key, value]) => (
          <ToggleSetting
            key={key}
            label={`Enable ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
            description={`This is a description for ${key
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}.`}
            isEnabled={value}
            onToggle={() => toggleSetting(key)}
          />
        ))}
      </div>
      <button
        type='submit'
        className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
      >
        Save Changes
      </button>
    </form>
  );
};

const ToggleSetting = ({ label, description, isEnabled, onToggle }) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-col'>
        <span className='font-medium text-gray-700'>{label}</span>
        <span className='text-sm text-gray-500'>{description}</span>
      </div>
      <label className='switch'>
        <input
          type='checkbox'
          checked={isEnabled}
          onChange={onToggle}
          className='sr-only'
        />
        <div
          className={`block w-14 h-8 rounded-full ${
            isEnabled ? "bg-green-400" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            isEnabled ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};

export default AccountSettings;
