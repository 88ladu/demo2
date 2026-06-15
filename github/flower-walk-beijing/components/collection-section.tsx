"use client";

import { useEffect, useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { collections } from "@/data/flower-data";
import { MotionSection } from "./motion-section";
import { cn } from "@/lib/utils";

export function CollectionSection() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    setSaved(JSON.parse(window.localStorage.getItem("flower-walk-saved") || "[]"));
  }, []);

  function toggleSaved(id: string) {
    setSaved((current) => {
      const next = current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      window.localStorage.setItem("flower-walk-saved", JSON.stringify(next));
      return next;
    });
  }

  return (
    <MotionSection id="collection" className="bg-petal dark:bg-[#171917]">
      <div className="mx-auto w-[min(1180px,calc(100%-28px))]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
              Flower Walk Collection
            </p>
            <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
              把花带回家
            </h2>
          </div>
          <p className="max-w-xl leading-8 text-ink/68 dark:text-petal/70">
            原创 Flower Walk IP 以柔软、治愈、拟人化的毛绒玩偶语言呈现，不使用任何既有品牌角色。
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {collections.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-panel border border-ink/10 bg-white/68 shadow-sm transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-white/8"
            >
              <div
                className="relative grid aspect-[4/3] place-items-center overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 50% 42%, ${item.colors[1]} 0 20%, transparent 21%), linear-gradient(135deg, ${item.colors[0]}, ${item.colors[2]})`
                }}
              >
                <div className="absolute left-8 top-8 rounded-full bg-white/64 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm">
                  Flower Walk Original
                </div>
                <PlushFigure colors={item.colors} />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="mt-1 text-ink/55 dark:text-petal/55">{item.subtitle}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => toggleSaved(item.id)}
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition hover:-translate-y-0.5",
                      saved.includes(item.id)
                        ? "border-rose bg-rose text-ink"
                        : "border-ink/10 bg-petal text-ink/62 dark:border-white/10 dark:bg-white/10 dark:text-petal/70"
                    )}
                    aria-label={`收藏 ${item.name}`}
                  >
                    <Heart className={cn("h-4 w-4", saved.includes(item.id) && "fill-current")} />
                  </button>
                </div>
                <p className="mt-5 leading-7 text-ink/66 dark:text-petal/68">{item.story}</p>
                <p className="mt-4 text-sm leading-6 text-ink/48 dark:text-petal/48">{item.material}</p>
                <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm text-petal transition hover:-translate-y-0.5 dark:bg-petal dark:text-ink">
                  <ShoppingBag className="h-4 w-4" />
                  加入收藏
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function PlushFigure({ colors }: { colors: string[] }) {
  return (
    <div className="relative h-48 w-48 transition duration-500 group-hover:scale-105">
      <div
        className="absolute inset-4 rounded-full shadow-[inset_-18px_-22px_40px_rgba(0,0,0,.08),0_28px_60px_rgba(46,46,46,.2)]"
        style={{ background: `radial-gradient(circle at 34% 28%, #fff, ${colors[0]} 46%, ${colors[2]})` }}
      />
      <div className="absolute left-14 top-20 h-3 w-3 rounded-full bg-ink/70" />
      <div className="absolute right-14 top-20 h-3 w-3 rounded-full bg-ink/70" />
      <div className="absolute left-[82px] top-[104px] h-5 w-9 rounded-b-full border-b-2 border-ink/60" />
      <div className="absolute left-16 top-0 h-16 w-10 -rotate-12 rounded-full bg-white/70" />
      <div className="absolute right-14 top-2 h-14 w-9 rotate-12 rounded-full bg-white/58" />
      <div className="absolute bottom-3 left-7 h-12 w-14 rounded-full bg-white/42" />
      <div className="absolute bottom-3 right-7 h-12 w-14 rounded-full bg-white/42" />
    </div>
  );
}
