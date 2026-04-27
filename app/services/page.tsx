import { getServices } from "@/lib/queries";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s: any) => (
          <a
            key={s.slug}
            href={`/services/${s.slug}`}
            className="border p-6 rounded hover:shadow"
          >
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm">
              Enterprise-grade infrastructure solutions
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
