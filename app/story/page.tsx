import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Story - My Journey | Abhinav Sinha | FullStack Developer",
  description:
    "Explore the journey of Abhinav Sinha from the early days of fullstack development to advanced cloud operations and freelancing. Discover the timeline of milestones and projects that define the career.",
  openGraph: {
    title: "Story - My Journey | Abhinav Sinha | FullStack Developer",
    description:
      "Explore the journey of Abhinav Sinha from the early days of web development to dvanced cloud operations and freelancing. Discover the timeline of milestones and projects that define the career.",
    url: "https://abhinavsinha.vercel.app/story",
    siteName: "Abhinav Sinha",
    images: [
      {
        url: "https://res.cloudinary.com/dsjohbtbs/image/upload/v1742412455/cixrlrc6g8omguequyhh.jpg",
        width: 1200,
        height: 630,
        alt: "Timeline of Abhinav Sinha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Story - My Journey | Abhinav Sinha | FullStack Developer",
    description:
      "Explore the journey of Abhinav Sinha from the early days of fullstack development to advanced cloud operations and freelancing.",
    images: [
      "https://res.cloudinary.com/dsfztnp9x/image/upload/v1739285452/next-portfolio/ntuasgjzwygk9ntvwlgi.png",
    ],
  },
  alternates: {
    canonical: "https://abhinavsinha.vercel.app/story",
  },
};

const page = () => {
  const timelineEvents = [
    {
      year: 2021,
      events: [
        {
          title: "First Steps in Coding",
          date: "January, 2021",
          description:
            "Purchased my first laptop and began my coding journey by learning HTML, CSS, JavaScript and C. I started building simple user interfaces and small websites to establish a solid foundation.",
          color: "accent-green-light",
          link: "",
        },
        {
          title: "College Semester – C Programming",
          date: "April 2021",
          description:
            "Completed my first college semester, where I mastered C programming. This experience provided the critical programming fundamentals that paved the way for future learning.",
          color: "accent-blue-light",
          link: "",
        },
        {
          title: "Exploring DSA",
          date: "August 2021",
          description:
            "Began exploring Data Structures and Algorithms (DSA) to enhance problem-solving abilities. This phase marked a shift toward writing more efficient and optimized code.",
          color: "accent-blue-light",
          link: "",
        },
      ],
    },
    {
      year: 2022,
      events: [
        {
          title: "Advanced Web Development",
          date: "February 2022",
          description:
            "Progressed into building more complex websites, delving into database management, and initiating backend development. This period was characterized by a deeper understanding of full-stack technologies.",
          color: "accent-green-light",
          link: "",
        },
        {
          title: "Exploring Blockchain",
          date: "December 2022",
          description:
            "Began exploring blockchain technology to understand decentralized systems and smart contracts. This phase marked a shift toward building secure and transparent applications.",
          color: "accent-green-light",
          link: "",
        },
      ],
    },
    {
      year: 2023,
      events: [
        {
          title: "Ecommerce Webite",
          date: "June 2023",
          description:
            "Developed an eCommerce website using React, Redux, and Firebase for seamless state management and real-time data synchronization. This phase marked a shift toward building scalable and user-friendly online shopping platforms.",
          color: "accent-yellow",
          link: "https://ecommerce-qqk1.onrender.com/",
        },
        {
          title: "Landed First Remote Internship at Celebal Technologies",
          date: "July 2023",
          description:
            "Gained hands-on experience in real-world projects and collaborating with industry professionals. This phase marked a significant step in my professional growth and technical expertise.",
          color: "accent-yellow",
          link: "",
        },
        {
          title: "Landed Second Remote Internship at ONGC India",
          date: "August 2023",
          description:
            "I worked on decentralized file storage solutions. This phase deepened my understanding of blockchain technology and secure data management.",
          color: "accent-yellow",
          link: "",
        },
        {
          title: "Landed Third Remote Internship at K3S Projects India",
          date: "September 2023",
          description:
            "I worked on enhancing the company's website. This phase strengthened my web development skills and improved user experience through optimized design and functionality.",
          color: "accent-yellow",
          link: "",
        },
        {
          title: "MERN Blog Webiste",
          date: "December 2023",
          description:
            "Developed the MERN Blog project featuring a custom admin panel and integration with MongoDB for dynamic content management.",
          color: "accent-yellow",
          link: "https://mern-blog-ch3e.onrender.com/",
        },
      ],
    },
    {
      year: 2024,
      events: [
        {
          title: "Landed First On-site Internship at 75way Technologies",
          date: "January 2024",
          description:
            "Worked as a Full Stack Developer and React Native Developer, this phase provided hands-on experience in building scalable web and mobile applications while collaborating in a dynamic team environment. This was the turning point of my life in coding field.",
          color: "accent-orange",
          link: "",
        },
        {
          title: "Got Selected For a Full-Time Role at 75way Technologies",
          date: "July 2024",
          description:
            "Transitioning from an intern to a core team member. This milestone marked a significant step in my career, allowing me to contribute to large-scale projects as a Full Stack and React Native Developer.",
          color: "accent-orange",
          link: "",
        },
        {
          title: "Landed My First Freelance Project",
          date: "November 2024",
          description:
            "Landed my first freelance project in React Native, taking full ownership of development and delivery. This phase marked my transition into independent project management and client collaboration.",
          color: "accent-orange",
          link: "",
        },
      ],
    },
    {
      year: 2025,
      events: [
        {
          title: "Journey as a Full-time Freelancer is going on...",
          date: "January 2025",
          description:
            "Embarked on my journey as a full-time freelancer, working on diverse projects and collaborating with clients globally. This phase is shaping my skills in project management, problem-solving, and delivering high-quality solutions independently.",
          color: "accent-red",
          link: "",
        },
      ],
    },
  ];

  const getDayOfWeek = (dateString: string) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  // Map color names to actual Tailwind classes for text
  const getColorClasses = (colorName: string) => {
    const colorMap: Record<string, string> = {
      "accent-green-light": "text-emerald-500",
      "accent-green": "text-emerald-600",
      "accent-yellow": "text-amber-500",
      "accent-orange": "text-orange-500",
      "accent-red": "text-rose-500",
    };
    return colorMap[colorName] || "text-blue-500"; // fallback color
  };

  // Map color names to actual Tailwind classes for background
  const getBgColorClasses = (colorName: string) => {
    const colorMap: Record<string, string> = {
      "accent-green-light": "bg-emerald-500",
      "accent-green": "bg-emerald-600",
      "accent-yellow": "bg-amber-500",
      "accent-orange": "bg-orange-500",
      "accent-red": "bg-rose-500",
    };
    return colorMap[colorName] || "bg-blue-500";
  };

  return (
    <>
      <main className="min-h-screen bg-background text-primary py-25 accent-dots">
        {/* Add corner glow effect */}
        <div className="corner-glow"></div>

        {/* Add constellation pattern */}
        <div className="constellation"></div>
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 md:gap-10">
          <section className="animate-fadeIn">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-highlight mb-1.5 sm:mb-2 md:mb-3 pl-2 sm:pl-3 py-1">
              # My Journey
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-primary pl-3 sm:pl-4">
              Follow the path of my development career from 2022 to present
            </p>
          </section>

          {/* Timeline container with improved responsive margins */}
          <div className="relative pl-6 sm:pl-8 md:pl-12 md:ml-2">
            {/* Timeline connector */}
            <div className="absolute left-0 w-1 sm:w-1.5 md:w-2 h-full bg-border-theme rounded-full" />

            {/* Timeline events */}
            {timelineEvents.map((yearData) => (
              <div key={yearData.year} className="mb-10 sm:mb-12 relative">
                {/* Year marker */}
                <div className="flex items-center mb-6 sm:mb-8 relative">
                  <div className="absolute -left-3 sm:-left-5 md:-left-8 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 bg-highlight-primary rounded-full z-10 flex items-center justify-center">
                    <div className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 rounded-full bg-background-primary"></div>
                  </div>
                  <div className="bg-highlight-primary text-background-primary px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-bold z-10 ml-3 sm:ml-4">
                    {yearData.year}
                  </div>
                </div>

                {/* Events for this year */}
                {yearData.events.map((event, eventIndex) => {
                  const dayOfWeek = getDayOfWeek(event.date);
                  const formattedDate = `${dayOfWeek}, ${event.date}`;
                  const textColorClass = getColorClasses(event.color);
                  const bgColorClass = getBgColorClasses(event.color);

                  return (
                    <div key={eventIndex} className="relative mb-8 sm:mb-10">
                      {/* Timeline node */}
                      <div
                        className="absolute -left-2.5 sm:-left-4 md:-left-6 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-background-secondary border-2 sm:border-3 md:border-4 border-theme 
                                                rounded-full z-10 flex items-center justify-center"
                      >
                        <div
                          className={`w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 rounded-full ${bgColorClass}`}
                        ></div>
                      </div>

                      {/* Timeline dash */}
                      <div className="absolute -left-3 sm:-left-3 md:-left-3 top-3 w-4 sm:w-6 md:w-8 h-0.5 bg-border-theme"></div>

                      {/* Content card */}
                      <div className="ml-4 sm:ml-6 md:ml-8 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl">
                        <div
                          className="bg-background-secondary border border-theme p-3 sm:p-4 rounded-md hover:shadow-lg 
                                                   transition-all duration-300 hover:translate-y-[-2px]"
                        >
                          <div
                            className={`${textColorClass} text-xs mb-1 font-medium`}
                          >
                            {formattedDate}
                          </div>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2 text-highlight-secondary">
                            {event.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-primary mb-2 sm:mb-3">
                            {event.description}
                          </p>
                          {event.link && (
                            <a
                              href={event.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${textColorClass} text-xs hover:underline inline-flex items-center gap-1`}
                            >
                              View Project
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
