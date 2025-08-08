
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import SplitText from "@/components/ui/split-text";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 sm:mb-10 rounded-full overflow-hidden border-4 border-white shadow-2xl animate-float">
            <img 
              src="/lovable-uploads/e8845733-aecb-4a5b-9a45-e4c13643b02d.png" 
              alt="Sasanka Hemakumara - Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white tracking-tight leading-tight">
            <div className="font-crimson">
              <SplitText 
                text="Sasanka Hemakumara"
                delay={30}
                loop={true}
                loopInterval={2000} // 2 seconds between animations
              />
            </div>
          </h1>
          

          <p className="text-lg sm:text-xl md:text-2xl text-blue-200 italic mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            "Crafting solutions that matter—one step at a time."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <GradientButton 
              className="px-6 sm:px-8 py-3 text-sm sm:text-base"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </GradientButton>
            <GradientButton 
              variant="variant"
              className="px-6 sm:px-8 py-3 text-sm sm:text-base"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </GradientButton>
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16">
            <a 
              href="https://github.com/SASAXE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-white/20"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/sasahemakumara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:bg-blue-400/30"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown 
            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-200 cursor-pointer hover:text-white transition-colors"
            onClick={() => scrollToSection('projects')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
