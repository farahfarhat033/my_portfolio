import { AR_DATA } from "@/data/localized";
import { ProfileCard } from "@/components/about/profile-card";
import { EducationTimeline } from "@/components/about/timelines/education-timeline";
import { ExperienceTimeline } from "@/components/about/timelines/experience-timeline";
import { TrainingCoursesTimeline } from "@/components/about/timelines/training-courses-timeline";
import { Skills } from "@/components/about/skills";
import { PageHeader } from "@/components/page-header";

export default function ArabicAboutPage() {
  const { about } = AR_DATA;

  return (
    <section
      dir="rtl"
      className="mx-auto max-w-5xl px-6 py-20 text-foreground md:px-12"
    >
      <PageHeader texts={[about.title, "الخبرة", "المهارات"]} />
      <ProfileCard
        description={about.description}
        name={AR_DATA.home.name}
        title={about.profileTitle}
      />
      <EducationTimeline
        education={about.educationItems}
        title={about.education}
      />
      <ExperienceTimeline
        experience={about.experienceItems}
        title={about.experience}
      />
      <TrainingCoursesTimeline
        title={about.trainingCourses}
        trainingCourses={about.trainingCourseItems}
      />
      <Skills
        categoryLabels={about.categoryLabels}
        tech={about.technologies}
        title={about.skills}
      />
    </section>
  );
}
