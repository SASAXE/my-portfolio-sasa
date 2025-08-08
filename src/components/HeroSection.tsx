
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import CSSAnimatedText from "@/components/ui/css-split-text";
import OptimizedImage from "@/components/ui/optimized-image";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden border-3 border-white/80 shadow-xl backdrop-blur-sm animate-float relative flex-shrink-0">
            <OptimizedImage
              src="/images/sasa-avatar.png"
              alt="Sasanka Hemakumara - Professional headshot"
              width={224}
              height={224}
              priority={true}
              useWebp={false}
              fallbackSrc="/images/sasa-avatar.png"
              className="hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 rounded-full"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 text-white tracking-tight leading-tight">
            <div className="font-crimson drop-shadow-2xl">
              <CSSAnimatedText 
                text="Sasanka Hemakumara"
                delay={30}
              />
            </div>
          </h1>
          

          <p className="text-base sm:text-lg md:text-xl text-blue-200/90 italic mb-4 sm:mb-5 max-w-2xl mx-auto leading-relaxed px-4 font-light drop-shadow-lg">
            "Crafting solutions that matter—one step at a time."
          </p>
          
          {/* Primary action buttons centered */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-5 sm:mb-6 px-4">
            <GradientButton 
              className="px-6 sm:px-8 py-2.5 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </GradientButton>
            <GradientButton 
              variant="variant"
              className="px-6 sm:px-8 py-2.5 text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </GradientButton>
          </div>
          
          {/* Social buttons centered */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-10 sm:mb-12 transform translate-x-1 sm:translate-x-2">
            <a 
              href="https://github.com/SASAXE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-100 transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/sasahemakumara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-400/30 hover:border-blue-300/40"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator centered to the screen */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown 
          className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection('projects')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
