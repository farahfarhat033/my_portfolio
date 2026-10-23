import { AR_DATA } from "@/data/localized";
import { DATA } from "@/data";

export default function ArabicAboutPage() {
  return (
    <section dir="rtl" className="mx-auto max-w-5xl space-y-12 px-6 py-20">
      <h1 className="text-center text-4xl font-bold">{AR_DATA.about.title}</h1>
      <div className="rounded-2xl bg-content1 p-8">
        <h2 className="text-2xl font-bold">{AR_DATA.home.name}</h2>
        <p className="mt-2 text-primary-500">{AR_DATA.about.profileTitle}</p>
        <div className="mt-6 space-y-4 text-foreground-600">
          {AR_DATA.about.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <section>
        <h2 className="mb-6 text-3xl font-bold">{AR_DATA.about.education}</h2>
        <div className="space-y-4">
          {DATA.about.education.map((item) => (
            <article key={item.title} className="rounded-xl bg-content1 p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-primary-500">{item.date}</p>
              <p className="mt-2 text-foreground-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-6 text-3xl font-bold">{AR_DATA.about.experience}</h2>
        <div className="space-y-4">
          {DATA.about.experience.map((item) => (
            <article key={item.title} className="rounded-xl bg-content1 p-6">
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-primary-500">{item.date}</p>
              <p className="mt-2 text-foreground-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
