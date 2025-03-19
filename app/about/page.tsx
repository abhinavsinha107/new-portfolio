import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Abhinav Sinha | FullStack Developer",
  description:
    "Learn more about Abhinav Sinha, a dedicated fullstack developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
  openGraph: {
    title: "About - Abhinav Sinha | FullStack Developer",
    description:
      "Learn more about Abhinav Sinha, a dedicated fullstack developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
    url: "https://abhinavsinha.vercel.app/about",
    siteName: "Abhinav Sinha",
    images: [
      {
        url: "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
        width: 1200,
        height: 630,
        alt: "Abhinav Sinha - About Page",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Abhinav Sinha | FullStack Developer",
    description:
      "Learn more about Abhinav Sinha, a dedicated fullstack developer specializing in Next.js and the MERN/Node environment. Explore his documentation, skills, and background.",
    images:
      "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
  },
  alternates: {
    canonical: "https://abhinavsinha.vercel.app/about/",
  },
};

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background text-primary py-25 accent-dots accent-dots">
      {/* Add corner glow effect */}
      <div className="corner-glow"></div>

      {/* Add constellation pattern */}
      <div className="constellation"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
        <section className="animate-fadeIn">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-3">
            # Documentation
          </h1>
          <p className="text-sm sm:text-base text-primary">
            I am passionate fullstack developer with expertise in building
            modern, high-performance websites and applications. I continuously
            explore new technologies and frameworks to deliver innovative
            solutions.
          </p>
        </section>

        <section className="animate-fadeIn">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-3">
            ## Who am I
          </h2>
          <p className="text-sm sm:text-base text-primary">
            I am Abhinav Sinha, a FullStack Developer with a passion for
            creating and sharing great software. I specialize in the MERN stack,
            React Native and Next.js, and I am always eager to learn new
            technologies and frameworks. I am a dedicated problem solver who
            enjoys freelancing and building innovative websites and
            applications.
          </p>
        </section>

        <section className="animate-fadeIn">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
            ## Basic Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Nationality:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Indian
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Type:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Full Stack Developer
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Speciality:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                MERN, React Native & Next.js Specialist
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">State:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Bihar
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Age:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                {(() => {
                  const birthDate = new Date(2001, 12, 13);
                  const currentDate = new Date();
                  const timeDifference =
                    currentDate.getTime() - birthDate.getTime();
                  const daysDifference = Math.floor(
                    timeDifference / (1000 * 3600 * 24)
                  );
                  return `${daysDifference} Days Successfully Survived`;
                })()}
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Religion:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Hinduism
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Political Alignment:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Coding Party
              </span>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Status:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Available for projects (Freelance / Full-time)
              </span>
            </div>
          </div>
        </section>

        <section className="animate-fadeIn">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
            ## Primary Language
          </h2>
          <div className="grid grid-cols-1 gap-3">
            <div className="p-3 rounded-lg bg-background-secondary border border-theme">
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-highlight-secondary">
                  Spoken:
                </span>
                <span className="text-sm sm:text-base text-secondary ml-2">
                  English
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-highlight-secondary">
                  Native Spoken:
                </span>
                <span className="text-sm sm:text-base text-secondary ml-2">
                  Hindi
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-highlight-secondary">
                  Written Docs:
                </span>
                <span className="text-sm sm:text-base text-secondary ml-2">
                  Markdown
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-highlight-secondary">
                  Programming:
                </span>
                <span className="text-sm sm:text-base text-secondary ml-2">
                  JavaScript / TypeScript
                </span>
              </div>
              <div className="flex items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-highlight-secondary">
                  Extra Programming:
                </span>
                <span className="text-sm sm:text-base text-secondary ml-2">
                  C++ / Java
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="animate-fadeIn">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
            ## Hobbies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
              <span className="text-sm sm:text-base text-secondary">
                Freelancing
              </span>
            </div>
            <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
              <span className="text-sm sm:text-base text-secondary">
                Learning New Technologies
              </span>
            </div>
            <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
              <span className="text-sm sm:text-base text-secondary">
                Coding
              </span>
            </div>
            <div className="p-3 rounded-lg bg-background-secondary border border-theme flex items-center justify-center">
              <span className="text-sm sm:text-base text-secondary">
                Problem Solving
              </span>
            </div>
          </div>
        </section>

        <section className="animate-fadeIn">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-highlight mb-4">
            ## Software & Hardware
          </h2>

          <div className="flex flex-col gap-3">
            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Editor:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                VS Code
              </span>
              <Link
                target="_blank"
                href="https://code.visualstudio.com/"
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
              >
                [-code ↗]
              </Link>
            </div>

            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Browser:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Chrome
              </span>
              <Link
                target="_blank"
                href="https://www.google.com/chrome/"
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
              >
                [-chrome ↗]
              </Link>
            </div>
            {/* <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Terminal:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Warp
              </span>
              <Link
                target="_blank"
                href="https://www.warp.dev/"
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
              >
                [-warp ↗]
              </Link>
            </div> */}
            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">Device:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                Macbook Air M3
              </span>
              <Link
                target="_blank"
                href="https://www.amazon.in/Apple-2024-MacBook-Laptop-chip/dp/B0CX237H3B?th=1"
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
              >
                [-apple ↗]
              </Link>
            </div>
            <div className="flex items-center p-3 rounded-lg bg-background-secondary border border-theme">
              <span className="text-sm sm:text-base">OS:</span>
              <span className="text-sm sm:text-base text-secondary ml-2">
                macOS Sequoia 15.3.1
              </span>
              <Link
                target="_blank"
                href="https://www.apple.com/in/macos/macos-sequoia/"
                className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-medium link-color hover:link-hover"
              >
                [-macOS ↗]
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
