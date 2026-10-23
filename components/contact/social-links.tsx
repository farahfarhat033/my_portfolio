import { Icon } from "@iconify/react";

type SocialLink = {
  name: string;
  icon: string;
};

type SocialLinksProps = {
  title: string;
  links: readonly SocialLink[];
  dir?: "ltr" | "rtl";
};

export const SocialLinks = ({
  title,
  links,
  dir = "ltr",
}: SocialLinksProps) => (
  <section dir={dir} className="mx-auto max-w-2xl rounded-2xl bg-content1/60 px-6 py-8 shadow-sm">
    <h2 className="mb-10 text-2xl font-bold text-primary-500">{title}</h2>
    <div className="relative space-y-10 border-l border-primary-500 pl-8">
      {links.map((link) => (
        <div key={link.name} className="relative flex min-h-8 items-center gap-5">
          <span className="absolute -left-[2.15rem] h-4 w-4 rounded-full border-2 border-background bg-primary-500 shadow-sm" />
          <Icon className="text-2xl text-primary-500" icon={link.icon} />
          <span className="text-lg font-medium">{link.name}</span>
        </div>
      ))}
    </div>
  </section>
);
