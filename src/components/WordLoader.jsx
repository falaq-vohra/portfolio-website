import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const WordLoader = ({
  words = [
    "Frontend Engineer",
    "UI Designer",
    "Web Developer",
    "Creative Technologist",
  ],
  className = "",
  color = "#e4ded7",
}) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });
      const wordDelay = 0.7;
      const wordDuration = 1.3;
      const charStagger = 0.07;

      words.forEach((_, index) => {
        const startTime = index * (wordDuration + wordDelay);

        // Animate characters in
        tl.fromTo(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: charStagger,
            ease: "power2.out",
          },
          startTime
        );

        // Animate characters out
        tl.to(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: -5,
            duration: 0.4,
            stagger: charStagger,
            ease: "power2.in",
          },
          startTime + 0.9
        );
      });
    },
    { scope: containerRef, dependencies: [words] }
  );

  return (
    <div ref={containerRef} className={`flex flex-col gap-y-6 w-full ${className}`}>
      <div className="relative h-16 flex items-center justify-center">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word-${index} absolute text-4xl tracking-wider font-bold flex gap-x-1`}
            style={{ color, fontFamily: '"Montserrat", sans-serif' }}
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="char">
                {char === " " ? " " : char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
