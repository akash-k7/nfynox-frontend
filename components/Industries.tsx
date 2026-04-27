export default function Industries() {
  const items = [
    "Finance",
    "Healthcare",
    "Retail",
    "Telecom",
    "AI & Tech",
    "Enterprise IT",
  ];

  return (
    <section className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((i) => (
          <div key={i} className="border p-4 text-center">{i}</div>
        ))}
      </div>
    </section>
  );
}
