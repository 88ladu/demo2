"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";
import { bloomCalendar } from "@/data/flower-data";
import { MotionSection } from "./motion-section";
import { cn } from "@/lib/utils";

export function CalendarSection() {
  const [active, setActive] = useState(bloomCalendar[0]);

  return (
    <MotionSection id="calendar" className="bg-[#F4F2ED] dark:bg-[#1B1E1B]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
              Bloom Calendar
            </p>
            <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
              花期日历
            </h2>
            <p className="mt-5 leading-8 text-ink/68 dark:text-petal/70">
              点击月份查看推荐地点和花卉介绍，把季节变化转译成清晰的城市行动计划。
            </p>
          </div>

          <div className="rounded-panel border border-ink/10 bg-white/62 p-4 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/8">
            <div className="grid gap-2 sm:grid-cols-3">
              {bloomCalendar.map((item) => (
                <button
                  key={item.month}
                  type="button"
                  onClick={() => setActive(item)}
                  className={cn(
                    "rounded-panel border px-4 py-5 text-left transition hover:-translate-y-0.5 hover:shadow-lift",
                    active.month === item.month
                      ? "border-moss bg-moss text-petal"
                      : "border-ink/10 bg-petal text-ink dark:border-white/10 dark:bg-white/8 dark:text-petal"
                  )}
                >
                  <span className="block font-inter text-sm opacity-70">{item.month}</span>
                  <span className="mt-2 block text-2xl font-semibold">{item.flower}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.month}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="mt-4 rounded-panel bg-petal p-6 dark:bg-[#171917]"
              >
                <div className="flex items-center gap-3 text-moss dark:text-sage">
                  <CalendarDays className="h-5 w-5" />
                  <span className="font-inter text-sm font-semibold uppercase tracking-[.18em]">
                    {active.month} · {active.flower}
                  </span>
                </div>
                <p className="mt-4 text-lg leading-8 text-ink/72 dark:text-petal/72">{active.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {active.places.map((place) => (
                    <span
                      key={place}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm text-ink/70 shadow-sm dark:bg-white/10 dark:text-petal/70"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {place}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
