"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";
import { capitalize } from "@/lib/utils";
import { TechCategories } from "@/components/about/types";

interface SkillsProps {
  tech: TechCategories;
  title?: string;
  categoryLabels?: Readonly<Record<string, string>>;
}

export const Skills = ({
  tech,
  title = "Skills",
  categoryLabels = {},
}: SkillsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    <SectionHeader icon="mdi:tools" title={title} />

    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:-mx-6 xl:grid-cols-3">
      {Object.entries(tech).map(([category, { description, tools }]) => (
        <article
          key={category}
          className="overflow-hidden rounded-2xl border border-divider bg-content1/80 p-6 shadow-sm backdrop-blur-sm"
        >
          <div className="mb-4 text-center">
            <h3 className="text-xl font-bold text-primary-500">
              {categoryLabels[category] ?? capitalize(category)}
            </h3>
            <p className="mt-2 text-sm leading-6 text-foreground-600">
              {description}
            </p>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[360px]">
            <OrbitingCircles
              className="[&>div]:hover:scale-110 [&>div]:hover:text-primary-500"
              duration={tools.length * 3 + 12}
              iconSize={64}
              radius={118}
            >
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex h-14 w-16 flex-col gap-0.5 rounded-lg border border-divider bg-content2/95 px-1 py-1.5 text-center shadow-md transition-transform duration-300"
                  title={tool.name}
                >
                  <Icon
                    className="mx-auto shrink-0 text-primary-500 transition-colors duration-300 group-hover:text-primary"
                    height={19}
                    icon={tool.icon}
                    width={19}
                  />
                  <span className="line-clamp-2 text-[10px] font-medium leading-3 text-foreground-700">
                    {tool.name}
                  </span>
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </article>
      ))}
    </div>
  </motion.div>
);