import React from "react";

import Link from "next/link";

export default function ProfileNavBar() {
  return (
    <div className='mt-20 mr-4'>
      <nav className='flex flex-col items-center justify-center h-full space-y-4 bg-gray-100 p-4 w-full md:max-w-xs rounded-md shadow-md'>
        <Link
          href='/profile/basic-info'
          className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Basic info
        </Link>
        <Link
          href='/profile/account-settings'
          className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Account
        </Link>
        <Link
          href='/profile/change-password'
          className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          Change Password
        </Link>
        <Link
          href='/profile/my-interest'
          className='text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1'
        >
          My Interests
        </Link>
      </nav>
    </div>
  );
}
