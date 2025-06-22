import Navigation from "@/components/Navigation";
import {
  HeroSection,
  TechStackSection,
  AchievementsSection,
  ValuesSection,
  AvailabilitySection,
} from "@/components/about";
import { techStack, achievements, values, techNames } from "@/lib/about-data";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <HeroSection techNames={techNames} />
      <TechStackSection techStack={techStack} />
      <AchievementsSection achievements={achievements} />
      <ValuesSection values={values} />
      <AvailabilitySection />
    </div>
  );
};

export default About;
