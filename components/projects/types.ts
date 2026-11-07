export interface Project {
  readonly id: number | string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly details: string;
  readonly overview: string;
  readonly visual: string;
  readonly platforms: readonly string[];
  readonly qaResponsibilities: readonly string[];
  readonly qaResponsibilitiesAreDraft?: boolean;
  readonly image?: string;
  readonly github?: string;
  readonly live?: string;
  readonly gallery: readonly string[];
  tech: readonly {
    name: string;
    icon: string;
  }[];
}

export interface ProjectsTabsProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export interface ProjectsGridProps {
  projects: readonly Project[];
  className?: string;
}

export interface ProjectCardProps {
  project: Project;
  index?: number;
  onViewDetails?: () => void;
  viewDetailsLabel?: string;
}

export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  labels?: {
    overview: string;
    platforms: string;
    qaResponsibilities: string;
    draft: string;
    close: string;
  };
}
