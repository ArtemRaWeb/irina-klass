import Link from "next/link";

const CONTACTS = [
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/your_company", // TODO
    className: "bg-[#24A1DE]", // фирменный синий Telegram
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/79991234567", // TODO
    className: "bg-[#25D366]", // фирменный зелёный WhatsApp
  },
  {
    id: "vk",
    label: "VK",
    href: "https://vk.com/your_company", // TODO
    className: "bg-[#0077FF]", // VK blue
  },
  {
    id: "phone",
    label: "+7 (999) 123‑45‑67", // TODO
    href: "tel:+79991234567",
    className: "bg-gray-800 dark:bg-gray-700",
  },
];

export default function ContactFooter() {
  return (
    <section
      id="contacts"
      className="w-full border-t border-muted bg-background/60 backdrop-blur-md"
      aria-labelledby="contacts-heading"
    >
      {/* Контакты */}
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2
          id="contacts-heading"
          className="mb-8 text-center text-3xl font-bold tracking-tight text-foreground"
        >
          Контакты
        </h2>

        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4" role="list">
          {CONTACTS.map(({ id, label, href, className }) => (
            <li key={id} className="flex justify-center">
              <Link
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} group inline-flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring`}
              >
                {/* Иконка заменяется на текст, чтобы не тянуть сторонние SVG. При желании подключите lucide-react. */}
                <span className="text-sm font-medium group-hover:scale-110 group-active:scale-95">
                  {label[0]}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Футер с юридической информацией */}
      <footer className="border-t border-muted bg-muted/50 py-8 text-sm leading-relaxed text-muted-foreground">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 font-medium text-foreground">
            Юридическая информация
          </p>

          {/* TODO: замените данные ниже на реальные */}
          <p>
            © 2025 ООО «Компания». Все права защищены. <br />
            ИНН 7700000000 · ОГРН 1234567890123 <br />
            123456, г. Москва, ул. Примерная, д. 1, офис 101 <br />
            E‑mail:&nbsp;
            <Link
              href="mailto:info@example.ru"
              className="underline underline-offset-2 hover:text-primary"
            >
              info@example.ru
            </Link>
          </p>

          <p className="mt-4">
            Политика обработки персональных данных публикуется &nbsp;
            <Link
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-primary"
            >
              по этой ссылке
            </Link>
            . Обработка персональных данных осуществляется в соответствии с
            требованиями Федерального закона № 152‑ФЗ «О персональных данных» и
            лимитируется целями обратной связи по&nbsp;инициативе пользователя.
          </p>

          <p className="mt-4">
            Настоящий сайт использует &nbsp;
            <Link
              href="/cookies"
              className="underline underline-offset-2 hover:text-primary"
            >
              файлы cookies
            </Link>
            &nbsp;для функционирования. Продолжая работу с сайтом, вы выражаете
            согласие на их использование.
          </p>
        </div>
      </footer>
    </section>
  );
}
