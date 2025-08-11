
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 flex flex-col items-center justify-center h-full">
        <div className="animate-fade-in w-full flex flex-col items-center">
          <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 mx-auto mb-6 sm:mb-8 rounded-lg overflow-hidden border-2 border-silver-300/50 shadow-[0_0_15px_5px_rgba(192,192,192,0.3)] hover:shadow-[0_0_25px_10px_rgba(192,192,192,0.4)] transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-silver-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-silver-300/30 rounded-lg group-hover:border-silver-300/70 transition-all duration-500"></div>
            <OptimizedImage
              src="/images/sasa-avatar.png"
              alt="Sasanka Hemakumara - Professional headshot"
              width={288}
              height={384}
              priority={true}
              useWebp={false}
              fallbackSrc="/images/sasa-avatar.png"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 12rem, (max-width: 768px) 14rem, (max-width: 1024px) 16rem, 18rem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
