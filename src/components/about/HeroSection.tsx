import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Rocket, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  techNames: string[];
}

const HeroSection = ({ techNames }: HeroSectionProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Framer Motion hooks must be called at the top-level (not inside useMemo).
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const springConfig = useMemo(
    () => ({ stiffness: 100, damping: 30, restDelta: 0.001 }),
    [],
  );
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 150]), springConfig);

  // Memoize animation variants
  const heroAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.2 }
  }), []);

  const titleAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.4 }
  }), []);

  const descriptionAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.6 }
  }), []);

  const techBadgesAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.8 }
  }), []);

  const scrollIndicatorAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 1.2 }
  }), []);

  const floatingAnimationConfigs = useMemo(() => [
    { duration: 20, repeat: Infinity, ease: "linear" as const },
    { duration: 25, repeat: Infinity, ease: "linear" as const },
    { duration: 30, repeat: Infinity, ease: "linear" as const }
  ], []);

  const techBadgeAnimationConfigs = useMemo(() => 
    techNames.map((_, index) => ({
      duration: 2,
      repeat: Infinity,
      delay: index * 0.2,
      ease: "easeInOut" as const
    })), [techNames]
  );

  const titlePulseVariants = useMemo(() => ({
    animate: { opacity: [0.7, 1, 0.7] },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }), []);

  const scrollIndicatorBounceVariants = useMemo(() => ({
    animate: { y: [0, 10, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }), []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          style={{ scale }}
        />

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
          style={{ y: y1 }}
          animate={{ rotate: 360 }}
          transition={floatingAnimationConfigs[0]}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"
          style={{ y: y2 }}
          animate={{ rotate: -360 }}
          transition={floatingAnimationConfigs[1]}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
          style={{ y: y3 }}
          animate={{ rotate: 360 }}
          transition={floatingAnimationConfigs[2]}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-4"
        style={{ y, opacity }}
      >
        <motion.div {...heroAnimationVariants}>
          <Badge
            variant="outline"
            className="text-sm px-6 py-3 mb-8 backdrop-blur-sm"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Frontend Developer
          </Badge>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
            {...titleAnimationVariants}
          >
            <span className="text-gradient bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text">
              Significant
            </span>
            <br />
            <motion.span
              className="text-muted-foreground"
              {...titlePulseVariants}
            >
              Experience
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            {...descriptionAnimationVariants}
          >
            Crafting exceptional digital experiences with React, TypeScript,
            and modern web technologies. Passionate about performance,
            accessibility, and user-centered design.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            {...techBadgesAnimationVariants}
          >
            {techNames.map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full text-sm font-medium"
                animate={{ y: [0, -5, 0] }}
                transition={techBadgeAnimationConfigs[index]}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        {...scrollIndicatorAnimationVariants}
      >
        <motion.div
          {...scrollIndicatorBounceVariants}
          className="text-muted-foreground"
        >
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 