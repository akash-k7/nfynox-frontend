export default function Locations() {
  const cities = [
    "Noida",
    "Mumbai",
    "Bangalore",
    "Kochi",
    "Chennai",
    "Hyderabad",
    "Kolkata",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">India Locations</h2>
      <div className="flex flex-wrap gap-4">
        {cities.map((c) => (
          <span key={c} className="px-4 py-2 border rounded">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}
