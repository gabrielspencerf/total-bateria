import { ServicePageTemplate } from "../../components/ui/ServicePageTemplate";
import { servicePageConfigs } from "../../data/servicePageConfigs";

export function Treinamentos() {
  return <ServicePageTemplate config={servicePageConfigs.treinamentos} />;
}
