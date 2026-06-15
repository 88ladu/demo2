import { Leaf } from "lucide-react";
import { MotionSection } from "./motion-section";

export function VisionSection() {
  return (
    <MotionSection className="overflow-hidden bg-ink text-petal dark:bg-[#101210]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(243,215,215,.22),transparent_24rem),radial-gradient(circle_at_78%_58%,rgba(159,181,154,.20),transparent_28rem)]" />
      <div className="relative mx-auto grid min-h-[520px] w-[min(1180px,calc(100%-28px))] items-center gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-sage">
            Brand Vision
          </p>
          <h2 className="mt-5 max-w-4xl text-[clamp(40px,7vw,86px)] font-semibold leading-[1.02] tracking-normal">
            让城市成为一座花园
            <br />
            让花园成为一所学校
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-petal/70">
            Flower Walk 希望通过花卉、漫游与美育，建立人与自然、人与城市之间新的连接方式。
          </p>
        </div>
        <div className="rounded-panel border border-white/10 bg-white/8 p-8 backdrop-blur">
          <Leaf className="h-10 w-10 text-sage" />
          <p className="mt-8 text-2xl leading-10 text-petal/86">
            城市花卉不是装饰，而是一套可以被感知、学习、分享和延展的公共美育系统。
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
