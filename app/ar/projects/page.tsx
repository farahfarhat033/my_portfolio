"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { Project } from "@/components/projects/types";
import { DATA } from "@/data";
import { AR_DATA } from "@/data/localized";

const arabicProjectOrder = [0, 1, 2, 5, 6, 3, 7, 8, 9, 4, 10];

export default function ArabicProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    AR_DATA.projects.all,
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = useMemo(
    () =>
      DATA.projects.work.map((project, index) => {
        const translation =
          AR_DATA.projects.projectsDetails[arabicProjectOrder[index]];

        return {
          ...project,
          ...translation,
          details: translation.overview,
        };
      }),
    [],
  );

  const categories = useMemo(
    () => [
      AR_DATA.projects.all,
      ...new Set(projects.map((project) => project.category)),
    ],
    [projects],
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === AR_DATA.projects.all
        ? projects
        : projects.filter((project) => project.category === selectedCategory),
    [projects, selectedCategory],
  );

  const groupedProjects = filteredProjects.reduce(
    (groups: Record<string, Project[]>, project) => {
      (groups[project.category] ??= []).push(project);
      return groups;
    },
    {},
  );

  return (
    <section dir="rtl" className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold">{AR_DATA.projects.title}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-foreground-600">
        {AR_DATA.projects.description}
      </p>
      <p className="mx-auto mb-10 mt-4 max-w-3xl text-center text-sm text-foreground-500">
        {AR_DATA.projects.confidentiality}
      </p>

      <ProjectsTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
        <section key={category} className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-primary-500">{category}</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewDetailsLabel={AR_DATA.projects.viewDetails}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>
      ))}

      <ProjectModal
        isOpen={!!selectedProject}
        labels={AR_DATA.projects.modal}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
