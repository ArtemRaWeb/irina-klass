"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Предусмотрены ли скидки за обучение?",
    answer:
      "Да, при оплате пакета от 10 уроков предусмотрена скидка в 15% от разового занятия.",
  },
  {
    question: "Как проходят занятия?",
    answer:
      "Предпочтительно занятие проводится в Google Meet. При необходимости можем проводить в WhatsApp или Telegram. Я отправляю ссылку в онлайн‑комнату за пол‑часа до занятия, по которой в оговоренное время ученик подключается к уроку.",
  },
  {
    question: "Можно ли отменять занятия?",
    answer:
      "Да, предусмотрена отмена за сутки до урока. Если что‑то экстренное, доступны две незапланированные отмены без потери оплаты.",
  },
  {
    question: "Что нужно для занятий?",
    answer:
      "Наличие стабильного интернет‑соединения, камера и желательно наушники для наилучшего качества звука.",
  },
  {
    question: "Какова длительность занятия?",
    answer:
      "Длительность зависит от возраста и темперамента ребёнка. Малышам — до 30 минут, школьникам — академический час (40 минут).",
  },
  {
    question: "Сколько раз в неделю нужно заниматься?",
    answer:
      "Зависит от ваших сроков, но для комфортного обучения и хорошего результата желательно не реже двух раз в неделю, с учётом домашних заданий.",
  },
] as const;

export default function FaqAccordion() {
  return (
    <section id="faq" className="py-12 w-full">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[var(--c-primary)] mb-12">
          Часто задаваемые вопросы
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-[var(--c-text)]/90">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
