import { PageHeader } from "@/components/page-header";
import { SocialLinks } from "@/components/contact/social-links";
import { DATA } from "@/data";

export default function ContactPage() {
  return (
    <section className="py-20">
      <PageHeader texts={DATA.morphingTexts.contact} />
      <SocialLinks title="Social Media" links={DATA.footer.socialLinks} />
    </section>
  );
}
