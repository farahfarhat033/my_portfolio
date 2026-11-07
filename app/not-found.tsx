import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="text-4xl font-bold text-foreground md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-default-500">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        className="mt-8 inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        href="/"
      >
        Go back home
      </Link>
    </main>
  );
}