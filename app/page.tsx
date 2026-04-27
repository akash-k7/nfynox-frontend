import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import { getServices } from "@/lib/queries";

export default async function Home() {
  const services = await getServices();

  return (
    <main>
      <Hero />
      <ServicesGrid services={services} />
      <CTA />
    </main>
  );
}
