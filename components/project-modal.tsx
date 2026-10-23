import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  ScrollShadow,
} from "@heroui/react";

import ImageGallery from "@/components/image-gallery";
import { ProjectModalProps } from "@/components/projects/types";

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
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
            {project.gallery && project.gallery.length > 0 && (
              <ImageGallery images={project.gallery} />
            )}

            <p className="text-sm text-primary-500 mb-3 font-medium uppercase tracking-wide">
              {project.category}
            </p>

            <div className="text-foreground-600 leading-relaxed mb-6 whitespace-pre-line">
              {project.details}
            </div>
          </ModalBody>
        </ScrollShadow>
        <ModalFooter className="flex flex-wrap gap-3 justify-end border-t border-white/20">
          <Button
            className="text-foreground-500"
            color="danger"
            variant="light"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
