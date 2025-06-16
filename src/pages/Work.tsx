import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";

const Work = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-24 pb-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Explore my portfolio of projects, case studies, and creative
              solutions.
            </p>

            <Card className="border-muted">
              <CardContent className="p-12">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold text-muted-foreground">
                      Work Page Coming Soon
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      This page is under construction and will be available
                      shortly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;
