import { ShieldCheck, Clock, Truck, Wrench } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "19 Anos",
      desc: "De experiência no mercado"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frota Própria",
      desc: "Agilidade na retirada e entrega"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Equipe Especializada",
      desc: "Técnicos altamente capacitados"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Garantia",
      desc: "Qualidade assegurada nos serviços"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-zinc-200">
      {badges.map((badge, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-600/20 group-hover:-translate-y-2">
            {badge.icon}
          </div>
          <h4 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-red-600 transition-colors">{badge.title}</h4>
          <p className="text-sm text-zinc-600 font-medium">{badge.desc}</p>
        </div>
      ))}
    </div>
  );
}
