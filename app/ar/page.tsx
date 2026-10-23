import Link from "next/link";
import { AR_DATA } from "@/data/localized";

export default function ArabicHomePage() {
  return (
    <div dir="rtl" className="space-y-20 py-20 text-center">
      <section className="px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-500">
          مرحباً، أنا {AR_DATA.home.name}
        </h1>
        <p className="mt-6 text-xl text-foreground-600">
          {AR_DATA.home.title}: {AR_DATA.home.subtitle}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link className="text-primary-500 underline" href="/ar/about">
            نبذة عني
          </Link>
          <Link className="text-primary-500 underline" href="/ar/projects">
            المشاريع
          </Link>
        </div>
      </section>
      <section className="bg-content1 px-6 py-16">
        <h2 className="text-3xl font-bold">{AR_DATA.home.skillsTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-foreground-600">
          {AR_DATA.home.skillsDescription}
        </p>
      </section>
    </div>
  );
}
