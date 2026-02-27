import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CourseInfo } from "@/components/sections/CourseInfo";
import { About } from "@/components/sections/About";
import { LeadForm } from "@/components/sections/LeadForm";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <CourseInfo />
        <About />
        <LeadForm />
      </div>
      <Footer />
    </main>
  );
}
