"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { DATA } from "@/data";
import { AR_DATA } from "@/data/localized";

export const Footer = () => {
  const pathname = usePathname();
  const isArabic = pathname.startsWith("/ar");
  const { name, contact } = DATA.footer;
  const footerText = isArabic ? AR_DATA.footer : null;
  const socialLinks = isArabic
    ? DATA.footer.socialLinks.map((social, index) => ({
        ...social,
        name: AR_DATA.footer.socialLinks[index],
      }))
    : DATA.footer.socialLinks;
  const description = footerText?.description ?? DATA.footer.description;
  const services = footerText?.services ?? DATA.footer.services;
  const connectTitle = footerText?.connect ?? "Let's Connect";
  const servicesTitle = footerText?.servicesTitle ?? "Services";
  const contactTitle = footerText?.contactTitle ?? "Contact";

  return (
    <footer className="bg-content1 py-12">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">{connectTitle}</h3>
            <p className="text-foreground-600 mb-4">{description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  isIconOnly
                  aria-label={social.name}
                  as={social.href ? "a" : "button"}
                  href={social.href || undefined}
                  rel={social.href ? "noreferrer" : undefined}
                  target={social.href ? "_blank" : undefined}
                  variant="light"
                >
                  <Icon className="h-5 w-5" icon={social.icon} />
                </Button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{servicesTitle}</h4>
            <ul className="space-y-2 text-foreground-600">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">{contactTitle}</h4>
            <ul className="space-y-2 text-foreground-600">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" />
                <a href={`mailto:${contact.email}`}>
                  {footerText?.email ?? contact.email}
                  {footerText ? `: ${contact.email}` : null}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" />
                {footerText
                  ? `${footerText.location}: ${footerText.locationValue}`
                  : contact.location}
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-divider pt-8 text-center text-foreground-500">
          <p>
            © {new Date().getFullYear()} {name}.{" "}
            {footerText?.madeWith ?? "made with"} &hearts;.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
