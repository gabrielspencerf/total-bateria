import { CheckCircle2, Star } from "lucide-react";

interface DifferentialCardProps {
  title: string;
  description: string;
  benefits?: string[];
  icon?: React.ReactNode;
}

export function DifferentialCard({ title, description, benefits, icon }: DifferentialCardProps) {
  return (
    <div className="p-8 bg-white rounded-2xl border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 group relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 opacity-50" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
          {icon || <Star className="w-6 h-6" />}
        </div>
        
        <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-red-600 transition-colors">{title}</h3>
        <p className="text-zinc-600 mb-6">{description}</p>
        
        {benefits && benefits.length > 0 && (
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start text-sm text-zinc-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
