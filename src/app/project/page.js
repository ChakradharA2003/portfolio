"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos"; // For animations
import "aos/dist/aos.css"; // Import AOS styles

const Page = () => {
  // Hardcoded project data (since no server components are used)
  const projects = [
    {
      projectimage: "/wepSS.png",
      projectname: "WEP Services Online",
      projectdescription:
        "The Election Management System is a cutting-WEP Local Service Connector – Full Stack Web Application: A self-initiated full stack web app designed to bridge the gap between local service providers (like electricians, plumbers, and water delivery personnel) and customers in need—born from a real-world problem I personally faced. This solution enables users to quickly find and connect with nearby service providers through a live, location-based interface. Built with Next.js (for seamless routing), Tailwind CSS, Node.js, Express.js, MongoDB, NodeMailer, WebSockets, and Leaflet.js for interactive maps. End-to-end functionality, Real-time location tracking, Scalable and user-friendly design Online is a real-time, location-aware web platform that intelligently connects customers with nearby service providers—similar to an “Uber for home services.” Designed to solve the inefficiencies of traditional service discovery, it enables users to instantly find and track trusted professionals like electricians, plumbers, and cooks based on real-time proximity and availability. The system is built using Next.js for fast, dynamic frontend rendering and TailwindCSS for a clean, responsive UI. It leverages Node.js and Express.js to power a robust backend, with MongoDB as the database for flexible data handling. The app features secure JWT authentication for protected routing and sessions, and WebSockets for dynamic, live location tracking of service providers—ensuring a seamless and transparent user experience. This project not only demonstrates full-stack mastery but also showcases innovation by solving a real-world problem through scalable architecture and real-time interactivity. project combining cybersecurity and full-stack development to ensure secure and efficient electoral processes. Built with HTML, CSS, React.js, Express.js, Node.js, and MongoDB, this system offers a seamless user experience and robust backend architecture. It integrates multi-factor authentication (MFA), including OTP-based verification, to enhance the security of voter logins. The project adheres to CIA principles—Confidentiality, Integrity, and Availability—to protect sensitive voter data and ensure trustworthy elections. Key features include secure voter registration, real-time data fetching, and a responsive interface for administrators and voters.",
      live: "https://wepservicesonline.vercel.app/",
      github: "https://github.com/ChakradharA2003/WEPServicesOnlineProject",
    },
    {
      projectimage: "/musicplayer.png",
      projectname: "Add Free Music Player – A Spotify-Inspired Frontend App",
      projectdescription:"Ad-Free Music Player – A Spotify-Inspired Frontend App: A sleek, ad-free music streaming platform built entirely on the frontend using React.js, CSS, and the YouTube Data API. This project reimagines the Spotify experience with a custom music player interface that allows users to search, play, favorite, and explore trending songs—all without ads or interruptions. Inspiration & Purpose: Frustrated by constant interruptions in mainstream music apps, I set out to create a cleaner, smoother alternative—built for uninterrupted playback and user-centric design. Every feature was thoughtfully designed to mimic the elegance of Spotify while removing the clutter. Key Features: Search Functionality: Find songs instantly using YouTube’s vast content base. Favorites System: Mark and revisit your favorite tracks anytime. Playback Controls: Custom-built player with play/pause, seek, shuffle, repeat, and volume control. Persistent Bottom Player: Always-visible mini-player while browsing. Trending Section: Displays the most popular songs fetched dynamically. Responsive Design: Smooth experience across devices with dark theme and green Spotify-style highlights. UI Overview: The homepage features a sidebar with navigation (Home, Favorites, Recently Played), a visually engaging trending section, and an always-present bottom audio player that reflects real-time interactions. Each song tile includes artist info and a Favorite button, contributing to a familiar and fluid UX. real-time chat app with OTP-verified accounts! 💬 Users sign up, log in, and chat instantly using React and Node.js. 🗄️ MongoDB stores data, Socket.IO enables real-time messaging, and Nodemailer secures sign-ups with emails. 🌍 Deployed on Heroku’s free tier for easy access. ✨ Secure, fun, and straightforward!",
      live: "https://add-free-music-app.netlify.app/",
      github: "https://github.com/ChakradharA2003/MusicPlayer",
    },
    {
      projectimage: "/nxtwatch.png",
      projectname: "NxtWatch (YouTube Clone)",
      projectdescription: "Nxt Watch – YouTube-Inspired Video Streaming Platform: Demo Credentials: Username: rahul, Password: rahul@2021. A sleek and responsive web application inspired by YouTube, Nxt Watch offers users a curated experience across trending, gaming, and saved video categories. Key Features: Dynamic Routing: Built using React Router for seamless page transitions between Trending, Gaming, Home, and Saved Videos. Authentication System: JWT-based login mechanism with credentials stored in local storage for persistent sessions. Protected Routes: Restricts access to key pages unless authenticated, ensuring secure navigation. Saved Videos: Allows users to bookmark and revisit their favorite videos. Gaming Section: Dedicated area showcasing popular gaming content through real-time API calls.",
      live: "https://mytubenxtwatch.ccbp.tech/",
      github: "https://github.com/ChakradharA2003/ReactJSAssignment-7NxtWatch",
    },
    {
      projectimage: "/nxttrendz.png",
      projectname: "NxtTrendz (E-commerce Clone)",
      projectdescription: "Nxt Trendz – E-commerce Platform Clone: A fully functional e-commerce web application inspired by popular online shopping platforms, built using React.js. This project showcases a modern, responsive design with a focus on user experience and functionality. Key Features: Dynamic Routing: Utilizes React Router for seamless navigation between Home, Products, Cart, and Login pages. Authentication System: Implements JWT-based login with local storage for session management. Product Management: Displays a wide range of products with detailed descriptions, images, and prices. Cart Functionality: Allows users to add products to their cart, view items, and proceed to checkout. Responsive Design: Ensures optimal viewing across devices with a clean, modern aesthetic.",
      live: "https://reactnxtecom.ccbp.tech/",
      github: "https://github.com/ChakradharA2003/ReactJSCP-43NxtFinalECom",
    },
    {
      projectimage: "/usermanagement.png",
      projectname: "User Management Services API",
      projectdescription: "User Management Services – Secure Backend API: A complete backend application built using Node.js, Express.js, and MongoDB, focused on secure and scalable user management. This project includes comprehensive CRUD operations for user data and implements modern authentication and authorization techniques. Key Features:👤 User Registration & Login: Passwords securely hashed using bcrypt. JWT Authentication: Robust token-based authentication for secure session handling. User CRUD: Create, Read, Update, and Delete operations with validation and error handling. API Documentation: Well-documented endpoints and usage instructions available here.",
      live: "https://user-management-services-7vqm.onrender.com",
      github: "https://github.com/ChakradharA2003/UserManagementServices",
    },
    {
      projectimage: "/weatherapp.png",
      projectname: "Weather App",
      projectdescription: "Weather App – Real-Time Weather Forecasting: A dynamic web application that provides real-time weather updates and forecasts for any location worldwide. Built with React.js, this app fetches data from the OpenWeatherMap API to deliver accurate and up-to-date weather information. Key Features: Location Search: Users can search for weather conditions by city or coordinates. Real-Time Data: Fetches current weather, temperature, humidity, wind speed, and more. Responsive Design: Optimized for both desktop and mobile devices with a clean, user-friendly interface. Error Handling: Displays appropriate messages for invalid locations or API errors.",
      live: "https://chakris-weather-app.netlify.app/",
      github: "https://github.com/ChakradharA2003/WeatherApp",
    },
    {
      projectimage: "/uberclone.png",
      projectname: "Uber Clone (Static Frontend)",
      projectdescription: " Uber Clone – Static Homepage UI:A static replica of the Uber homepage, crafted using only HTML and CSS, focusing on visual precision and structural accuracy. Core Highlights: Exact UI Cloning: Carefully mimicked layout, typography, and style of the original Uber home page. Static Build: No responsiveness or JavaScript — showcases raw HTML/CSS layout skills. Clean Structure: Well-organized codebase suitable for design practice or baseline templates.",
      live: "https://myuberclone.ccbp.tech/",
      github: "https://github.com/ChakradharA2003/uberclone",
    },
    
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Initialize AOS only on the client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init(); // Initialize AOS animations
    }
  }, []);

  return (
    <div className="text-white p-8">
      <h1 className="font-extrabold text-5xl text-center mb-12">Projects</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-700 via-gray-800 to-black rounded-lg overflow-hidden shadow-xl hover:shadow-2xl border-2 border-white transition-all duration-300 transform hover:scale-105 hover:translate-y-2"
          >
            <img
              src={project.projectimage}
              alt={project.projectname}
              className="w-full h-56 object-cover transition-all duration-300 group-hover:opacity-80"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.projectname}</h2>
              <p className="text-gray-300 text-sm mb-4">
                {expandedIndex === index
                  ? project.projectdescription
                  : project.projectdescription
                  ? project.projectdescription.substring(0, 120) + "..."
                  : "No description available"}
              </p>
              <button
                onClick={() => handleToggleDescription(index)}
                className="text-blue-500 hover:underline mt-2 transition-all duration-200 transform hover:scale-105"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
              <p className="text-md font-bold mb-2">
                Live:
                <span className="text-md text-blue-500 ml-4">
                  <Link href={project.live}>Project Live</Link>
                </span>
              </p>
              <p className="text-md font-bold mb-2">
                Github:
                <span className="text-md text-blue-500 ml-4">
                  <Link href={project.github}>Click here for code</Link>
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
