"use client";

import { ArrowRight, Clock3 } from "lucide-react";
import { routes } from "@/data/flower-data";
import { MotionSection } from "./motion-section";

export function RoutesSection() {
  return (
    <MotionSection id="routes" className="bg-petal dark:bg-[#171917]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
              Flower Walk Routes
            </p>
            <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
              路线推荐
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-ink/68 dark:text-petal/70">
            横向路线卡片适合现场滑动展示，也能在移动端自然变成可横滑的路线手册。
          </p>
        </div>

        <div className="horizontal-scroll mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
          {routes.map((route, index) => (
            <article
              key={route.id}
              className="group min-w-[82%] snap-start overflow-hidden rounded-panel border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lift md:min-w-[420px] dark:border-white/10 dark:bg-white/8"
            >
              <div className="h-2" style={{ background: route.color }} />
              <div className="p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-inter text-sm text-ink/50 dark:text-petal/50">Route 0{index + 1}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-petal px-3 py-1.5 text-sm text-ink/70 dark:bg-white/10 dark:text-petal/70">
                    <Clock3 className="h-3.5 w-3.5" />
                    {route.duration}
                  </span>
                </div>
                <h3 className="mt-12 text-3xl font-semibold">{route.title}</h3>
                <p className="mt-5 text-lg leading-8 text-ink/76 dark:text-petal/76">{route.path}</p>
                <p className="mt-5 leading-7 text-ink/58 dark:text-petal/62">{route.mood}</p>
                <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm transition group-hover:bg-ink group-hover:text-petal dark:border-white/10 dark:group-hover:bg-petal dark:group-hover:text-ink">
                  收藏路线
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
