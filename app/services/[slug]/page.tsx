import { getService } from "@/lib/queries";
import ServiceDetail from "@/components/ServiceDetail";

export default async function ServicePage({ params }: any) {
  const service = await getService(params.slug);

  return <ServiceDetail service={service} />;
}
