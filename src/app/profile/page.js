"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import ProfileNavBar from "@/components/ui/ProfileNavBar";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className='mt-20'>Profile Page</div>
      {status === "authenticated" && <div>Hello, {session.user.name}</div>}
    </>
  );
}
