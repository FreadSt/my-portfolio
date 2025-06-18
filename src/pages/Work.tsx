import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import ParallaxSection from "@/components/ParallaxSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import img1 from "../../public/fread-e-commerce.png"
import prev1 from "../../public/e-commerce-code.png"

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  year: string;
  role: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern, responsive e-commerce solution",
    longDescription:
      "A comprehensive e-commerce platform built with MERN, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. The platform handles thousands of products and processes hundreds of orders daily with 99.9% uptime.",
    image: img1 as string,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Web Development",
    year: "2024",
    role: "Full-Stack Developer",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure financial management on mobile",
    longDescription:
      "A cutting-edge mobile banking application featuring biometric authentication, real-time transaction processing, and comprehensive financial management tools. Built with React Native and integrated with multiple banking APIs to provide seamless user experience across iOS and Android platforms.",
    image: "/api/placeholder/1200/800",
    technologies: ["React Native", "TypeScript", "Firebase", "REST APIs"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Mobile Development",
    year: "2023",
    role: "Mobile Developer",
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    description: "Intelligent business insights platform",
    longDescription:
      "An AI-powered analytics dashboard that provides real-time insights and predictive analytics for business decision making. Features machine learning algorithms for trend analysis, custom data visualizations, and automated reporting systems that help businesses optimize their operations.",
    image: "/api/placeholder/1200/800",
    technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Data Science",
    year: "2023",
    role: "Full-Stack Developer",
  },
  {
    id: 4,
    title: "Social Media Management",
    description: "Complete social media automation suite",
    longDescription:
      "A comprehensive social media management platform with advanced scheduling capabilities, detailed analytics, and multi-platform posting. The tool integrates with major social networks and provides AI-powered content suggestions, helping businesses maintain consistent online presence.",
    image: "/api/placeholder/1200/800",
    technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Bull Queue"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "SaaS",
    year: "2022",
    role: "Lead Developer",
  },
];

const ProjectSection = ({
                          project,
                          index,
                        }: {
  project: Project;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
        <div className="relative w-full h-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover backdrop-filter"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {project.category}
              </Badge>
              <div className="text-sm text-white/70">
                {project.year} • {project.role}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-white/30 text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex gap-4">
              {project.liveUrl && (
                <Button variant="default" className="group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-black"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white/50 text-sm">
                    Project #{index + 1}
                  </div>
                </div>

                <div className="space-y-4">
                  <img src={prev1 as string} alt=""/>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {index < projects.length - 1 && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      )}
    </section>
  );
};

const Work = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center portfolio-gradient overflow-hidden"
      >
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
              About My Work
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Project</span>
              <br />
              Journey
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore the projects that shaped my career and showcase my
              expertise across different technologies and industries.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}

      {/* Summary Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for your{" "}
              <span className="text-gradient">next project?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with the same
              passion and expertise demonstrated in these projects.
            </p>
            <Button size="lg" className="group">
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;
