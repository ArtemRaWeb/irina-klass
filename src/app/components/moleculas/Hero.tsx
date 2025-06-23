"use client";

import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
};

export default function Hero() {
  const handleClick = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 text-center max-w-3xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.h1
        variants={headingVariants}
        className="font-bold text-[var(--c-primary)] leading-tight text-3xl md:text-4xl"
      >
        Подготовка к школе. Индивидуальные занятия для 1–4 классов.
      </motion.h1>

      <motion.p
        variants={textVariants}
        className="text-lg text-[var(--c-text)]/80"
      >
        Моя цель - сделать обучение увлекательным и эффективным. Помочь ребенку
        раскрыть его потенциал и сохранить интерес к учебе.
      </motion.p>

      <motion.button
        variants={buttonVariants}
        onClick={handleClick}
        className="bg-[var(--c-primary)] hover:bg-[var(--c-secondary)]/90 mt-6 rounded-full px-8 py-3 text-white font-medium shadow-md hover:shadow-lg transition"
        type="button"
      >
        Записаться на бесплатное занятие
      </motion.button>
    </motion.div>
  );
}
