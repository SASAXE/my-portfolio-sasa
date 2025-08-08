
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Suspense, lazy } from "react";

// Lazy load heavy animation components
const MatrixBackground = lazy(() => 
  import("@/components/MatrixRain").then(module => ({ default: module.MatrixBackground }))
);

// Fallback component while Matrix Rain loads
const MatrixFallback = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black" />
);

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Suspense fallback={<MatrixFallback />}>
        <MatrixBackground 
          density={0.35}
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
      </Suspense>
    </div>
  );
};

export default Index;
