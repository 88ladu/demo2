"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function MotionSection({ id, className, children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative py-20 md:py-28", className)}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
