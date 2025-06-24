import Features from "@/app/components/moleculas/Features";
import Hero from "@/app/components/moleculas/Hero";
import Showcase from "@/app/components/moleculas/Showcase";
import Navbar from "@/app/components/moleculas/ui/Navbar";
import { SectionIds } from "@/app/constants/config";

export default function Main() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll bg-[var(--c-bg)]">
      <Navbar />

      <section
        id={SectionIds.HERO}
        className="min-h-screen snap-start flex items-center justify-center px-4"
      >
        <Hero />
      </section>

      <section
        id={SectionIds.FEATURES}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        <Features />
      </section>
      <section
        id={SectionIds.SHOWCASE}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        <Showcase />
      </section>
      <section
        id={SectionIds.TESTIMONIALS}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        {/* TODO: TestimonialsSection */}
      </section>
      <section
        id={SectionIds.FAQ}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        {/* TODO: FAQSection */}
      </section>
      <section
        id={SectionIds.CONTACTS}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        {/* TODO: ContactsSection */}
      </section>
    </main>
  );
}
