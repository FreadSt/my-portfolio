import { motion } from "framer-motion";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, ArrowRight } from "lucide-react";

const AvailabilitySection = () => {
  // Memoize animation variants
  const sectionAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }), []);

  const ctaAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.3 },
    viewport: { once: true }
  }), []);

  const buttonAnimationVariants = useMemo(() => ({
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }), []);

  const arrowAnimationVariants = useMemo(() => ({
    animate: { x: [0, 5, 0] },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }), []);

  const availabilityAnimationVariants = useMemo(() => ({
    animate: { scale: [1, 1.05, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" as const }
  }), []);

  const backgroundAnimationVariants = useMemo(() => ({
    animate: { backgroundPosition: ["0% 0%", "100% 100%"] },
    transition: { duration: 20, repeat: Infinity, ease: "linear" as const }
  }), []);

  return (
    <section className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"
          {...backgroundAnimationVariants}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.div {...sectionAnimationVariants}>
          <motion.div
            className="inline-flex items-center space-x-2 text-green-600 mb-6"
            {...availabilityAnimationVariants}
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">Available for new projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Always looking for
            <br />
            <span className="text-gradient">new challenges</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life with cutting-edge technology and
            innovative solutions. Let's build something amazing together.
          </p>

          {/* CTA Card */}
          <motion.div {...ctaAnimationVariants}>
            <Card className="max-w-md mx-auto bg-background/80 backdrop-blur-sm border-muted/50 hover:border-foreground/20 transition-all duration-300">
              <CardContent className="p-8">
                <motion.div {...buttonAnimationVariants}>
                  <a
                    href="https://www.linkedin.com/in/freadstr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      size="lg"
                      className="w-full group relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={false}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        <Coffee className="w-5 h-5 mr-2" />
                        Connect via LinkedIn
                        <motion.div
                          className="ml-2"
                          {...arrowAnimationVariants}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </span>
                    </Button>
                  </a>
                </motion.div>

                <p className="text-sm text-muted-foreground mt-4">
                  Response time: Usually within 24 hours
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AvailabilitySection; 