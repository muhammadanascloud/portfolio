"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Utility class for conditional classNames

// Defining the Card type for better type-checking
type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

// Define the Button component and its props (including types)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  borderRadius?: string;
  duration?: number;
}

// Button component to create animated borders
export const Button: React.FC<ButtonProps> = ({
  children,
  borderRadius = "1rem",
  duration = 2000,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        props.className,
        "relative overflow-hidden transition-all",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-purple-500",
        "before:-z-1 before:scale-110 before:blur-md before:opacity-30",
        `before:rounded-[${borderRadius}]`,
        `before:duration-[${duration}ms]`
      )}
    >
      {children}
    </button>
  );
};

// LayoutGrid component for rendering a grid of cards with motion effects
export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-4 max-w-7xl mx-auto gap-10">
      {cards.map((card, i) => (
        <Button
          key={i}
          borderRadius="1.75rem"
          duration={10000}
          className={cn(card.className)}
        >
          <div
            className={cn(
              card.className,
              "relative border-3 border-yellow-500"
            )}
          >
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                card.className,
                "relative overflow-hidden",
                selected?.id === card.id
                  ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                  : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
              )}
              layout
            >
              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <BlurImage card={card} />
            </motion.div>
          </div>
        </Button>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

// BlurImage component for card thumbnails with a blur effect
const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="100"
      width="100"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

// SelectedCard component for rendering the selected card's content
const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
