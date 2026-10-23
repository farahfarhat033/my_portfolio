import { AR_DATA } from "@/data/localized";

export default function ArabicProjectsPage() {
  return (
    <section dir="rtl" className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-center text-4xl font-bold">{AR_DATA.projects.title}</h1>
      <p className="mx-auto mt-6 max-w-3xl text-center text-foreground-600">
        {AR_DATA.projects.description}
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {AR_DATA.projectsList.map(([title, description]) => (
          <article key={title} className="rounded-xl bg-content1 p-6">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-4 text-foreground-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
