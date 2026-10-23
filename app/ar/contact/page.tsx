import { AR_DATA } from "@/data/localized";
import { DATA } from "@/data";
import { SocialLinks } from "@/components/contact/social-links";

export default function ArabicContactPage() {
  const icons = DATA.footer.socialLinks.map((link, index) => ({
    name: AR_DATA.contact.socialLinks[index],
    icon: link.icon,
  }));

  return (
    <section dir="rtl" className="px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-bold">
        {AR_DATA.contact.title}
      </h1>
      <SocialLinks
        dir="rtl"
        links={icons}
        title={AR_DATA.contact.socialTitle}
      />
    </section>
  );
}
