"use client";

import dynamic from "next/dynamic";
import { MapPinned } from "lucide-react";
import { flowerSpots } from "@/data/flower-data";
import { MotionSection } from "./motion-section";

const FlowerMap = dynamic(() => import("./flower-map").then((mod) => mod.FlowerMap), {
  ssr: false,
  loading: () => (
    <div className="grid h-[560px] place-items-center rounded-panel border border-ink/10 bg-white/60 text-ink/60 dark:border-white/10 dark:bg-white/10 dark:text-petal/60">
      花卉地图加载中
    </div>
  )
});

export function MapSection() {
  return (
    <MotionSection id="map" className="bg-[#F4F2ED] dark:bg-[#1B1E1B]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
        <div>
          <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
            Blooming Map
          </p>
          <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
            北京赏花地图
          </h2>
          <p className="mt-5 leading-8 text-ink/68 dark:text-petal/70">
            标记城市代表性赏花地点，点击 Marker 可查看花种、花期与推荐活动。地图用于现场展示，也便于后续接入真实 POI 数据。
          </p>
          <div className="mt-8 grid gap-3">
            {flowerSpots.map((spot) => (
              <a
                key={spot.id}
                href="#map"
                className="group flex items-start gap-3 rounded-panel border border-ink/10 bg-white/58 p-4 transition hover:-translate-y-0.5 hover:shadow-lift dark:border-white/10 dark:bg-white/8"
              >
                <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose text-moss group-hover:bg-sage group-hover:text-ink">
                  <MapPinned className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-semibold">{spot.name}</span>
                  <span className="mt-1 block text-sm leading-6 text-ink/60 dark:text-petal/62">
                    {spot.flower} · {spot.season}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
        <FlowerMap />
      </div>
    </MotionSection>
  );
}
