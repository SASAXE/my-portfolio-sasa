
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, TrendingUp, BarChart3, Database, Code, PieChart, FileSpreadsheet, Brain, Target, Calendar } from "lucide-react";
import { motion } from 'framer-motion';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AboutSection = () => {
  const skills = [
    { name: "Tableau", icon: BarChart3 },
    { name: "Excel", icon: FileSpreadsheet },
    { name: "R Programming", icon: Code },
    { name: "Data Visualization", icon: PieChart },
    { name: "SQL", icon: Database },
    { name: "Power BI", icon: TrendingUp },
    { name: "Statistical Analysis", icon: Brain },
    { name: "Business Intelligence", icon: Target },
    { name: "Data Cleaning", icon: Award },
    { name: "Dashboard Design", icon: GraduationCap },
  ];

  const certifications = [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      year: "2024",
      description: "8 courses covering data collection, processing, analysis, and visualization using industry-standard tools.",
      url: "https://coursera.org/share/5de646f26098408057c94e1dcae4a901"
    },
    {
      title: "Business Analytics with Excel: Elementary to Advanced",
      issuer: "Johns Hopkins University",
      year: "2024",
      description: "Comprehensive course covering Excel fundamentals to advanced data analysis techniques.",
      url: "https://coursera.org/share/881ff39d775e570ed342bb466d00fe45"
    },
    {
      title: "Introduction to Statistics",
      issuer: "Stanford University",
      year: "2023",
      description: "Foundational course in statistical concepts and probability theory.",
      url: "https://coursera.org/share/d5aa9c3f2ffa058dcce7373ef6763a2d"
    },
    {
      title: "Google IT Automation with Python",
      issuer: "Google",
      year: "2024",
      description: "6-course professional certificate program focusing on Python programming for IT automation.",
      url: "https://coursera.org/share/16693aa097b17289cb6094b3dc45e807"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2024",
      description: "Certification in modern web design principles and responsive layouts.",
      url: "https://freecodecamp.org/certification/fcc19c41ae8-0d14-4701-baae-a49b9f89eb15/responsive-web-design"
    },
    {
      title: "The Fundamentals of Digital Marketing",
      issuer: "Google Digital Garage",
      year: "2022",
      description: "Comprehensive course covering digital marketing fundamentals and strategies.",
      url: "#"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Physical Science",
      institution: "University of Colombo",
      duration: "May 2023 - Feb 2026",
      description: "Comprehensive program in Physical Sciences focusing on analytical thinking, research methodologies, and scientific problem-solving. Main subjects: Computer Science, Statistics, and Applied Mathematics."
    },
    {
      degree: "Advanced Level in Physical Sciences",
      institution: "Taxila Central College",
      duration: "Jan 2012 - Oct 2020",
      description: "Specialized in Physical Sciences with strong foundation in mathematics, physics, and analytical reasoning skills."
    }
  ];

  return (
    <>
      {/* About and Skills Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {/* About Me Section */}
            <motion.div className="space-y-6" variants={item}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                About Me
              </h2>
              <div className="bg-blue-800/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10">
                <p className="text-lg text-blue-100 leading-relaxed">
                  I'm a data enthusiast with a passion for turning numbers into clear, actionable insights. Skilled in Power BI, Tableau, Excel, R, and Python, I love solving real-world problems through data—with curiosity, clarity, and purpose.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <motion.div 
                        key={edu.degree} 
                        className="bg-white/5 rounded-lg p-4"
                        variants={item}
                      >
                        <h4 className="font-medium text-white">{edu.degree}</h4>
                        <p className="text-blue-200 text-sm">{edu.institution}</p>
                        <p className="text-blue-300 text-xs mt-1">{edu.duration}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div className="lg:sticky lg:top-24" variants={item}>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">My Skills</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="bg-blue-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-800/40 transition-all duration-300 border border-white/5 hover:border-white/10"
                    variants={item}
                    custom={index}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/10 p-1.5 rounded-md">
                        <skill.icon className="w-4 h-4 text-blue-200" />
                      </div>
                      <span className="text-white text-sm font-medium">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-white">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a 
                key={cert.title} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block h-full"
              >
                <Card className="h-full transition-all duration-300 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/30 hover:translate-y-[-4px] hover:ring-2 hover:ring-blue-400/30 hover:ring-offset-2 hover:ring-offset-slate-900 backdrop-saturate-150">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-2 rounded-lg mr-4 backdrop-blur-sm border border-white/10">
                        <Award className="w-5 h-5 text-purple-200" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
                        <p className="text-purple-200 text-sm">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-purple-300 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{cert.year}</span>
                    </div>
                    <p className="text-purple-100 text-sm leading-relaxed">{cert.description}</p>
                    <div className="mt-3 text-xs text-purple-300 flex items-center">
                      <span>View Certificate</span>
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
