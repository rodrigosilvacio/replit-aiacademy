import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CourseInfo } from "@/components/sections/CourseInfo";
import { Pricing } from "@/components/sections/Pricing";
import { Speaker } from "@/components/sections/Speaker";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <CourseInfo />
        <Pricing />
        <Speaker />
        <About />
        <FAQ />
        <LeadForm />
      </div>
      <Footer />
    </main>
  );
}
