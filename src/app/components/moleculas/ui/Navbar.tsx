"use client";

import { ThemeToggler } from "@/app/components/moleculas/ui/ThemeToggler";
import { NAV_ITEMS, SectionIds } from "@/app/constants/config";
import Image from "next/image";
import { useCallback } from "react";

export default function Navbar() {
  const handleScroll = useCallback((id: SectionIds) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between bg-[var(--c-bg)]/80 px-6 backdrop-blur">
      {/* logo */}
      <Image
        src="/logo.webp"
        alt="Логотип компании"
        width={65}
        height={50}
        priority
        draggable={false}
        className="translate-y-[12px] select-none"
      />

      <ul className="hidden gap-8 md:flex lg:gap-10">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              type="button"
              aria-label={`Перейти к секции «${label}»`}
              onClick={() => handleScroll(id)}
              className="
                group relative inline-block cursor-pointer px-1 py-1
                text-base font-medium tracking-wide text-[var(--c-text)]
                transition-colors duration-200
                hover:text-[var(--c-primary)] focus:text-[var(--c-primary)]
                focus:outline-none
              "
            >
              {label}

              <span
                aria-hidden="true"
                className="
                  absolute left-0 -bottom-0.5 h-0.5 w-full origin-left
                  scale-x-0 bg-[var(--c-primary)] transition-transform duration-200
                  group-hover:scale-x-100 group-focus:scale-x-100
                "
              />
            </button>
          </li>
        ))}
      </ul>

      <ThemeToggler />
    </nav>
  );
}
