import { getService } from "@/lib/queries";

export default async function ServicePage({ params }: any) {
  const service = await getService(params.slug);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{service.title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: service.content }}
      />
    </div>
  );
}
