"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";

import { GradientText } from "@/components/textAnimations/gradient-text";
import { DATA } from "@/data";

type SkillOverviewItem = {
  name: string;
  level: number;
  icon: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
};

export const SkillsOverviewSection = ({
  sectionTitle = DATA.home.skills.sectionTitle,
  sectionDescription = DATA.home.skills.sectionDescription,
  overview = DATA.home.skills.overview,
  direction = "ltr",
}: {
  sectionTitle?: string;
  sectionDescription?: string;
  overview?: readonly SkillOverviewItem[];
  direction?: "ltr" | "rtl";
}) => {

  return (
    <section className="py-20 bg-content1" dir={direction}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradientText
            className="text-xl md:text-2xl font-bold mb-4 gradient"
            text={sectionTitle}
          />
          <p className="text-foreground-600 text-sm max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-5xl mx-auto">
          {overview.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full border-none shadow-md">
                <CardBody className="p-2 sm:p-3">
                  <div className="flex items-start gap-2 sm:gap-3 mb-3">
                    <div className={`shrink-0 p-2 rounded-full bg-${skill.color}-100`}>
                      <Icon
                        className={`w-5 h-5 text-${skill.color}-500`}
                        icon={skill.icon}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold leading-5 break-words">
                        {skill.name}
                      </h3>
                      <p className="text-foreground-600 text-xs">{skill.level}%</p>
                    </div>
                  </div>
                  <Progress
                    className="h-2"
                    color={skill.color}
                    value={skill.level}
                  />
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
