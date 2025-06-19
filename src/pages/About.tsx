import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import ParallaxSection from "@/components/ParallaxSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  Zap,
  Users,
  Target,
  Heart,
  Lightbulb,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Coffee,
  Rocket,
  Globe,
  Palette,
  Database,
  Smartphone,
} from "lucide-react";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springConfig,
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig,
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 150]),
    springConfig,
  );

  const techStack = [
    { name: "React", icon: "⚛️", years: "3+" },
    { name: "TypeScript", icon: "📘", years: "2+" },
    { name: "Next.js", icon: "🔺", years: "1.5+" },
    { name: "Tailwind CSS", icon: "🎨", years: "1.5+" },
    { name: "Framer Motion", icon: "🎬", years: "1+" },
    { name: "Node.js", icon: "🟢", years: "1+" },
    { name: "GraphQL", icon: "🔗", years: "1+" },
    { name: "Vercel", icon: "☁️", years: "3+" },
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "83% Faster Load",
      description:
        "Suggested and implemented a performance optimization for an AI email service, reducing load time by 83%",
      metric: "83% faster",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description:
        "Led a team of 6 engineers in developing Neptunes Sushi website from scratch to launch",
      metric: "6 devs",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Investor Interest",
      description:
        "Launched an AI Email Generator that attracted multiple investor inquiries",
      metric: "Investor-ready",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Client-Facing Delivery",
      description:
        "Delivered multiple client projects on time under tight deadlines, aligning with all specifications",
      metric: "100% delivery",
    },
  ];

  const values = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric",
      description: "Putting user experience at the heart of every decision",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focusing on outcomes that deliver real business value",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />

      {/* Hero Section with Parallax Background */}
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
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-48 h-48 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-xl"
            style={{ y: y2 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
            style={{ y: y3 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center max-w-6xl mx-auto px-4"
          style={{ y, opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="text-sm px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <Rocket className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text">
                Significant
              </span>
              <br />
              <motion.span
                className="text-muted-foreground"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Experience
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting exceptional digital experiences with React, TypeScript,
              and modern web technologies. Passionate about performance,
              accessibility, and user-centered design.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <>
                {["React", "TypeScript", "Next.js", "Tailwind"].map(
                  (tech, index) => (
                    <motion.div
                      key={tech}
                      className="px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full text-sm font-medium"
                      animate={{ y: [0, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      {tech}
                    </motion.div>
                  ),
                )}
              </>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-muted-foreground"
          >
            <ArrowRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 lg:py-32 relative">
        <ParallaxSection speed={0.2}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="group"
                >
                  <Card className="h-full border-muted hover:border-foreground/20 transition-all duration-300 group-hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        className="text-4xl mb-4"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: "easeInOut",
                        }}
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

      {/* Experience & Achievements */}
      <section className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-muted/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full border-muted hover:border-foreground/20 transition-all duration-300 group-hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0 w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
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

      {/* Values & Mindset */}
      <section className="py-20 lg:py-32 relative">
        <ParallaxSection speed={0.3}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-foreground to-muted-foreground text-background rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
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

      {/* Availability Section */}
      <section className="py-20 lg:py-32 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 text-green-600 mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="max-w-md mx-auto bg-background/80 backdrop-blur-sm border-muted/50 hover:border-foreground/20 transition-all duration-300">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
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

      {/* Floating Action Elements */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button
            size="icon"
            className="w-14 h-14 rounded-full shadow-lg bg-foreground text-background hover:shadow-xl transition-shadow"
          >
            <ArrowRight className="w-6 h-6 -rotate-90" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
