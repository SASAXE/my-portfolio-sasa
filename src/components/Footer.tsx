
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Name removed as requested */}
          </div>
          

          

        </div>
        
        <div className="border-t border-blue-400/30 pt-6 sm:pt-8 text-center">
          <p className="text-blue-100 text-xs sm:text-sm">
            © {currentYear} SasankaHemakumara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
