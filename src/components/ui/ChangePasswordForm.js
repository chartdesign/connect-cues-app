"use client";
import React, { useState } from "react";

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <h2 className='text-lg font-bold leading-9 tracking-tight text-gray-900'>
        Change Password
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className='flex items-center justify-between'>
            <label
              htmlFor='oldPassword'
              className='block text-sm font-medium leading-6 text-gray-900'
            >
              Old password
            </label>
            <div className='text-sm'>
              <a
                href='#'
                className='font-semibold text-indigo-600 hover:text-indigo-500'
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className='mt-2'>
            <input
              id='oldPassword'
              name='oldPassword'
              type='password'
              autoComplete='current-password'
              placeholder='Old Password'
              required
              value={formData.oldPassword}
              onChange={handleChange}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <div className='flex items-center justify-between gap-4'>
          <div>
            <label htmlFor='newPassword'>New Password:</label>
            <input
              type='password'
              id='newPassword'
              name='newPassword'
              placeholder='New Password'
              value={formData.newPassword}
              onChange={handleChange}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
          <div>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={handleChange}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            />
          </div>
        </div>

        <button
          type='submit'
          className='mt-4 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto'
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
