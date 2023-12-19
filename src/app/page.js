import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default function Home() {
  return (
    <main className='container mx-auto text-center p-4 '>
      <h1 className='md:text-6xl text-3xl font-bold '>Connect Cues App</h1>
      <div>How can we help you connect today?</div>
    </main>
  );
}
