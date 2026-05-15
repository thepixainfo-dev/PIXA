import { motion } from "motion/react";

export function BackgroundLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M-10 20 Q 25 10, 50 20 T 110 20"
          fill="none"
          stroke="#7249e8"
          strokeWidth="0.15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0, 0.5, 0.5, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.path
          d="M-10 50 Q 25 40, 50 50 T 110 50"
          fill="none"
          stroke="#2caefd"
          strokeWidth="0.15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0, 0.4, 0.4, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        <motion.path
          d="M110 80 Q 75 90, 50 80 T -10 80"
          fill="none"
          stroke="#ef3b95"
          strokeWidth="0.15"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1],
            opacity: [0, 0.3, 0.3, 0],
            x: [0, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
        
        {/* Vertical Lines */}
        <motion.path
          d="M30 -10 Q 40 25, 30 50 T 30 110"
          fill="none"
          stroke="#7249e8"
          strokeWidth="0.1"
          opacity="0.2"
          animate={{ 
            y: [0, 20, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.path
          d="M70 -10 Q 60 25, 70 50 T 70 110"
          fill="none"
          stroke="#2caefd"
          strokeWidth="0.1"
          opacity="0.2"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </svg>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
    </div>
  );
}
