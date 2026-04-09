import { ServicePageTemplate } from "../../components/ui/ServicePageTemplate";
import { servicePageConfigs } from "../../data/servicePageConfigs";

export function Pecas() {
  return <ServicePageTemplate config={servicePageConfigs.pecas} />;
}
