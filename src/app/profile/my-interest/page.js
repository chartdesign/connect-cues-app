"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import AddInterestForm from "@/components/ui/AddInterestForm";

const page = () => {
  const { data: session, status } = useSession();
  return (
    <main className='mt-20'>
      {status === "authenticated" && <div>Hello, {session.user.name}</div>}
      <AddInterestForm />
    </main>
  );
};

export default page;
