
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "King County Washington House Sales Dashboard",
      description: "Interactive dashboard analyzing house sales data using Tableau and Excel with comprehensive data visualization and trend analysis.",
      technologies: ["Tableau", "Excel", "Data Analytics"],
      liveLink: "https://public.tableau.com/app/profile/sasanka.hemakumara/viz/KingCountywashingtonHouseSalesDashboard/KingCountrywashingtonHealthSalesDashboard",
      category: "Data Visualization"
    },
    {
      title: "British Airways Review Dashboard",
      description: "Comprehensive dashboard analyzing British Airways customer reviews using Tableau and Excel for insights into customer satisfaction trends.",
      technologies: ["Tableau", "Excel", "Data Analysis"],
      liveLink: "https://public.tableau.com/app/profile/sasanka.hemakumara/viz/Britishairways_17191338742290/Dashboard1",
      category: "Business Intelligence"
    },
    {
      title: "World Happiness Data Dashboard",
      description: "Interactive visualization of global happiness indicators using Tableau to explore correlations between various factors affecting world happiness.",
      technologies: ["Tableau", "Data Visualization", "Statistical Analysis"],
      liveLink: "https://public.tableau.com/app/profile/sasanka.hemakumara/viz/WorldHappinessData_17192436212060/Sheet2",
      category: "Social Analytics"
    },
    {
      title: "Coffee Orders Dashboard",
      description: "Excel-based dashboard for tracking and analyzing coffee order patterns with advanced formulas and pivot tables for business insights.",
      technologies: ["Excel", "VBA", "Pivot Tables"],
      githubLink: "https://github.com/SASAXE/Project_Coffee_Orders",
      category: "Business Analytics"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Here are some of my recent data analytics projects showcasing my skills in 
            data visualization, dashboard creation, and business intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 bg-blue-600/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full">
              <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                <div className="mb-4 flex-grow">
                  <span className="inline-block px-2 sm:px-3 py-1 bg-blue-500/50 text-blue-100 text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-700/50 text-blue-200 text-xs sm:text-sm rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                  {project.liveLink && (
                    <Button 
                      variant="default"
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1 text-xs sm:text-sm"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      View Dashboard
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button 
                      variant="outline"
                      size="sm"
                      className="border-blue-400 text-blue-200 hover:bg-blue-600 hover:text-white flex-1 text-xs sm:text-sm"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
