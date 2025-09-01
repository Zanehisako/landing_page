import { motion } from "motion/react";
export function FlipLink({ children, href }: { children: string, href: string }) {
  const DURATION = 0.2;
  const STAGGER = 0.025;
  return (
    <motion.a
      id={href}
      initial="initial"
      whileHover="hovered"
      href={href}
      style={{ lineHeight: 0.85 }}
      className="relative block overflow-hidden whitespace-nowrap font-poppins underline-offset-1 tracking-tight font-bold text-9xl uppercase">
      <div>
        {children.split("").map((l, i) =>
          <motion.span
            className="inline-block"
            transition={{

              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,

            }}
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            key={i}>{l}</motion.span>)}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) =>
          <motion.span
            className="inline-block"
            transition={{

              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,

            }}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            key={i}>{l}</motion.span>)}
      </div>
    </motion.a>
  )
}
