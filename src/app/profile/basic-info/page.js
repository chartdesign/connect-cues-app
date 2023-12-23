"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import ChangePasswordForm from "@/components/ui/ChangePasswordForm";

const page = () => {
  const { data: session, status } = useSession();
  return (
    <main className='mt-20'>
      {status === "authenticated" && <div>Hello, {session.user.name}</div>}
      <ChangePasswordForm />
    </main>
  );
};

export default page;
