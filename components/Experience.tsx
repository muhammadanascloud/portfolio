import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image"; // Import Image from Next.js for optimization

const Experience = () => {
  return (
    // Adjust padding here (reduced from py-20 to py-10 or lower)
    <div id="work-experience" className="py-10 w-full">
      {" "}
      {/* Added id="work-experience" for navigation */}
      <h1 className="heading mb-16">
        My <span className="text-purple">work experience</span>
      </h1>
      {/* Adjust grid layout to two cards per row */}
      <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.5rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.5rem * 0.96)`,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)", // Add shadow
            }}
            className="text-black dark:text-white border border-white/[.1] rounded-2xl"
          >
            {/* Flexbox for Image on Left and Text on Right */}
            <div className="flex items-center p-6 gap-4 h-full">
              {/* Consistent image size on the left */}
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={64}
                height={64}
                className="flex-shrink-0" // Ensures the image doesn't shrink
              />

              {/* Text on the right */}
              <div className="text-left">
                <h1 className="text-xl font-bold">{card.title}</h1>
                <p className="mt-3 text-white-100 font-semibold">{card.desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
