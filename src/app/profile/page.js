"use client";
import UserProfile from "@/components/layout/UserProfileComponent";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className='mt-20'>
        Profile Page
        {status === "authenticated" && (
          <>
            {" "}
            <div>Hello, {session.user.name}</div>
            <UserProfile
              backgroundImg='https://images.pexels.com/photos/7873222/pexels-photo-7873222.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
              profileImg='https://images.pexels.com/photos/16843611/pexels-photo-16843611/free-photo-of-portrait-of-a-young-boy-with-flower-shadows-on-his-face.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
              userName='John Doe'
              userDescription='A brief description about John Doe A brief description about John Doe A brief description about John Doe A brief description about John Doe A brief description about John Doe.'
            />{" "}
          </>
        )}
      </div>
    </>
  );
}
