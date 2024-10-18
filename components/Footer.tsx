import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image"; // Import Next.js Image component
import { FaGithub, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Import Facebook, GitHub, LinkedIn icons

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          layout="fill" // Automatically fills the parent container
          objectFit="cover" // Adjust image to cover its container
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:muhammadanascloud@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Muhammad Anas
        </p>

        {/* Added margin-top for space between copyright and icons in mobile view */}
        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {/* GitHub Icon with Link */}
          <a
            href="https://github.com/muhammadanascloud"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaGithub className="text-white w-5 h-5" />
          </a>

          {/* Facebook Icon with Link */}
          <a
            href="https://www.facebook.com/profile.php?id=100004684450209"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaFacebookF className="text-white w-5 h-5" />
          </a>

          {/* LinkedIn Icon with Link */}
          <a
            href="https://www.linkedin.com/in/muhammadanastech/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
          >
            <FaLinkedinIn className="text-white w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
