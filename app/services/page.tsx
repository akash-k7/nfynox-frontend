import { getServices } from "@/lib/queries";

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Services</h1>

      {services.map((s: any) => (
        <div key={s.slug}>
          <a href={`/services/${s.slug}`}>{s.title}</a>
        </div>
      ))}
    </div>
  );
}
