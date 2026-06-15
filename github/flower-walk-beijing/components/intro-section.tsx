"use client";

import { motion } from "framer-motion";
import { introCards } from "@/data/flower-data";
import { MotionSection } from "./motion-section";

export function IntroSection() {
  return (
    <MotionSection className="bg-petal dark:bg-[#171917]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
              What is Flower Walk?
            </p>
            <h2 className="mt-4 text-[clamp(34px,5vw,64px)] font-semibold leading-tight tracking-normal">
              什么是 Flower Walk？
            </h2>
          </div>
          <p className="text-lg leading-9 text-ink/68 dark:text-petal/70">
            Flower Walk 是以城市花卉资源为媒介构建的城市漫游系统，通过花卉地图、主题路线、花期日历和美育活动，让市民从“看花”走向“感受花、认识花、参与花”。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {introCards.map((card, index) => (
            <motion.article
              key={card.title}
              className="group rounded-panel border border-ink/10 bg-white/58 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-rose text-ink transition group-hover:bg-sage">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-8 text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-ink/62 dark:text-petal/66">{card.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
