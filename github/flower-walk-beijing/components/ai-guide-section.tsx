"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { aiRecommendations } from "@/data/flower-data";
import { MotionSection } from "./motion-section";

export function AiGuideSection() {
  const [query, setQuery] = useState("我周末想看花");
  const [submitted, setSubmitted] = useState("我周末想看花");

  const recommendation = useMemo(() => {
    const normalized = submitted.trim();
    return (
      aiRecommendations.find((item) =>
        item.keywords.some((keyword) => normalized.includes(keyword))
      ) ?? aiRecommendations[0]
    );
  }, [submitted]);

  return (
    <MotionSection id="ai" className="bg-[#F4F2ED] dark:bg-[#1B1E1B]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-28px))] gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-inter text-sm font-semibold uppercase tracking-[.22em] text-moss dark:text-sage">
            AI Flower Guide
          </p>
          <h2 className="mt-4 text-[clamp(34px,5vw,58px)] font-semibold leading-tight">
            AI 花卉导览
          </h2>
          <p className="mt-5 leading-8 text-ink/68 dark:text-petal/70">
            这里使用本地 Mock 数据模拟智能推荐。输入“樱花拍照”“月季识别”等关键词，会切换到不同导览建议。
          </p>
        </div>

        <div className="rounded-panel border border-ink/10 bg-white/72 p-5 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/8">
          <div className="rounded-panel bg-petal p-4 dark:bg-[#171917]">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-moss dark:text-sage">
              <Sparkles className="h-4 w-4" />
              Flower Walk Assistant
            </div>
            <form
              className="flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(query);
              }}
            >
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="min-h-12 flex-1 rounded-full border border-ink/10 bg-white px-5 outline-none transition focus:border-moss dark:border-white/10 dark:bg-white/10"
                placeholder="我周末想看花"
              />
              <button
                type="submit"
                className="grid h-12 w-12 place-items-center rounded-full bg-ink text-petal transition hover:-translate-y-0.5 dark:bg-petal dark:text-ink"
                aria-label="发送"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <motion.div
            key={recommendation.place}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid gap-3"
          >
            <ResultLine label="推荐地点" value={recommendation.place} />
            <ResultLine label="当前状态" value={recommendation.status} />
            <ResultLine label="推荐路线" value={recommendation.route} />
            <ResultLine label="推荐活动" value={recommendation.activities.join(" · ")} />
            <p className="rounded-panel bg-sage/18 p-4 leading-7 text-ink/68 dark:text-petal/70">
              {recommendation.reason}
            </p>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}

function ResultLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-panel border border-ink/10 bg-white/58 p-4 dark:border-white/10 dark:bg-white/8">
      <span className="text-sm text-ink/50 dark:text-petal/50">{label}</span>
      <strong className="text-right font-semibold">{value}</strong>
    </div>
  );
}
