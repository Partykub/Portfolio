import { Variants } from "framer-motion";

// Premium Animation Variants

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth luxury feel
    },
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

// Hover Animation Variants
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1],
  },
};

// Magnetic button effect
export const magneticButton = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 17,
  },
};

// Premium spring transitions
export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 25,
};

export const softSpringTransition = {
  type: "spring" as const,
  stiffness: 200,
  damping: 20,
};

// Scroll reveal animation
export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Timeline animation for experience cards
export const timelineItem: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: custom * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Shimmer effect
export const shimmer = {
  backgroundSize: "200% 100%",
  animation: "shimmer 2s infinite",
};
