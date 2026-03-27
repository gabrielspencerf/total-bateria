import { Factory, ShoppingCart, Package, Building, Truck, Plane } from "lucide-react";

interface SegmentCardProps {
  title: string;
  description: string;
  demandas?: string[];
  id?: string;
}

export function SegmentCard({ title, description, demandas, id }: SegmentCardProps) {
  // Helper to map segment IDs to icons
  const getIcon = (segmentId?: string) => {
    switch (segmentId) {
      case "industria":
        return <Factory className="w-8 h-8" />;
      case "logistica":
        return <Truck className="w-8 h-8" />;
      case "varejo":
        return <ShoppingCart className="w-8 h-8" />;
      case "atacado":
        return <Package className="w-8 h-8" />;
      case "construcao":
        return <Building className="w-8 h-8" />;
      case "aeroportos":
        return <Plane className="w-8 h-8" />;
      default:
        return <Factory className="w-8 h-8" />; // Default icon
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 opacity-50" />
      
      <div className="relative z-10 flex-grow">
        <div className="w-16 h-16 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
          {getIcon(id)}
        </div>
        
        <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-600 leading-relaxed mb-6 whitespace-pre-line">
          {description}
        </p>
        
        {demandas && demandas.length > 0 && (
          <div className="mt-auto">
            <h4 className="font-semibold text-zinc-900 mb-3 flex items-center">
              <span className="w-1 h-4 bg-red-600 rounded-full mr-2"></span>
              Principais demandas:
            </h4>
            <ul className="space-y-2">
              {demandas.map((demanda, index) => (
                <li key={index} className="flex items-start text-zinc-600 text-sm group-hover:text-zinc-700 transition-colors">
                  <svg className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{demanda}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
