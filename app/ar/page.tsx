import { AR_DATA } from "@/data/localized";
import { DATA } from "@/data";
import { HeroSection } from "@/components/home/hero";
import { SkillsOverviewSection } from "@/components/home/skills-overview";
import { WorkSection } from "@/components/home/work";

export default function ArabicHomePage() {
  const arabicProjects = DATA.projects.work
    .filter(
      (project) =>
        project.category === "Healthcare & Digital Government Services",
    )
    .map((project) => {
      const translationIndexById: Record<number, number> = {
        7: 7,
        8: 8,
        9: 9,
        11: 10,
      };
      const translation =
        AR_DATA.projects.projectsDetails[translationIndexById[Number(project.id)]];

      return {
        ...project,
        ...translation,
        platforms: translation.platforms,
        qaResponsibilities: translation.qaResponsibilities,
        overview: translation.overview,
      };
    });

  const arabicSkills = DATA.home.skills.overview.map((skill, index) => ({
    ...skill,
    name: AR_DATA.home.skillOverview[index].name,
  }));

  return (
    <div dir="rtl">
      <HeroSection
        downloadLabel={AR_DATA.home.downloadCv}
        greeting="مرحباً، أنا"
        name={AR_DATA.home.name}
        jobTitle="مهندسة ضمان جودة البرمجيات"
        subtitle={AR_DATA.home.subtitle}
        title={AR_DATA.home.title}
        viewWorkLabel={AR_DATA.home.viewWork}
      />
      <SkillsOverviewSection
        overview={arabicSkills}
        sectionDescription={AR_DATA.home.skillsDescription}
        sectionTitle={AR_DATA.home.skillsTitle}
      />
      <WorkSection
        modalLabels={AR_DATA.home.projectModal}
        sectionDescription={AR_DATA.home.projectsDescription}
        sectionTitle={AR_DATA.home.projectsTitle}
        viewDetailsLabel={AR_DATA.home.projectViewDetails}
        work={arabicProjects}
      />
    </div>
  );
}
