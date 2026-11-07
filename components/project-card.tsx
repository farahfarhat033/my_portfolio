import { memo } from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";

import { ProjectCardProps } from "@/components/projects/types";

export const ProjectCard = memo(function ProjectCard({
  project,
  onViewDetails,
  viewDetailsLabel = "View Details",
}: ProjectCardProps) {
  return (
    <Card
      isFooterBlurred
      isHoverable
      className="
        border-none bg-white/90 dark:bg-black/70
        shadow-md dark:shadow-cyan-900/40
        rounded-xl overflow-hidden h-full w-full
        transition-colors
      "
      radius="lg"
    >
      <CardBody className="p-0 flex flex-col h-full">
        <div className="relative flex aspect-[16/7] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary-500/20 via-content2 to-secondary-500/20">
          {project.image ? (
            <Image
              isZoomed
              removeWrapper
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              classNames={{
                img: "w-full h-full object-cover",
                zoomedWrapper: "w-full h-full",
              }}
              loading="lazy"
              src={project.image}
            />
          ) : (
            <Icon className="text-6xl text-primary-500/70" icon={project.visual} />
          )}
          <CardFooter
            className="
    justify-center
    bg-black/40 
    border-white/20 border-1
    overflow-hidden py-2.5 absolute before:rounded-xl rounded-large
    bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10
    backdrop-blur-sm
  "
          >
            <p className="text-xs font-medium text-white tracking-wider uppercase z-10">
              {project.category}
            </p>
          </CardFooter>
        </div>

        <div className="flex flex-grow flex-col p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="mb-3 line-clamp-2 flex-grow text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.platforms.slice(0, 3).map((platform) => (
              <span
                key={platform}
                className="rounded-full bg-primary-500/10 px-2 py-1 text-[10px] font-medium text-primary-600 dark:text-primary-300"
              >
                {platform}
              </span>
            ))}
          </div>
          <Button
            aria-label="View Details"
            className="w-full border-cyan-400 text-cyan-300 transition-colors hover:bg-cyan-400/10 md:w-auto"
            color="primary"
            endContent={<Icon icon="lucide:arrow-right" />}
            variant="bordered"
            onClick={onViewDetails}
          >
            {viewDetailsLabel}
          </Button>
        </div>
      </CardBody>
    </Card>
  );
});
