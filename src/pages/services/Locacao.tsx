import { ServicePageTemplate } from "../../components/ui/ServicePageTemplate";
import { servicePageConfigs } from "../../data/servicePageConfigs";

export function Locacao() {
  return <ServicePageTemplate config={servicePageConfigs.locacao} />;
}
