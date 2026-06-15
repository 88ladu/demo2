"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPinned } from "lucide-react";

const petals = Array.from({ length: 18 }, (_, index) => ({
  left: `${(index * 13) % 100}%`,
  delay: `${(index % 8) * 0.8}s`,
  duration: `${10 + (index % 7)}s`,
  drift: `${index % 2 === 0 ? 80 + index * 4 : -70 - index * 3}px`
}));

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 120]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-petal pt-16 dark:bg-[#171917]">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(243,215,215,.72),transparent_24rem),radial-gradient(circle_at_70%_30%,rgba(159,181,154,.45),transparent_26rem),linear-gradient(135deg,#FAF8F5_0%,#F8ECE8_42%,#ECF1E9_100%)] dark:bg-[radial-gradient(circle_at_28%_18%,rgba(94,61,65,.55),transparent_24rem),radial-gradient(circle_at_70%_30%,rgba(74,96,71,.45),transparent_26rem),linear-gradient(135deg,#171917_0%,#221d1c_48%,#182119_100%)]"
      />
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-[linear-gradient(to_top,rgba(250,248,245,1),rgba(250,248,245,0))] dark:bg-[linear-gradient(to_top,rgba(23,25,23,1),rgba(23,25,23,0))]" />
      <div className="pointer-events-none absolute inset-0">
        {petals.map((petal, index) => (
          <span
            key={index}
            className="petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              ["--drift" as string]: petal.drift
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-[min(1180px,calc(100%-28px))] items-center gap-10 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <motion.p
            className="mb-5 font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Beijing Urban Blooming System
          </motion.p>
          <motion.h1
            className="max-w-4xl font-inter text-[clamp(54px,9vw,132px)] font-semibold leading-[.88] tracking-normal text-ink dark:text-petal"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
          >
            Flower Walk Beijing
          </motion.h1>
          <motion.p
            className="mt-7 max-w-xl text-xl leading-9 text-ink/68 dark:text-petal/70"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.16 }}
          >
            跟随花期漫步城市。在行走中发现北京的自然之美。
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.24 }}
          >
            <a
              href="#routes"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-petal shadow-lift transition hover:-translate-y-1 dark:bg-petal dark:text-ink"
            >
              开始漫游
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#map"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-6 text-ink shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/10 dark:text-petal"
            >
              查看赏花地图
              <MapPinned className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative min-h-[520px] overflow-hidden rounded-panel border border-white/70 bg-white/38 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/8"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,.38),rgba(255,255,255,.06)),radial-gradient(circle_at_62%_24%,rgba(247,224,224,.95),transparent_11rem),radial-gradient(circle_at_32%_60%,rgba(159,181,154,.78),transparent_14rem)]" />
          <div className="absolute left-[10%] top-[18%] h-[46%] w-[80%] rounded-full bg-sage/30 blur-2xl" />
          <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-gradient-to-t from-moss/70 via-sage/42 to-transparent" />
          <div className="absolute bottom-12 left-8 right-8 rounded-panel border border-white/50 bg-white/52 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-[#171917]/62">
            <p className="font-inter text-xs uppercase tracking-[.2em] text-moss dark:text-sage">Current Bloom</p>
            <h2 className="mt-3 text-3xl font-semibold">元大都海棠花溪</h2>
            <p className="mt-3 leading-7 text-ink/68 dark:text-petal/70">
              盛花期 · 推荐自然观察、花瓣拓印与城市遗址漫游。
            </p>
          </div>
          <FlowerCluster />
        </motion.div>
      </div>
    </section>
  );
}

function FlowerCluster() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[58%]">
      {Array.from({ length: 22 }, (_, index) => (
        <span
          key={index}
          className="absolute rounded-full shadow-sm"
          style={{
            width: 32 + (index % 5) * 9,
            height: 32 + (index % 5) * 9,
            left: `${4 + ((index * 11) % 88)}%`,
            bottom: `${8 + ((index * 17) % 58)}%`,
            background: index % 3 === 0 ? "#F3D7D7" : index % 3 === 1 ? "#F7E0E0" : "#FAF8F5",
            opacity: 0.86
          }}
        />
      ))}
    </div>
  );
}
