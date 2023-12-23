"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import ChangePasswordForm from "@/components/ui/ChangePasswordForm";
import HandlePreferencesForm from "@/components/ui/HandlePreferencesForm";

const page = () => {
  const { data: session, status } = useSession();
  return (
    <>
      <section className='flex flex-col items-center justify-center mt-20 py-2 bg-gray-100 rounded-md shadow-md'>
        {status === "authenticated" && <div>Hello, {session.user.name}</div>}

        <h2 className='font-semibold'>Account settings</h2>

        <HandlePreferencesForm />
      </section>
    </>
  );
};

export default page;
