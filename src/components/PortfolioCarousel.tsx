import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Project } from "@/lib/types.ts";

interface PortfolioCarouselProps {
  projects: Project[]
}

const PortfolioCarousel = ({projects}: PortfolioCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavLive = () => {
    const url = projects[currentIndex].liveUrl;
    if (url) {
      window.open(url, "_blank");
    }
  };

  const handleNavGit = () => {
    const url = projects[currentIndex].githubUrl;
    if (url) {
      window.open(url, "_blank");
    }
  };

  console.log(projects, 'projects')

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1,
    );
  }, []);

  const previous = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1,
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative h-[600px] overflow-hidden rounded-2xl bg-muted/20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* Project Image */}
            <>
              {!projects[currentIndex].isGallery ? (
                <div className="relative overflow-hidden">
                  <motion.img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                </div>
              ) : (
                <motion.div
                  className="grid grid-cols-2 gap-2 p-4 bg-muted"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <>
                    {(projects[currentIndex].galleryImages ?? []).map(({ src, href }, idx) => (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <img
                          src={src}
                          alt={`Landing ${idx + 1}`}
                          className="w-full h-full object-cover rounded-xl shadow-sm group-hover:scale-[1.03] transition-transform"
                        />
                      </a>
                    ))}
                  </>
                </motion.div>
              )}
            </>

            {/* Project Details */}
            <div
              className="absolute bottom-0 left-0 right-0 lg:relative lg:bottom-auto p-8 lg:p-12 text-white lg:text-foreground bg-gradient-to-t from-black/80 to-black/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Badge variant="secondary" className="mb-4">
                  {projects[currentIndex].category}
                </Badge>

                <h3 className="text-3xl font-bold mb-4">
                  {projects[currentIndex].title}
                </h3>

                <p className="text-lg mb-6 opacity-90 lg:opacity-70">
                  {projects[currentIndex].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentIndex].technologies.map((tech, index) => (
                    <div key={index}>
                      <Badge variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {projects[currentIndex].liveUrl && (
                    <Button variant="default" size="sm" className="group" onClick={handleNavLive}>
                      <ExternalLink className="z-5 w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  )}
                  {projects[currentIndex].githubUrl && (
                    <Button variant="outline" size="sm" className="group" onClick={handleNavGit}>
                      <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      View Code
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          onClick={previous}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background"
          onClick={next}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-foreground scale-110"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
            )}
          />
        ))}
      </div>

      {/* Project Counter */}
      <div className="text-center mt-4 text-sm text-muted-foreground">
        {currentIndex + 1} / {projects.length}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
