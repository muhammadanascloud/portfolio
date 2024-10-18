import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-28 sm:pt-36 md:pt-40 relative flex flex-col lg:flex-row justify-between items-center">
      {/* Spotlights for background effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Image first in mobile */}
      <div className="relative w-full lg:w-[40%] h-[35vh] lg:h-[80vh] flex items-center justify-center lg:order-2 order-1">
        <div className="relative w-full h-full overflow-hidden flex justify-center">
          <Image
            src="/herosectionimage2.png"
            alt="Your image"
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
            priority
            className="z-20"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 80%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 80%)",
              transform: "scale(1.05) translateY(5px)", // Slight reduction of image scale
            }}
          />

          {/* Add extra bottom fade on mobile */}
          <div className="absolute bottom-0 w-full h-[50px] bg-gradient-to-t from-[#000000] to-transparent block lg:hidden"></div>
        </div>
      </div>

      {/* Text and button come after image on mobile */}
      <div className="flex flex-col justify-center z-10 w-full text-center lg:text-left lg:max-w-[50vw] lg:order-1 order-2 mt-2 lg:mt-0">
        {/* Subtitle */}
        <p className="uppercase tracking-widest text-[10px] sm:text-xs md:text-sm lg:text-sm text-center lg:text-left text-blue-100 mb-1">
          Empowering Web Applications with Next.js
        </p>

        {/* Main headline */}
        <TextGenerateEffect
          words="Elevating User Experience Through Modern Web Development"
          className="text-center lg:text-left text-[26px] md:text-4xl lg:text-5xl max-w-[20ch] mb-3" // Added margin-bottom to create space
        />

        {/* Description */}
        <p className="text-center lg:text-left mb-4 text-xs md:text-lg lg:text-2xl">
          Hi! I&apos;m Anas, a Next.js Developer based in Pakistan.
        </p>

        {/* Button */}
        <div className="flex justify-center lg:justify-start mt-4">
          {/* Link to the Recent Projects section */}
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
