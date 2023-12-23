"use client";
import ProfileNavBar from "@/components/ui/ProfileNavBar";
import { useSession } from "next-auth/react";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function layout({ children }) {
  const { data: session, status } = useSession();
  useLayoutEffect(() => {
    if (status === "authenticated") {
      return;
    }
    if (status === "unauthenticated") {
      return redirect("/login");
    }
  }, [status]);

  return (
    <>
      <main className='max-w-6xl mx-auto p-4 grid grid-cols-2 gap-4'>
        <ProfileNavBar />
        {children}
      </main>
    </>
  );
}
