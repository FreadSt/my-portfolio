import { motion } from "framer-motion";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
}

const AchievementsSection = ({ achievements }: AchievementsSectionProps) => {
  // Memoize animation variants
  const sectionAnimationVariants = useMemo(() => ({
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  }), []);

  const achievementCardAnimationVariants = useMemo(() => 
    achievements.map((_, index) => ({
      initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, delay: index * 0.2 },
      viewport: { once: true },
      whileHover: { scale: 1.02 }
    })), [achievements]
  );

  const rotationAnimationVariants = useMemo(() => ({
    whileHover: { rotate: 360 },
    transition: { duration: 0.6 }
  }), []);

  return (
    <section className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          {...sectionAnimationVariants}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable results through innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              {...achievementCardAnimationVariants[index]}
              className="group"
            >
              <Card className="h-full border-muted hover:border-foreground/20 transition-all duration-300 group-hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center"
                      {...rotationAnimationVariants}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="font-mono">
                        {achievement.metric}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 