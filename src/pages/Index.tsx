
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full">
      <BeamsBackground intensity="medium" className="fixed inset-0 -z-10" />
      <div className="relative z-10 min-h-screen w-full flex flex-col">
        <Navigation />
        <main className="flex-1">
          <div id="home" className="min-h-screen flex items-center">
            <HeroSection />
          </div>
          <div id="projects" className="min-h-screen py-20">
            <ProjectsSection />
          </div>
          <div id="about" className="min-h-screen py-20">
            <AboutSection />
          </div>
          <div id="contact" className="min-h-screen py-20">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
