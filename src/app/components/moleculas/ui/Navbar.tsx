"use client";

import { ThemeToggler } from "@/app/components/moleculas/ui/ThemeToggler";
import { NAV_ITEMS, SectionIds } from "@/app/constants/config";
import Image from "next/image";
import { useCallback } from "react";

export default function Navbar() {
  const handleScroll = useCallback((id: SectionIds) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-[var(--c-bg)] backdrop-blur flex items-center justify-between px-6">
      <Image
        className="translate-y-[12px]"
        src="/logo.webp"
        alt="Логотип компании"
        width={65}
        height={50}
        priority
      />
      <ul className="hidden md:flex gap-6 text-sm">
        {NAV_ITEMS.map(({ id, label }) => (
          <li key={id}>
            <button
              className="text-[var(--c-text)] hover:text-[var(--c-primary)] transition"
              type="button"
              onClick={() => handleScroll(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
      <ThemeToggler />
    </nav>
  );
}
