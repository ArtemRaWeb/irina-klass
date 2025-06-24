import Contacts from "@/app/components/moleculas/Contacts";
import FAQSection from "@/app/components/moleculas/FAQSection";
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
        className="min-h-screen snap-start flex items-center justify-center px-4 max-w-6xl mx-auto"
      >
        <Hero />
      </section>

      <section
        id={SectionIds.FEATURES}
        className="min-h-screen snap-start flex items-center justify-center max-w-6xl mx-auto"
      >
        <Features />
      </section>
      <section
        id={SectionIds.SHOWCASE}
        className="min-h-screen snap-start flex items-center justify-center max-w-6xl mx-auto"
      >
        <Showcase />
      </section>
      <section
        id={SectionIds.FAQ}
        className="min-h-screen snap-start flex items-center justify-center max-w-6xl mx-auto"
      >
        <FAQSection />
      </section>
      <section
        id={SectionIds.CONTACTS}
        className="min-h-screen snap-start flex items-center justify-center"
      >
        <Contacts />
      </section>
    </main>
  );
}
