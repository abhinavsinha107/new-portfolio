import React from "react";
import MediaCard from "@/components/MediaCard";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Get in Touch | Abhinav Sinha",
  description:
    "Connect with Abhinav Sinha on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
  openGraph: {
    title: "Contact - Get in Touch | Abhinav Sinha",
    description:
      "Connect with Abhinav Sinha on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
    url: "https://abhinavsinha.vercel.app/contact",
    siteName: "Abhinav Sinha",
    images: [
      {
        url: "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Abhinav Sinha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Get in Touch | Abhinav Sinha",
    description:
      "Connect with Abhinav Sinha on Twitter, GitHub, LinkedIn, Instagram, or via email. My DMs are always open for collaboration or a friendly hello.",
    images:
      "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
  },
  alternates: {
    canonical: "https://abhinavsinha.vercel.app/contact",
  },
};

const page = () => {
  // Social media contact data
  const socialMedias = [
    {
      title: "Upwork",
      username: "@Abhinav S.",
      url: "https://www.upwork.com/freelancers/~012566e3bcaf7370c4",
      description:
        "This is the place where you will find me the most working as a freelancer",
    },
    {
      title: "Twitter",
      username: "@abhinavsinha107",
      url: "https://x.com/abhinavsinha107",
      description:
        "X is where I post my thoughts, memes, takes, and whatever else comes to mind",
    },
    {
      title: "GitHub",
      username: "@abhinavsinha107",
      url: "https://github.com/abhinavsinha107/",
      description:
        "Check out my code repositories and open-source contributions (but most of them are private)",
    },
    {
      title: "LinkedIn",
      username: "@abhinav-sinha-1007as",
      url: "https://www.linkedin.com/in/abhinav-sinha-1007as/",
      description:
        "Connect with me professionally for work opportunities and collaboration",
    },
    {
      title: "Instagram",
      username: "@abhinavsinha107",
      url: "https://www.instagram.com/abhinavsinha107/",
      description:
        "Connect with me as a friend and see my photography and daily life",
    },
    {
      title: "Email",
      username: "abhinavsinha135@gmail.com",
      url: "mailto:abhinavsinha135@gmail.com",
      description:
        "The most direct way to reach me for business inquiries and collaborations",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-primary py-25 accent-dots">
      {/* Add corner glow effect */}
      <div className="corner-glow"></div>

      {/* Add constellation pattern */}
      <div className="constellation"></div>
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
        <section className="w-full animate-fadeIn">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-highlight mb-2 sm:mb-3 pl-3 py-1">
            # Get in touch
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-primary pl-4">
            My DMs are always open for any kind of collaboration or just to say
            hi!
          </p>
        </section>

        <section className="animate-fadeIn flex flex-col gap-2">
          {socialMedias.map((socialMedia, index) => (
            <MediaCard
              key={index}
              title={socialMedia.title}
              username={socialMedia.username}
              url={socialMedia.url}
              description={socialMedia.description}
            />
          ))}
        </section>

        {/* Contact Form Section */}
        <section className="w-full animate-fadeIn border border-theme rounded-lg bg-background-secondary p-6">
          <h2 className="text-lg sm:text-xl font-bold text-highlight mb-4 pl-2">
            Send a Direct Message
          </h2>
          <ContactForm />
          <p className="text-secondary text-xs mt-4">
            I typically respond within 24-48 hours on weekdays.
          </p>
        </section>
      </div>
    </main>
  );
};

export default page;
