"use client";

import { useState, useMemo } from "react";

import { PageHeader } from "@/components/page-header";
import { ProjectsTabs } from "@/components/projects/projects-tabs";
import { ProjectsGrid } from "@/components/projects/projects-grid";
import { Project } from "@/components/projects/types";
import { DATA } from "@/data";

const ProjectsPage = () => {
  const allProjects = DATA.projects.work;

  const categories = useMemo(
    () => ["All", ...new Set(allProjects.map((project) => project.category))],
    [allProjects],
  );

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? allProjects
        : allProjects.filter(
            (project) => project.category === selectedCategory,
          ),
    [selectedCategory, allProjects],
  );

  const groupedProjects = [...filteredProjects].reduce(
    (groups: Record<string, Project[]>, project) => {
      (groups[project.category] ??= []).push(project);
      return groups;
    },
    {},
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <PageHeader texts={DATA.morphingTexts.projects} />
      <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-foreground-600">
        {DATA.projects.sectionDescription}
      </p>
      <p className="mx-auto mb-10 max-w-3xl text-center text-sm text-foreground-500">
        Project details are presented in a generalized format to respect
        confidentiality and non-disclosure requirements.
      </p>

      <ProjectsTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {Object.entries(groupedProjects).map(([category, projects]) => (
        <section key={category} className="mb-12">
          <h2 className="mb-5 text-2xl font-bold text-primary-500">{category}</h2>
          <ProjectsGrid projects={projects} />
        </section>
      ))}
    </div>
  );
};

export default ProjectsPage;
