import About from "@/components/about";
import Calendar from "@/components/calendar";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
      </div>
      <Experience />
      <div className="flex flex-col items-center px-4">
        <Skills />
        <Calendar />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
