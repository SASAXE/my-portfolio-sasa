
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Have a data analytics project in mind or want to collaborate? I'd love to hear from you. 
            Let's turn your data into meaningful insights together.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <Card className="border-0 bg-blue-500/30 backdrop-blur-sm shadow-lg">
            <CardContent className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Name
                  </label>
                  <Input 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-blue-700/30 border-blue-400/50 text-white placeholder:text-blue-200 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-blue-700/30 border-blue-400/50 text-white placeholder:text-blue-200 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none bg-blue-700/30 border-blue-400/50 text-white placeholder:text-blue-200 text-sm sm:text-base"
                    placeholder="Tell me about your data analytics needs..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
