import { SectionIds } from "@/app/constants/config";
import { Hero } from "./components/moleculas/Hero";
import { Navbar } from "./components/moleculas/ui/Navbar";

export default function Main() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll bg-[var(--c-bg)]">
      {/* Navbar is fixed */}
      <Navbar />

      {/* Sections */}
      <section
        id={SectionIds.HERO}
        className="min-h-screen snap-start flex items-center justify-center px-4"
      >
        <Hero />
      </section>

      {/* Placeholder sections (replace later) */}
      <section
        id={SectionIds.FEATURES}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        {/* TODO: FeaturesSection */}
      </section>
      <section
        id={SectionIds.SHOWCASE}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        {/* TODO: ShowcaseSection */}
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
