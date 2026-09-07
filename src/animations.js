// src/animations.js
export const pageVariants = {
  initial: { opacity: 0, y: 50, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -50, filter: "blur(4px)" },
};

export const pageTransition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1],
};
