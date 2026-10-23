import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { TrainingCoursesTimeline } from "@/components/about/timelines/training-courses-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";
import { DATA } from "@/data";

export default function AboutPage() {
  const { education, experience, profile, trainingCourses } = DATA.about;
  const tech = DATA.about.technologies;

  return (
    <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-foreground">
      <PageHeader texts={DATA.morphingTexts.about} />
      <ProfileCard
        description={profile.description}
        name={profile.name}
        title={profile.title}
      />

      <EducationTimeline education={education} />
      <ExperienceTimeline experience={experience} />
      <TrainingCoursesTimeline trainingCourses={trainingCourses} />
      <Skills tech={tech} />
    </section>
  );
}
