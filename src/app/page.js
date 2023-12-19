import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default function Home() {
  return (
    <main className='container mx-auto p-4'>
      <h1 className='text-6xl font-bold text-center'>Connect Cues App</h1>
      <div>How can we help you connect today?</div>
    </main>
  );
}
