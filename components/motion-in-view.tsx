"use client";

import { motion, type MotionProps } from "framer-motion";
import type { PropsWithChildren } from "react";

type InViewProps = PropsWithChildren<
  MotionProps & {
    className?: string;
    delay?: number;
    y?: number;
  }
>;

export function MotionInView({
  children,
  className,
  delay = 0,
  y = 18,
  ...props
}: InViewProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(3px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
