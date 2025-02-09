import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion for animation

const MyTechStackHorizontal = () => {
  const techStack = [
    { id: 1, name: "ReactJS", logo: "/reactlogo.svg", alt: "ReactJS Logo" },
    { id: 2, name: "NextJS", logo: "/nextjs.svg", alt: "NextJS Logo" },
    {
      id: 3,
      name: "TailwindCSS",
      logo: "/tailwindcsslogo.svg",
      alt: "TailwindCSS Logo",
    },
    {
      id: 4,
      name: "TypeScript",
      logo: "/typescriptlogo.svg",
      alt: "TypeScript Logo",
    },
    { id: 5, name: "HTML", logo: "/htmllogo.svg", alt: "HTML Logo" },
    { id: 6, name: "CSS", logo: "/csslogo.svg", alt: "CSS Logo" },
    {
      id: 7,
      name: "FramerMotion",
      logo: "/framermotionlogo.svg",
      alt: "FramerMotion Logo",
    },
  ];

  const [isHovered, setIsHovered] = useState(false); // Track hover status
  const [isTouching, setIsTouching] = useState(false); // Track touch status

  // Set a constant scroll speed for both mobile and desktop views
  const scrollSpeed = 15; // Speed is constant across devices

  // Duplicate the techStack to ensure smooth infinite scroll
  const extendedTechStack = [...techStack, ...techStack, ...techStack];

  // Framer Motion settings for infinite scroll
  const animationSettings = {
    x: isHovered || isTouching ? 0 : ["100%", "-100%"], // Pause on hover/touch
    transition: {
      x: {
        repeat: Infinity, // Infinite scroll
        duration: scrollSpeed, // Set duration to constant speed
        ease: "linear",
      },
    },
  };

  return (
    <div
      className="overflow-hidden w-full my-10 no-scrollbar"
      onMouseEnter={() => setIsHovered(true)} // Pause scroll on hover
      onMouseLeave={() => setIsHovered(false)} // Resume scroll when not hovered
      onTouchStart={() => setIsTouching(true)} // Pause scroll on touch
      onTouchEnd={() => setIsTouching(false)} // Resume scroll after touch ends
    >
      <motion.div
        className="flex space-x-6 sm:space-x-3 scrolling-tech" // Reduced space between icons
        animate={animationSettings} // Apply Framer Motion animation
      >
        {/* Render extended techStack for smooth infinite scroll */}
        {extendedTechStack.map((tech, index) => (
          <div
            key={index} /* Use index as key since it's a duplicated array */
            className="flex flex-col items-center justify-center bg-card rounded-lg p-4 w-32 h-32 sm:w-24 sm:h-24 shadow-md" // Adjusted size for mobile
          >
            <Image
              src={tech.logo}
              alt={tech.alt}
              width={40}
              height={40}
              className="sm:w-10 sm:h-10"
            />{" "}
            {/* Smaller logos on mobile */}
            <p className="mt-2 text-white font-medium sm:text-sm">
              {tech.name}
            </p>{" "}
            {/* Smaller text for mobile */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MyTechStackHorizontal;
