import { HeroSection } from "@/components/home/hero";
import { SkillsOverviewSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";
import { DATA } from "@/data";

export default function HomePage() {
  const healthcareProjects = DATA.projects.work.filter(
    (project) =>
      project.category === "Healthcare & Digital Government Services",
  );

  return (
    <>
      <HeroSection />
      <SkillsOverviewSection />
      <WorkSection work={healthcareProjects} />
    </>
  );
}
