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
    <div>
      <h3>Your Interests</h3>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <form onSubmit={handleAddInterest}>
        <input
          type='text'
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
          placeholder='Add new interest'
        />
        <button type='submit'>Add Interest</button>
      </form>
    </div>
  );
}

export default AddInterestForm;
