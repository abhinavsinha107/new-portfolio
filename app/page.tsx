import HeroImage from "@/components/HeroImage";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home - Abhinav Sinha | FullStack Developer",
  description:
    "Welcome to the personal portfolio of Abhinav Sinha, a creative FullStack Developer producing great software.",
};
const Page = () => {
  return (
    <main className="min-h-screen px-4 py-12 sm:py-16 md:py-24 bg-background text-main-text flex flex-col justify-center items-center gap-6 md:flex-row md:gap-12 lg:gap-16 accent-dots">
      {/* Add corner glow effect */}
      <div className="corner-glow"></div>

      {/* Add constellation pattern */}
      <div className="constellation"></div>

      <div className="w-full md:w-1/2 flex flex-col justify-start items-center gap-5">
        <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-primary text-start">
          Always Out Of The Box!
        </h1>
        <HeroImage />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-highlight">
          Abhinav Sinha
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
          FullStack
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-highlight-secondary">
          Developer
        </p>
        <p className="text-sm sm:text-base md:text-lg max-w-lg mx-auto md:mx-0">
          I&apos;m Abhinav Sinha, a programmer who aims to produce and share{" "}
          <span
            // href="/works"
            className="link-color hover:link-hover ml-1 whitespace-nowrap"
          >
            {/* [great software ↗] */}
            great software
          </span>{" "}
          with the world.
        </p>
        <div className="flex flex-col justify-center items-baseline space-x-4">
          <Link
            href="/about"
            className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover"
          >
            - [Know About me ↗]
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~012566e3bcaf7370c4"
            target="_blank"
            className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover"
          >
            - [Upwork Profile ↗]
          </Link>
          <Link
            href="/contact"
            className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover"
          >
            - [Get in touch ↗]
          </Link>
          <Link
            href="/skill"
            className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover"
          >
            - [What i know ! ↗]
          </Link>
          <Link
            href="/story"
            className="px-3 py-2 rounded-md text-sm font-medium link-color hover:link-hover"
          >
            - [Know my story ↗]
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Page;
