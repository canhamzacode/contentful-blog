import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl">Welcome to My Blog</h1>
      <p>
        This is a simple blog built with Next.js and Contentful. The goal was to play around with contentful nothing serious.
      </p>
      <div className="flex">
        <p>Bult By: </p>
        <Link href="/posts" className="underline">
          CanHamzaCode
        </Link>
      </div>
    </div>
  );
}
