import { motion } from "framer-motion";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";

interface TechItem {
  name: string;
  icon: string;
  years: string;
}

interface TechStackSectionProps {
  techStack: TechItem[];
}

const TechStackSection = ({ techStack }: TechStackSectionProps) => {
  // Memoize animation variants
  const sectionAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }), []);

  const cardAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
    whileHover: { scale: 1.05, rotateY: 5 }
  }), []);

  const techIconRotationVariants = useMemo(() => 
    techStack.map((_, index) => ({
      animate: { rotate: [0, 10, -10, 0] },
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "easeInOut" as const
      }
    })), [techStack]
  );

  return (
    <section className="py-20 lg:py-32 relative">
      <ParallaxSection speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...sectionAnimationVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Tech <span className="text-gradient">Stack</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My arsenal of modern frontend technologies and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                {...cardAnimationVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full border-muted hover:border-foreground/20 transition-all duration-300 group-hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-4xl mb-4"
                      {...techIconRotationVariants[index]}
                    >
                      {tech.icon}
                    </motion.div>
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {tech.years} years
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default TechStackSection; 