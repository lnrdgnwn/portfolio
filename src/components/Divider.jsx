import { useEffect, useState } from "react";
import { IoCodeSlash } from "react-icons/io5";

const Divider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const movementFactor = 0.5;
  const translateX = scrollPosition * movementFactor;

  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-darkgrey py-7">
      <div
        className="text-xl sm:text-3xl md:text-5xl font-semibold text-primary-400 flex items-center gap-10"
        style={{
          transform: `translateX(-${translateX}px)`,
          transition: "transform 0.1s linear", 
        }}
      >
        {[
          "Introducing Me",
          "Introducing Me",
          "Introducing Me",
          "Introducing Me",
        ].map((text, index) => (
          <span key={index} className="flex items-center gap-4">
            <span>{text}</span>
            <IoCodeSlash className="text-white w-10 h-10" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Divider;
