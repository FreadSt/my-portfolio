import { motion } from "framer-motion";
import { useMemo } from "react";
import ParallaxSection from "@/components/ParallaxSection";
import { ReactNode } from "react";

interface Value {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  values: Value[];
}

const ValuesSection = ({ values }: ValuesSectionProps) => {
  // Memoize animation variants
  const sectionAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }), []);

  const valueAnimationVariants = useMemo(() => 
    values.map((_, index) => ({
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: index * 0.15 },
      viewport: { once: true },
      whileHover: { y: -10 }
    })), [values]
  );

  const valueIconAnimationVariants = useMemo(() => ({
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: "spring" as const, stiffness: 400 }
  }), []);

  return (
    <section className="py-20 lg:py-32 relative">
      <ParallaxSection speed={0.3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            {...sectionAnimationVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Values & <span className="text-gradient">Mindset</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide my approach to development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                {...valueAnimationVariants[index]}
                className="text-center group"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-foreground to-muted-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow"
                  {...valueIconAnimationVariants}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default ValuesSection; 