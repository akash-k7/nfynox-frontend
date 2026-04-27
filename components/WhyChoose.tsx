export default function WhyChoose() {
  const points = [
    "Tier IV Infrastructure",
    "24/7 NOC & SOC",
    "Carrier Neutral Connectivity",
    "Energy Efficient Operations",
  ];

  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold mb-6">Why Choose Nfynox</h2>
      <ul className="grid md:grid-cols-2 gap-4">
        {points.map((p) => (
          <li key={p} className="border p-4 rounded">{p}</li>
        ))}
      </ul>
    </section>
  );
}
