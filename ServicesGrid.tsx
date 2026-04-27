export default function ServicesGrid({ services }) {
  return (
    <div className="grid grid-cols-2 gap-6 p-6">
      {services.map((s) => (
        <a key={s.slug} href={`/services/${s.slug}`} className="p-4 border rounded">
          {s.title}
        </a>
      ))}
    </div>
  );
}