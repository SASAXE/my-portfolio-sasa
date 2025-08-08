
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { MatrixBackground } from "@/components/MatrixRain";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <MatrixBackground 
        density={0.9}
        speed={1.2}
        colors={['#00ff41', '#00d4aa', '#0099cc', '#66ff66', '#00ffff']}
      >
        <div className="relative z-20 min-h-screen w-full flex flex-col">
          <Navigation />
          <main className="flex-1">
            <div id="home">
              <HeroSection />
            </div>
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </MatrixBackground>
    </div>
  );
};

export default Index;
