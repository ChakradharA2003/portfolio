"use client";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";



export default function page() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-12 sm:mt-24 text-white">
        {/* Left Section */}
        <div className="w-full sm:w-[60%] flex flex-col gap-6 sm:gap-10 sm:ml-4 px-4">
          <div>
            <div className="flex flex-col gap-4">
              <span
                className="greetings text-2xl sm:text-md md:text-xl lg:text-2xl"
                data-aos="fade-up"
              >
                Hello!
              </span>
              <span
                className="name text-4xl sm:text-lg  md:text-3xl lg:text-5xl font-bold"
                data-aos="zoom-in"
              >
                I am Ankallagalla Chakradhar
              </span>
              <span
                className="profession text-4xl sm:text-2xl md:3xl lg:text-4xl"
                data-aos="fade-up"
              >
                Junior Full Stack Web Developer
              </span>
              <div
                className="description mt-3 text-sm sm:text-md md:text-lg "
                data-aos="fade-up"
              >
                <span>
                  Hi, I’m A. Chakradhar, a Computer Science graduate from CMR College of Engineering & Technology, Hyderabad, passionate about building impactful tech solutions. With hands-on experience in Full Stack Development—including HTML, CSS, JavaScript, React, Node.js, Express, Python, SQLite, and C++—I’ve developed scalable, end-to-end web applications.

I thrive in both frontend and backend roles, and take pride in solving real-world problems with innovative, self-built solutions—my top-listed project showcases this. I effectively leverage AI tools to blend creativity with efficiency and consistently aim for standout, thoughtful approaches.

Beyond tech, I bring leadership and quick decision-making, proven as Vice-Captain of my department’s cricket team, leading us to a tournament runner-up finish. I'm eager to grow, collaborate, and create meaningful, future-ready products.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="https://www.linkedin.com/in/chakradhar-ankallagalla-a61804235/">
                <img src="/linkedin.gif" alt="LinkedIn" />
              </Link>
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <Link href="https://github.com/ChakradharA2003">
                <img src="/github.png" alt="GitHub" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full sm:w-[40%] px-4 sm:px-10 h-full">
          <img
            className="rounded-full w-44 h-44 sm:w-48 sm:h-48  sm:mt-11 sm:mb-14 md:w-64 md:h-64 lg:w-96 lg:h-96 mx-auto"
            src="/21H51A6203.jpeg"
            alt="Photo of Chakri"
          />
        </div>
      </div>
    </>
  );
}

