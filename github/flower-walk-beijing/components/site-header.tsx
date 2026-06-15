"use client";

import { Flower2 } from "lucide-react";
import { navItems } from "@/data/flower-data";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-petal/78 backdrop-blur-xl dark:border-white/10 dark:bg-[#171917]/78">
      <div className="mx-auto flex h-16 w-[min(1180px,calc(100%-28px))] items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 font-inter text-sm font-semibold tracking-wide">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-petal dark:bg-petal dark:text-ink">
            <Flower2 className="h-4 w-4" />
          </span>
          <span>Flower Walk Beijing</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-white/55 p-1 text-sm text-ink/70 shadow-sm backdrop-blur md:flex dark:border-white/10 dark:bg-white/10 dark:text-petal/70">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:bg-white hover:text-ink dark:hover:bg-white/10 dark:hover:text-petal"
            >
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#map"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm text-petal shadow-lift transition hover:-translate-y-0.5 md:inline-flex dark:bg-petal dark:text-ink"
          >
            查看地图
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
