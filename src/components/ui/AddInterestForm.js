"use client";
import React, { useState } from "react";

function AddInterestForm() {
  const [interests, setInterests] = useState([
    "Cycling",
    "Photography",
    "Shopping",
    "Eating",
  ]);
  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = (e) => {
    e.preventDefault();
    if (newInterest) {
      setInterests([...interests, newInterest]);
      setNewInterest("");
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h3>Your Interests</h3>
      <ul className='flex flex-wrap gap-2 mt-2'>
        {interests.map((interest, index) => (
          <li
            className='inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'
            key={index}
          >
            {interest}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddInterest}>
        <input
          type='text'
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder='Add new interest'
          className='border border-gray-300 rounded-md p-2 w-full mb-4'
        />
        <button
          type='submit'
          className='mt-4 w-full bg-gray-900 text-white rounded-full py-2 px-4 hover:bg-gray-500 p-1.5'
        >
          Add Interest
        </button>
      </form>
    </div>
  );
}

export default AddInterestForm;
