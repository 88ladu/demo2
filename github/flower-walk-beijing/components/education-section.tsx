"use client";

import { educationModules } from "@/data/flower-data";
import { MotionSection } from "./motion-section";

export function EducationSection() {
  return (
    <MotionSection id="education" className="bg-petal dark:bg-[#171917]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div className="max-w-3xl">
          <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
            Aesthetic Education
          </p>
          <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
            从看花到学花
          </h2>
          <p className="mt-5 text-lg leading-9 text-ink/68 dark:text-petal/70">
            美育活动把城市花卉变成开放课堂，让观察、创作与传播构成完整参与链路。
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {educationModules.map((module) => (
            <article
              key={module.title}
              className="rounded-panel border border-ink/10 bg-white/62 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/8"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-sage/35 text-moss dark:bg-sage/20 dark:text-sage">
                <module.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold">{module.title}</h3>
              <p className="mt-4 leading-8 text-ink/62 dark:text-petal/66">{module.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {module.items.map((item) => (
                  <span key={item} className="rounded-full bg-begonia px-3 py-1.5 text-sm text-ink/76">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
