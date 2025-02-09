import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react"; // Using lottie-react for animations
import { cn } from "@/lib/utils"; // Utility for classNames
import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import Image from "next/image";
import { motion } from "framer-motion";

// BentoGrid Component
const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// BentoGridItem Component
const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "NextJS", "Typescript"];
  const rightLists = ["TailwindCSS", "HTML", "CSS"];

  // Animation variants for scrolling
  const scrollVariants = {
    animateUp: {
      y: [50, -50], // Moves the list up
      transition: { repeat: Infinity, duration: 8, ease: "linear" },
    },
    animateDown: {
      y: [-50, 50], // Moves the list down
      transition: { repeat: Infinity, duration: 8, ease: "linear" },
    },
    stop: { y: 0 }, // Stops the animation
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Main image */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              fill
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              fill
            />
          )}
        </div>

        {/* Title and description */}
        <div
          className={cn(
            titleClassName,
            "relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* Description */}
          <div className="font-sans font-extralight md:max-w-32 text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          {/* Title */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* Tech Stack Lists with Animation */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* Left List (scrolling upwards) */}
              <motion.div
                className="flex flex-col gap-3 md:gap-3 lg:gap-8"
                variants={scrollVariants}
                animate="animateUp"
                whileHover="stop"
              >
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>

              {/* Right List (scrolling downwards) */}
              <motion.div
                className="flex flex-col gap-3 md:gap-3 lg:gap-8"
                variants={scrollVariants}
                animate="animateDown"
                whileHover="stop"
              >
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </div>
          )}

          {/* Let's get in touch button instead of copy */}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                {/* Lottie animation */}
                <Lottie
                  animationData={animationData}
                  height={200}
                  width={400}
                />
              </div>

              {/* Let's get in touch button */}
              <a href="mailto:muhammadanascloud@gmail.com">
                <MagicButton
                  title="Let's get in touch"
                  icon={<IoCopyOutline />}
                  position="right"
                  otherClasses="!bg-[#161A31]"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Export both components
export { BentoGrid, BentoGridItem };
