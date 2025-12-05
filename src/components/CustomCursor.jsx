import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring animation - smaller and faster
  const springConfig = { damping: 25, stiffness: 500, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.style.cursor === "pointer" ||
        target.classList.contains("cursor-pointer");

      setIsPointer(isInteractive);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Ring - Smaller and no blur */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHidden ? 0 : isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          scale: { 
            type: "spring", 
            stiffness: 400, 
            damping: 25,
            mass: 0.3 
          },
          opacity: { duration: 0.15 },
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
            isPointer
              ? "border-blue-500 dark:border-blue-400 bg-blue-500/20 dark:bg-blue-400/20"
              : "border-slate-600 dark:border-slate-300"
          }`}
        />
      </motion.div>

      {/* Inner Cursor Dot - Smaller */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHidden ? 0 : isPointer ? 0 : 1,
          opacity: isHidden ? 0 : isPointer ? 0 : 1,
        }}
        transition={{
          scale: { 
            type: "spring", 
            stiffness: 500, 
            damping: 28 
          },
          opacity: { duration: 0.15 },
        }}
      >
        <div className="w-full h-full rounded-full bg-slate-700 dark:bg-slate-200 translate-x-[10px] translate-y-[10px]" />
      </motion.div>

      {/* Hide default cursor on desktop only */}
      <style>{`
        @media (min-width: 769px) {
          * {
            cursor: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .custom-cursor-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default CustomCursor;
