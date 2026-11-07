"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { GradientText } from "@/components/textAnimations/gradient-text";
import { Project } from "@/components/projects/types";
import { DATA } from "@/data";

export const WorkSection = ({
  work = DATA.projects.work,
  sectionTitle = DATA.projects.sectionTitle,
  sectionDescription = DATA.projects.sectionDescription,
  viewDetailsLabel = "View Details",
  modalLabels,
}: {
  work?: readonly Project[];
  sectionTitle?: string;
  sectionDescription?: string;
  viewDetailsLabel?: string;
  modalLabels?: {
    overview: string;
    platforms: string;
    qaResponsibilities: string;
    draft: string;
    close: string;
  };
}) => {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="py-20 bg-background" id="work-section">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-xl md:text-2xl font-bold mb-4"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-sm max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {work.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              className="w-full md:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard
                project={project}
                viewDetailsLabel={viewDetailsLabel}
                onViewDetails={() => handleOpenModal(project)}
              />
            </motion.div>
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          project={selectedProject}
          labels={modalLabels}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};
