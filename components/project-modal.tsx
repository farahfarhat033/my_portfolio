import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectModalProps } from "@/components/projects/types";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
  labels = defaultLabels,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Modal
      backdrop="blur"
      className="border border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 shadow-md dark:shadow-cyan-900/40 rounded-xl overflow-hidden transition-colors"
      isOpen={isOpen}
      scrollBehavior="inside"
      size="xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="text-xl font-bold text-primary-700 border-b  border-white/20">
          {project.title}
        </ModalHeader>
        <ScrollShadow hideScrollBar size={60}>
          <ModalBody>
            {!project.image && (
              <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/20 via-content2 to-secondary-500/20">
                <Icon className="text-6xl text-primary-500/70" icon={project.visual} />
              </div>
            )}

            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary-500">
              {project.category}
            </p>

            <DetailSection title={labels.overview}>
              <p>{project.overview}</p>
            </DetailSection>
            <DetailSection title={labels.platforms}>
              <DetailList items={project.platforms} />
            </DetailSection>
            <DetailSection title={labels.qaResponsibilities}>
              {project.qaResponsibilitiesAreDraft && (
                <p className="mb-2 text-xs italic text-warning-600">
                  {labels.draft}
                </p>
              )}
              <DetailList items={project.qaResponsibilities} />
            </DetailSection>
          </ModalBody>
        </ScrollShadow>
        <ModalFooter className="flex flex-wrap gap-3 justify-end border-t border-white/20">
          <Button
            className="text-foreground-500"
            color="danger"
            variant="light"
            onClick={onClose}
          >
            {labels.close}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const defaultLabels = {
  overview: "Project Overview",
  platforms: "Platforms & Components",
  qaResponsibilities: "QA Responsibilities",
  draft: "Draft content - subject to confirmation.",
  close: "Close",
};

const DetailSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-5">
    <h3 className="mb-2 text-base font-semibold text-primary-600">{title}</h3>
    <div className="text-sm leading-relaxed text-foreground-600">{children}</div>
  </section>
);

const DetailList = ({ items }: { items: readonly string[] }) => (
  <ul className="grid gap-1 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="text-primary-500">•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
