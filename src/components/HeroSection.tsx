
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-center h-full py-12">
        {/* Left Side - Profile Picture */}
        <div className="w-full lg:w-5/12 flex items-center justify-center h-full lg:py-12">
          <div className="w-48 h-60 sm:w-54 sm:h-72 md:w-60 md:h-[21rem] lg:w-72 lg:h-[24rem] rounded-lg overflow-hidden border-2 border-silver-300/50 shadow-[0_0_15px_5px_rgba(192,192,192,0.3)] hover:shadow-[0_0_25px_10px_rgba(192,192,192,0.4)] transition-all duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-silver-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 border-2 border-silver-300/30 rounded-lg group-hover:border-silver-300/70 transition-all duration-500"></div>
            <OptimizedImage
              src="/images/sasa-avatar.png"
              alt="Sasanka Hemakumara - Professional headshot"
              width={384}
              height={512}
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
        <div className="w-full lg:w-6/12 text-center lg:text-left lg:pl-12 flex items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight">
              <div className="font-crimson drop-shadow-2xl">
                <CSSAnimatedText 
                  text="Sasanka Hemakumara"
                  delay={30}
                />
              </div>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-blue-200/90 italic mb-6 sm:mb-8 leading-relaxed font-light drop-shadow-lg">
              "Crafting solutions that matter—one step at a time."
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 sm:mb-10">
              <GradientButton 
                className="px-8 py-3 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </GradientButton>
              <GradientButton 
                variant="variant"
                className="px-8 py-3 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </GradientButton>
            </div>
            
            {/* Social Buttons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com/SASAXE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white/20 hover:border-white/40"
              >
                <Github className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/in/sasahemakumara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-400/30 hover:border-blue-300/40"
              >
                <Linkedin className="w-6 h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ArrowDown 
          className="w-6 h-6 text-blue-200 cursor-pointer hover:text-white transition-colors"
          onClick={() => scrollToSection('projects')}
        />
      </div>
    </section>
  );
};

export default HeroSection;
