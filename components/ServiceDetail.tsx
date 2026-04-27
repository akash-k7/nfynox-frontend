export default function ServiceDetail({ service }: any) {
  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        {service.title}
      </h1>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: service.content }}
      />

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
        <ul className="list-disc ml-6">
          <li>High Availability</li>
          <li>Secure Infrastructure</li>
          <li>Scalable Architecture</li>
        </ul>
      </div>
    </section>
  );
}
