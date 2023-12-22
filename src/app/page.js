import Features from "@/components/layout/Features";
import HeroSection from "@/components/layout/Hero";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";

export default function Home() {
  return (
    <main className='container mx-auto text-center p-4 '>
      <HeroSection />
      <Features />
    </main>
  );
}
