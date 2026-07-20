import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Platform } from "@/components/sections/Platform";
import { Privacy } from "@/components/sections/Privacy";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <Features />
        <Showcase />
        <HowItWorks />
        <Platform />
        <Privacy />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
