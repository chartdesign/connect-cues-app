"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";

import BasicInfoForm from "@/components/ui/BasicInfoForm";

const page = () => {
  const { data: session, status } = useSession();
  const user = session?.user.name;
  const email = session?.user.email;
  return (
    <main className='mt-20'>
      {status === "authenticated" && <div>Hello, {session.user.name}</div>}

      <BasicInfoForm userName={user} email={email} />
    </main>
  );
};

export default page;
