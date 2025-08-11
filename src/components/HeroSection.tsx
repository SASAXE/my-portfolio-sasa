
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center h-full pt-24 pb-12">
        {/* Left Side - Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0">
          <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 lg:w-80 lg:h-[28rem] rounded-lg overflow-hidden border-2 border-silver-300/50 shadow-[0_0_15px_5px_rgba(192,192,192,0.3)] hover:shadow-[0_0_25px_10px_rgba(192,192,192,0.4)] transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-silver-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-silver-300/30 rounded-lg group-hover:border-silver-300/70 transition-all duration-500"></div>
            <OptimizedImage
              src="/images/sasa-avatar.png"
              alt="Sasanka Hemakumara - Professional headshot"
              width={320}
              height={448}
              priority={true}
              useWebp={false}
              fallbackSrc="/images/sasa-avatar.png"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 90vw, 24rem"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-12">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 text-white tracking-tight leading-tight">
              <div className="font-crimson drop-shadow-2xl">
                <span className="animate-pulse-fade">
                  <CSSAnimatedText 
                    text="Sasanka Hemakumara"
                    delay={30}
                  />
                </span>
              </div>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-blue-200/90 italic mb-4 sm:mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light drop-shadow-lg">
              "Crafting solutions that matter—one step at a time."
            </p>
            
            {/* Primary action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-5 sm:mb-6">
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
            
            {/* Social buttons */}
            <div className="flex justify-center lg:justify-start items-center space-x-4 sm:space-x-6 mb-10 sm:mb-12 transform translate-x-1 sm:translate-x-2">
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
