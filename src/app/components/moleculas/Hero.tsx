"use client";

export function Hero() {
  const handleClick = () => {
    const el = document.getElementById("contacts");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-bold text-[var(--c-primary)] leading-tight">
        Индивидуальные занятия
        <br className="hidden md:block" />
        для&nbsp;1–4&nbsp;классов
      </h1>
      <p className="text-lg text-[var(--c-text)]/80">
        Помогу ребёнку полюбить учёбу, повысить успеваемость и&nbsp;уверенность
        в себе.
      </p>
      <button
        onClick={() => handleClick()}
        className="mt-6 rounded-full bg-[var(--c-primary)] px-8 py-3 text-white font-medium shadow-md hover:shadow-lg transition"
      >
        Записаться на бесплатное занятие
      </button>
    </div>
  );
}
